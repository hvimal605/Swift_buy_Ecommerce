const Address = require('../models/address')

exports.createOrder = async(req,res)=>{
    try{
        let address;
        const {user,shipAddress} = req.body;

        if(shipAddress._id){
           const existAddress = await Address.findById(shipAddress._id);
           address = existAddress;


        }
        else{
            address = new Address(shipAddress);
            address.user = user;
            await address.save()

            user.addresses.push(address)
            await user.save();

        }
    }
    catch(error){

    }
}