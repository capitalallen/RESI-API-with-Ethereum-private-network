const web3 = require('./web3');
const tokenABI = require('./build/contracts/hello.json')
const contractAddress = "0xe0a6e5C5dAf3D13aA829A0007368474d7EeCfBe1";
var contract = new web3.eth.Contract(tokenABI.abi,contractAddress);

exports.getAccounts = async () =>{
    try{
        var accounts = await web3.eth.getAccounts();
        return accounts;
    } catch (error){
        throw error;
    }
}

exports.callHello = async() =>{
    const address = '0x062D8259Bdc485bcA82F2A962dc3245136ca5c38';
    var response = await contract.methods.greet().call();
    return response
}