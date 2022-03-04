// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyTokenCoin is ERC20 {

  uint256 initialSupply = 100000000000000000000;

  constructor() ERC20("MyTokenCoin", "MTC") {
    _mint(msg.sender, initialSupply);
  }
}