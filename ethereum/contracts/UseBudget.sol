pragma solidity ^0.4.16;

contract UseBudget {
    struct Request {
        address recipient;
        uint value;
        string description;
        uint status;
        uint approvalCount;
        address[] public investorsWhoApproved;
    }

    address public company;
    Request[] public requests;
    mapping(address => bool) public investors;

    address[] public investors;

    constructor() public {
        company = msg.sender;
    }

    function invest() public payable accessRestrictCompany {
        require(msg.value >= 1 ether);

        investors[msg.sender] = true;
        company.transfer(this.balance);
    }

    function createRequest( string recipient,
                            uint value,
                            string description) public accessCompany {

        Request memory request = new Request({
            recipient: recipient,
            value: value,
            description: description,
            status: 0,
            approvalCount: 0
        });

        requests.push(request);
    }

    function approveRequest(uint index) public accessInvestors {

    }


    modifier accessCompany() {
        require(company == msg.sender);
        _;
    }

    modifier accessRestrictCompany() {
        require(company != msg.sender);
        _;
    }

    modifier accessInvestors() {
        require(investors[msg.sender]);
        _;
    }
}
