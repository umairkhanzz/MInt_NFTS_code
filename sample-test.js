const { expect } = require("hardhat");

describe("Simple Contract", function () {
  it("Should deploy the contract successfully", async function () {
    const Contract = await ethers.getContractFactory("MyNFT");
    const contract = await Contract.deploy();
    await contract.deployed();

    // Check if the contract is deployed
    expect(contract.address).to.be.properAddress;
  });
});
