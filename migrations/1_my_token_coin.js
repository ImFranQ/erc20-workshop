const Migrations = artifacts.require("MyTokenCoin");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(Migrations, { from: accounts[0] });
};
