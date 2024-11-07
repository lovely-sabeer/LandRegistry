const LandRegistry = artifacts.require("LandRegistry");
const TransferLandOwnership = artifacts.require("TransferLandOwnership");

module.exports = function(deployer) {
  deployer.deploy(LandRegistry);
  deployer.deploy(TransferLandOwnership);
};

