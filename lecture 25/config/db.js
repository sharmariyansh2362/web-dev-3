const mongoose = require("mongoose");

const connectDB =  sync()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/HospitalDB");
    console.log("Database Connected");
    } catch(error)=>{
    console.log(error);
    }
}

module.exports = connectDB;
