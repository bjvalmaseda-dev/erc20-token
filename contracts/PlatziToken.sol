//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PlatziToke is ERC20{

    constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol){
        _mint(msg.sender, 100000*(10**decimals()));
    }

    function decimals() public pure override returns(uint8){
        return 6;
    }
}