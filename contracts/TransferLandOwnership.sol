pragma solidity ^0.8.27;

contract TransferLandOwnership {
    struct Land {
        string details;
        address owner;
    }

    mapping(uint => Land) public lands;
    uint public landCount;

    function transferOwnership(uint _landId, address _newOwner) public {
        require(lands[_landId].owner == msg.sender, "Only the current owner can transfer ownership");
        lands[_landId].owner = _newOwner;
    }
}


