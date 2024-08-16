const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    cartItems: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"cartItems",
        required:true,
    },
  totalPrice: {
        type:Number,
        required: true,
        default:0,
    },
    totalItem: {
        type:Number,
        required: true,
        default:0,
    },
    totalDiscountedPrice: {
        type:Number,
        required: true,
        default:0,
    },
    discounte:{
        type:Number,
        required: true,
        default:0,
    }
   
});


module.exports = mongoose.model("cart", cartSchema) 