//SPDX-License-Identifier: UNLICENSED
// pragma solidity ^0.8.0;

// // contract is a class here
// contract Transactions {
//     uint256 transac_count;  // num of transactions

//     // function
//     //address -> type and form -> variable name
//     event Transfer(address sender , address receiver , uint amount , string message , uint256 timestamp, string keyword);     

//     // structure
//     struct TransferStruct{
//         //similar to object 
//         //obj properties, obj type
//         address sender;
//         address receiver;
//         uint amount;
//         string message;
//         uint256 timestamp;
//         string keyword;
//     }

//     //Array of diff Transactions
//     // an array of objects
//     TransferStruct[] transac;

//     function add_to_blc(address payable receiver,uint amount,string memory message,string memory keyword) public{
//       transac_count++;
//       transac.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword)); //msg stores anything i.e. called in blc && time of the specific block of blc at that time
//       emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
//     }
//     function get_transac() public view returns(TransferStruct[] memory){
//         // return transac;
//     }
//     function get_transac_count() public view returns (uint256){
//         return transac_count;
//     }
    
// }

pragma solidity ^0.8.0;

// import "hardhat/console.sol";

contract Transactions {
    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
  
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}