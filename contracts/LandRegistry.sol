pragma solidity ^0.8.27;

contract LandRegistry {
    struct Land {
        string details;
        address owner;
    }

    mapping(uint => Land) public lands;
    uint public landCount;

    function registerLand(address _owner, string memory _details) public {
        landCount++;
        lands[landCount] = Land(_details, _owner);
    }

    function getLand(uint _landId) public view returns (string memory, address) {
        Land memory land = lands[_landId];
        return (land.details, land.owner);
    }
}


