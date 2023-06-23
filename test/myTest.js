const { ethers } = require("hardhat");
const { assert, expect } = require("chai");
describe("SimpleStorage", function () {
  let simpleStorageFactory, simpleStorage;
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });
  it("should have 0 as the initial value", async function () {
    const initialValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    assert.equal(initialValue + "", expectedValue);
  });
  it("should update when we call store function", async function () {
    const expectedValue = 7;
    const txReceipt = await simpleStorage.store(expectedValue);
    txReceipt.wait(1);
    const newValue = await simpleStorage.retrieve();
    assert.equal(newValue + "", expectedValue + "");
  });
});
