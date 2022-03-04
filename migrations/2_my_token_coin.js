const Migrations = artifacts.require("MyTokenCoin");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
