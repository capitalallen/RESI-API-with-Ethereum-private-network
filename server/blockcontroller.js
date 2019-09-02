const smartContractCall = require('../smartContractCall');

exports.getAccounts = async(req,res,next) =>{
    try {
        var accounts = await smartContractCall.getAccounts();
        await res.status(200).json({
            accounts:[accounts]
        });    
    } catch (error) {
        res.status(404).send("error")
    }
}
exports.callGreet = async(req,res,next) =>{
    try {
        var response = await smartContractCall.callHello();
        if (response){
            res.status(200).send(response)  
        } else {
            res.status(401).send("no response")
        } 
    } catch (error) {
        res.status(404).send("error")
    }
}