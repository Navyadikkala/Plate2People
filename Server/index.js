const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const DonarModel=require('./models/Donars') 
const CustomerModel=require('./models/Signup') 
 const app=express()
 app.use(express.json())
 app.use(cors())

 mongoose.connect("mongodb+srv://srilakshmiswethaadabala:Swetha@cluster0.aizaway.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
 let currentUserEmail = ""; 
 
 app.post('/donars',(req,res)=>{
   
    DonarModel.create(req.body)
    .then(donars=>res.json(donars))
    .catch(err=>res.status(500).json({ error: 'Failed to create donor' }));
 })
 app.get('/donars',(req,res)=>{
    DonarModel.find()
   .then(donars=>res.json(donars))
    .catch(err=>res.status(500).json({ error: 'Failed to get donor' }));
 })
 app.delete('/donars/:id', (req, res) => {
   DonarModel.findByIdAndDelete(req.params.id)
     .then(() => res.json({ message: 'Donor deleted successfully' }))
     .catch(err => res.status(500).json({ error: 'Failed to delete donor' }));
 });

 app.get('/useremail', (req, res) => {
   if (currentUserEmail) {
      res.json({ email: currentUserEmail });
  } else {
      res.status(404).json({ error: 'No user is currently logged in' });
  }
   // CustomerModel.findOne()
   //    .then(user => {
   //       if (user) {
   //          res.json({ email: user.email });
   //       } else {
   //          res.status(404).json({ error: 'User not found' });
   //       }
   //    })
   //    .catch(err => res.status(500).json({ error: 'Failed to fetch user email' }));
});

 app.post("/",(req,res)=>{ 
   const {email,password} =req.body;
   CustomerModel.findOne({email:email})
   .then(user=>{
      if(user){
         if(user.password===password){
            currentUserEmail = email;
            res.json("Success")
         }
         else{
            res.json("the password is incorrect")
         }
      }else{
         res.json("No record existed")
       
      }
   }).catch(err => res.status(500).json({ error: 'Failed to process login' }));
 });


 app.post('/signup',(req,res)=>{
  CustomerModel.create(req.body)
  .then(SigninDetails=>res.json(SigninDetails))
  .catch(err=>res.json(err))
 })
 app.listen(3001,()=>{
   console.log("server is running")
 })


