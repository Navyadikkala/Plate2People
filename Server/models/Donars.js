const mongoose=require('mongoose')
const DonarSchma=new mongoose.Schema({
    name:String,
    email:{
        type: String,
        unique: true, 
        required: true
    },
    phone: {
        type: Number,
        unique: true, 
        required: true
    },
    city:String,
    district:String,
    state:String,
    quantity:Number,
    expirydate:Date
})
const DonarModel=mongoose.model("Donars",DonarSchma)
module.exports=DonarModel