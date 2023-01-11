const mongoose=require("mongoose")

const DB="mongodb+srv://Aman123:Aman123@cluster0.v2cb4.mongodb.net/scorrowdb?retryWrites=true&w=majority";

 const Connection= async()=>{
    try{
        await mongoose.connect(DB,{useNewUrlParser:true,
            useUnifiedTopology:true,})
            console.log("db is conntect")
    }
    catch(err){
        console.log(err)
    }
 }
module.exports={Connection}