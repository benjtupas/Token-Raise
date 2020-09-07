pragma solidity ^0.4.17;

contract CampaignContractGenerator {
    address[] public campaigns;

    function create() public {
        address campaign = new Campaign(msg.sender);
        campaigns.push(campaign);
    }

    function getCampaigns() public view returns (address[]) {
        return campaigns;
    }
}

contract Campaign {

    struct Request {
        address recipient;
        uint value;
        string description;
        bool complete;
        uint approvalCount;
        mapping(address => bool) investorsWhoApproved;
    }

    address public manager;
    Request[] public requests;
    mapping(address => bool) public investors;
    uint public numberOfInvestors;

    function Campaign(address creator) public {
        manager = creator;
    }

    function invest() public payable restrictManager {
        require(msg.value >= 1 ether);

        if(!investors[msg.sender]) {
            numberOfInvestors++;
        }

        investors[msg.sender] = true;
    }

    function createRequest( address recipient,
                            uint value,
                            string description) public accessManager {

        Request memory request = Request({
            recipient: recipient,
            value: value,
            description: description,
            complete: false,
            approvalCount: 0
        });

        requests.push(request);
    }

    function approveRequest(uint index) public accessInvestors {
        Request storage request = requests[index];

        require(!request.investorsWhoApproved[msg.sender]);

        request.investorsWhoApproved[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public accessManager {
        Request storage request = requests[index];

        require(request.approvalCount > (numberOfInvestors / 2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    // Access
    modifier accessManager() {
        require(manager == msg.sender);
        _;
    }

    modifier restrictManager() {
        require(manager != msg.sender);
        _;
    }

    modifier accessInvestors() {
        require(investors[msg.sender]);
        _;
    }
}
