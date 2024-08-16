const mongoose = require("mongoose")

const AddressSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    streetAddress:{
        type:String,
        required:true,
        trim:true,
    },
    city:{
        type:String,
        required:true,
    },
    zipCode:{
        type:Number,
        required:true,
        
    },
   
    state:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
    mobile:{
        type:String,
        required:true,
        
    }

});


module.exports = mongoose.model("addresses",AddressSchema) 