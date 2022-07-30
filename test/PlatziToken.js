const { expect } = require("chai");
const { ethers } = require("hardhat");

const initialSupply = 1000000;
const tokenName = "PlatziToken";
const tokenSymbol = "PLZ";

describe("Platzi token tests", function() {
  before(async function() {
    const availableSigners = await ethers.getSigners();
    this.deployer = availableSigners[0];

    const PlatziToken = await ethers.getContractFactory("PlatziToken");
    this.platziToken = await PlatziToken.deploy(initialSupply); //deploying contract
    await this.platziToken.deployed();
  });

  it('Should be named PlatziToken', async function() { 
    const fetchedTokenName = await this.platziToken.name(); //get token name
    expect(fetchedTokenName).to.be.equal(tokenName); //check if name is equal to PlatziToken
  });

  it('Should have symbol "PLZ"', async function() {
    const fetchedTokenSymbol = await this.platziToken.symbol();//get token symbols 
    expect(fetchedTokenSymbol).to.be.equal(tokenSymbol); //check if symbol is equal to PLZ
  });

  it('Should have totalSupply passed in during deploying', async function() {
    const [ fetchedTotalSupply, decimals ] = await Promise.all([ //get a totalSupply and decimals
      this.platziToken.totalSupply(),
      this.platziToken.decimals(),
    ]);
    const expectedTotalSupply = ethers.BigNumber.from(initialSupply).mul(ethers.BigNumber.from(10).pow(decimals)); //convert a supply to big numbers 
    expect(fetchedTotalSupply.eq(expectedTotalSupply)).to.be.true;
  });


});