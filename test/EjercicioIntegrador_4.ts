import { loadFixture, time } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { EjercicioCuatroSol } from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("EnglishAuction", function () {
  async function deployFixture() {
    const [owner, alice, bob, carl] = await ethers.getSigners();
    const otherAccounts = [alice, bob, carl];

    const EnglishAuction = await ethers.getContractFactory("EjercicioCuatro");
    const englishAuction = await EnglishAuction.deploy();

    return { englishAuction, owner, alice, bob, carl, otherAccounts };
  }

  describe("Crear subasta", function () {
    it("Envía menos de un Ether", async function () {
      const { englishAuction } = await loadFixture(deployFixture);

      var startTime = 1000000;
      var endTime = 2000000;
      var incorrectEther = ethers.utils.parseEther("0.9");
      await expect(
        englishAuction.creaSubasta(startTime, endTime, {
          value: incorrectEther,
        })
      ).to.be.revertedWithCustomError(englishAuction, "CantidadIncorrectaEth");
    });

    it("Utiliza un tiempo inválido", async function () {
      const { englishAuction } = await loadFixture(deployFixture);

      var startTime = 2000000;
      var endTime = 1000000;
      var correctEther = ethers.utils.parseEther("1");
      await expect(
        englishAuction.creaSubasta(startTime, endTime, { value: correctEther })
      ).to.be.revertedWithCustomError(englishAuction, "TiempoInvalido");
    });

    it("Envía 1 Ether", async function () {
      const { englishAuction, owner } = await loadFixture(deployFixture);

      var startTime = 1000000;
      var endTime = 2000000;
      var correctEther = ethers.utils.parseEther("1");
      var tx = await englishAuction.creaSubasta(startTime, endTime, {
        value: correctEther,
      });

      await expect(tx).to.changeEtherBalances(
        [owner, englishAuction.address],
        [correctEther.mul(-1), correctEther]
      );
    });

    it("Se dispara evento SubastaCreada", async function () {
      const { englishAuction, owner, otherAccounts } = await loadFixture(
        deployFixture
      );

      var startTime = 1000000;
      var endTime = 2000000;
      var correctEther = ethers.utils.parseEther("1");
      var tx = await englishAuction.creaSubasta(startTime, endTime, {
        value: correctEther,
      });

      const hash = ethers.utils.keccak256(
        ethers.utils.solidityPack(
          ["uint256", "uint256", "address", "uint256"],
          [startTime, endTime, owner.address, await time.latest()]
        )
      );
      await expect(tx)
        .to.emit(englishAuction, "SubastaCreada")
        .withArgs(hash, owner.address);
    });

    it("Subasta es incluida en lista de subastas activas", async function () {
      const { englishAuction, owner } = await loadFixture(deployFixture);
      var startTime = 1000000;
      var endTime = 2000000;
      var correctEther = ethers.utils.parseEther("1");
      await englishAuction.creaSubasta(startTime, endTime, {
        value: correctEther,
      });
      var hash = ethers.utils.keccak256(
        ethers.utils.solidityPack(
          ["uint256", "uint256", "address", "uint256"],
          [startTime, endTime, owner.address, await time.latest()]
        )
      );

      var listaSubastaActivas = await englishAuction.verSubastasActivas();
      expect(listaSubastaActivas).to.contain(hash);
    });
  });

  describe("Proponer Oferta", function () {
    var _englishAuction: EjercicioCuatroSol,
      tx: any,
      hash: string,
      alice: SignerWithAddress;
    beforeEach(async () => {
      const fixture = await loadFixture(deployFixture);
      _englishAuction = fixture.englishAuction;
      alice = fixture.alice;

      var startTime = await time.latest();
      var endTime = startTime + 1000;
      var correctEther = ethers.utils.parseEther("1");
      tx = await _englishAuction.creaSubasta(startTime, endTime, {
        value: correctEther,
      });

      hash = ethers.utils.keccak256(
        ethers.utils.solidityPack(
          ["uint256", "uint256", "address", "uint256"],
          [startTime, endTime, fixture.owner.address, await time.latest()]
        )
      );
    });

    it("Falla si no existe subasta", async function () {
      var wrongHash = ethers.utils.keccak256(
        ethers.utils.solidityPack(["uint256"], [209310298312])
      );
      var amountEther = ethers.utils.parseEther("1");
      await expect(
        _englishAuction.proponerOferta(wrongHash, { value: amountEther })
      ).to.be.revertedWithCustomError(_englishAuction, "SubastaInexistente");
    });

    it("Falla si es fuera de tiempo", async function () {
      await time.increaseTo((await time.latest()) + 2000);
      var amountEther = ethers.utils.parseEther("1");
      await expect(
        _englishAuction.proponerOferta(hash, { value: amountEther })
      ).to.be.revertedWithCustomError(_englishAuction, "FueraDeTiempo");
    });

    it("Falla si oferta enviada no es mayor a la anterior", async function () {
      var amountEther = ethers.utils.parseEther("0.5");
      await _englishAuction.proponerOferta(hash, { value: amountEther });
      amountEther = ethers.utils.parseEther("0.3");
      await expect(
        _englishAuction
          .connect(alice)
          .proponerOferta(hash, { value: amountEther })
      ).to.be.revertedWithCustomError(_englishAuction, "OfertaInvalida");
    });

    it("Extiende tiempo de subasta", async function () {
      await time.increaseTo((await time.latest()) + 998);
      var amountEther = ethers.utils.parseEther("1");
      await _englishAuction.proponerOferta(hash, { value: amountEther });

      await time.increaseTo((await time.latest()) + 290);
      await _englishAuction.proponerOferta(hash, { value: amountEther });
    });

    it("Emite evento OfertaPropuesta", async function () {
      var amountEther = ethers.utils.parseEther("1");
      var _tx = _englishAuction
        .connect(alice)
        .proponerOferta(hash, { value: amountEther });

      // emite evento
      await expect(_tx)
        .to.emit(_englishAuction, "OfertaPropuesta")
        .withArgs(alice.address, ethers.utils.parseEther("1"));
    });
  });

  describe("Finalizar Subasta", function () {
    var _englishAuction: EjercicioCuatroSol,
      hash: string,
      alice: SignerWithAddress,
      bob: SignerWithAddress,
      carl: SignerWithAddress;

    beforeEach(async () => {
      const fixture = await loadFixture(deployFixture);
      _englishAuction = fixture.englishAuction;
      alice = fixture.alice;
      bob = fixture.bob;
      carl = fixture.carl;

      var startTime = await time.latest();
      var endTime = startTime + 1000;
      var correctEther = ethers.utils.parseEther("1");
      await _englishAuction.creaSubasta(startTime, endTime, {
        value: correctEther,
      });

      hash = ethers.utils.keccak256(
        ethers.utils.solidityPack(
          ["uint256", "uint256", "address", "uint256"],
          [startTime, endTime, fixture.owner.address, await time.latest()]
        )
      );
      var aEth;
      aEth = ethers.utils.parseEther("0.1");
      await _englishAuction
        .connect(alice)
        .proponerOferta(hash, { value: aEth });
      aEth = ethers.utils.parseEther("0.2");
      await _englishAuction.connect(bob).proponerOferta(hash, { value: aEth });
      aEth = ethers.utils.parseEther("0.3");
      await _englishAuction.connect(carl).proponerOferta(hash, { value: aEth });
    });

    it("Error si subasta no existe", async function () {
      var wrongHash = ethers.utils.keccak256(
        ethers.utils.solidityPack(["uint256"], [209310298312])
      );

      await expect(
        _englishAuction.finalizarSubasta(wrongHash)
      ).to.be.revertedWithCustomError(_englishAuction, "SubastaInexistente");
    });

    it("Error si subasta no ha terminado", async function () {
      await expect(
        _englishAuction.finalizarSubasta(hash)
      ).to.be.revertedWithCustomError(_englishAuction, "SubastaEnMarcha");
    });

    it("Emite evento si subasta ha finalizado", async function () {
      await time.increaseTo((await time.latest()) + 2000);
      var _tx = await _englishAuction.finalizarSubasta(hash);
      var aEth = ethers.utils.parseEther("0.3");
      await expect(_tx)
        .to.emit(_englishAuction, "SubastaFinalizada")
        .withArgs(carl.address, aEth);
    });

    it("Subasta no se puede volver a finalizar", async function () {
      await time.increaseTo((await time.latest()) + 2000);
      await _englishAuction.finalizarSubasta(hash);
      ethers.utils.parseEther("0.3");
      await expect(
        _englishAuction.finalizarSubasta(hash)
      ).to.be.revertedWithCustomError(_englishAuction, "SubastaInexistente");
    });

    it("Subasta finalizada no está en lista de subastas activas", async function () {
      await time.increaseTo((await time.latest()) + 2000);
      await _englishAuction.finalizarSubasta(hash);
      var listaSubastaActivas = await _englishAuction.verSubastasActivas();
      expect(listaSubastaActivas).to.not.contain(hash);
    });
  });

  describe("Recuperar Oferta", function () {
    var _englishAuction: EjercicioCuatroSol,
      hash: string,
      alice: SignerWithAddress,
      bob: SignerWithAddress,
      carl: SignerWithAddress;

    beforeEach(async () => {
      const fixture = await loadFixture(deployFixture);
      _englishAuction = fixture.englishAuction;
      alice = fixture.alice;
      bob = fixture.bob;
      carl = fixture.carl;

      var startTime = await time.latest();
      var endTime = startTime + 1000;
      var correctEther = ethers.utils.parseEther("1");
      await _englishAuction.creaSubasta(startTime, endTime, {
        value: correctEther,
      });

      hash = ethers.utils.keccak256(
        ethers.utils.solidityPack(
          ["uint256", "uint256", "address", "uint256"],
          [startTime, endTime, fixture.owner.address, await time.latest()]
        )
      );
      var aEth;
      aEth = ethers.utils.parseEther("0.1");
      await _englishAuction
        .connect(alice)
        .proponerOferta(hash, { value: aEth });
      aEth = ethers.utils.parseEther("0.2");
      await _englishAuction.connect(bob).proponerOferta(hash, { value: aEth });
      aEth = ethers.utils.parseEther("0.3");
      await _englishAuction.connect(carl).proponerOferta(hash, { value: aEth });
    });

    it("Subasta sigue en marcha", async function () {
      await expect(
        _englishAuction.recuperarOferta(hash)
      ).to.be.revertedWithCustomError(_englishAuction, "SubastaEnMarcha");
    });

    it("Postores recuperan su oferta (perdedores y ganador)", async function () {
      await time.increaseTo((await time.latest()) + 2000);
      await _englishAuction.finalizarSubasta(hash);

      var tx;
      tx = await _englishAuction.connect(alice).recuperarOferta(hash);
      await expect(tx).changeEtherBalances(
        [alice.address, _englishAuction.address],
        [ethers.utils.parseEther("0.1"), ethers.utils.parseEther("-0.1")]
      );

      tx = await _englishAuction.connect(bob).recuperarOferta(hash);
      await expect(tx).changeEtherBalances(
        [bob.address, _englishAuction.address],
        [ethers.utils.parseEther("0.2"), ethers.utils.parseEther("-0.2")]
      );

      tx = await _englishAuction.connect(carl).recuperarOferta(hash);
      await expect(tx).changeEtherBalances(
        [carl.address, _englishAuction.address],
        [ethers.utils.parseEther("1.3"), ethers.utils.parseEther("-1.3")]
      );
    });
  });
});
