const express = require('express');
const app = express();
const Doctor = require('model/doctors.model');
const mongoose = require('mongoose');
const port = 3000;

app.use(express.json())




mongoose.connect("mongodb://localhost:27017/HospitalDB").then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})