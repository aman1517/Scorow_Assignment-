const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const {Connection}=require("./db/DB.js")
const Users=require('./Module/UserSchema.js')
const app=express()
app.use(cors())
app.use(bodyParser.json({extended:true}))
const port=process.env.PORT ||4500;

Connection()

app.get("/",(req,res)=>{
    res.send("Welocme to home page")
})
app.get("/getuserdata",async(req,res)=>{
     try{
     const users=  await Users.find({})
     res.status(200).json(users)
      
     }
     catch(err){
       res.status(404).json({message:err.message})
     }
})
app.post("/postdata",async(req,res)=>{
    const user=req.body
    const new_user= new Users(user)
    try{
      await new_user.save()
      res.status(201).json(new_user)
    }
    catch(er){
       res.status(409).json({message:err.message})
    }
})
app.delete("/:id",async(req,res)=>{
   
    try{
     await Users.findByIdAndDelete({_id:req.params.id})
    
    }
    catch(err){
         res.status(409).json({message:err.message})
    }
})
app.listen(port,()=>{
    console.log(`listing on port ${port}`)
})