const mongoose = require("mongoose");

const userSchema =  mongoose.Schema({
    Flat_No: {
        type: String,
        
    },
    Fname:{
        type: String,
        required: true
        },
    Lname: {
        type: String,
        required: true,
     
    },
   Phone: {
        type: Number,
        required: true,
      
    },
})


const users= new mongoose.model("cloud",userSchema);

module.exports=users