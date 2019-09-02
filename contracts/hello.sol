pragma solidity ^0.5.0;


contract hello {
    string private greeting;

    constructor() public {
      greeting = "hello world";
    }

    function greet() public view returns (string memory) {
      return greeting;
    }
}
