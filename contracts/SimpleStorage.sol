// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract SimpleStorage {
    // boolean , uint , int , address , bytes
    // bool hasFavoriteNumber = true ;
    // uint256 favoriteNumber = 123 ;
    // string favoriteNumberInText  = "Five" ;
    // int256 favoriteInt  =-5 ;
    // address myAddress = 0x8feb9E33860ef291A66e739EE4489710548F836C ;
    // bytes32 favoriteBytes = "cat" ;

    // This gets initialized to zero
    uint256 favoriteNumber;
    People public person = People({favoriteNumber: 2, name: "Med"});
    //Create a Struct
    struct People {
        uint256 favoriteNumber;
        string name;
    }
    //Arrays

    People[] public people;

    //Mapping
    mapping(string => uint256) public nameToFavoriteNumber;

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        people.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }

    function store(uint256 _favoriteNumber) public virtual {
        favoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }
}
