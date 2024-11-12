const mongoose=require('mongoose')

const CustomersSchma =new mongoose.Schema({
    name:String,
    email:String,
    password:String
    

})
const CustomerModel=mongoose.model("SigninDetails",CustomersSchma) 
module.exports=CustomerModel