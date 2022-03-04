const MyTokenCoin = artifacts.require("MyTokenCoin");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("MyTokenCoin", function (accounts) {
  let contract
  
  const owner = accounts[0]
  const maxSupply = 100

  beforeEach('Setup contract', async () => {
    contract = await MyTokenCoin.deployed();
  })

  
  it(`should put ${maxSupply} MetaCoin in the first account`, async () => {
    const balance = await contract.balanceOf.call(owner)
    
    assert.equal(
      balance.valueOf(),
      maxSupply,
      `${maxSupply} wasn't in the first account`
    );
  })
  
  it(`should put ${maxSupply} MetaCoin in the first account`, async () => {
    const balance = await contract.balanceOf.call(owner)

    assert.equal(
      balance.valueOf(),
      maxSupply,
      `${maxSupply} wasn't in the first account`
    );
  })

});
