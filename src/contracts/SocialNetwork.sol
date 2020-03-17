pragma solidity ^0.5.0;

contract SocialNetwork{
    string public name;
    uint public postCount;
    mapping(uint => Post) public posts;


    struct Post{
        uint id;
        string content;
        uint tipAmount;
        address author; 
    }

    event PostCreated(
        uint id,
        string content,
        uint tipAmount,
        address author

    );

    constructor() public {
         name = "Decentralized Social Network";

    }

    function createPost(string memory _content) public {
        //require valid function
        require(bytes(_content).length>0);
        //increment post count
        postCount++;
        //create post
        posts[postCount] = Post(postCount, _content, 0, msg.sender);
        //Trigger Event
        emit PostCreated(postCount, _content, 0, msg.sender);    
    }
}  