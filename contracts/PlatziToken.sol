//SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PlatziToken is ERC20{

    constructor(uint _initialSupply) ERC20('PlatziToken', 'PLZ'){
        _mint(msg.sender, _initialSupply*(10**decimals()));
    }

    function decimals() public pure override returns(uint8){
        return 6;
    }
}