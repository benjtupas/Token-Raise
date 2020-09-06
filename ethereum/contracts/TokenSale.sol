pragma solidity ^0.4.16;

contract TokenSale {
    address public company;
    address[] public investors;

    constructor() public {
        company = msg.sender;
    }

    function invest() public payable investorsAccess {
        require(msg.value >= 1 ether);

        investors.push(msg.sender);
        company.transfer(this.balance);
    }

    function getInvestors() public view companyAccess returns(address[]) {
        return investors;
    }

    modifier companyAccess() {
        require(company == msg.sender);
        _;
    }

    modifier investorsAccess() {
        require(company != msg.sender);
        _;
    }
}
