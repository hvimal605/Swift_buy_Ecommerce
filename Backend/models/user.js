const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
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
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
    },
    addresses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"address",
    }],
    paymentInformation:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"payment_information",
    }],
    rating:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ratings",
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reviews",
    }],
    image:{
        type:String,
        required:true,

    },
    token:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date,
    },
    createdAt:{
        type:String,
        default:Date.now()

    } 

});


module.exports = mongoose.model("user",userSchema)