const mongoose = require("mongoose")

const orderItemSchema = new mongoose.Schema({
   
    product: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:true,
    },
    size: {
        type:String,
        required: true,
      
    },
    quantity: {
        type:Number,
        required: true,
        default:1,
    },
    price: {
        type:Number,
        required: true,
       
    },
    discountedPrice:{
        type:Number,
        required: true,
        default:0,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },

   
});


module.exports = mongoose.model("orderItems", orderItemSchema) 