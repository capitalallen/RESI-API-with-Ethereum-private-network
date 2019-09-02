const Migrations = artifacts.require("Migrations");
var Hello = artifacts.require("./hello.sol");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Hello);
};
