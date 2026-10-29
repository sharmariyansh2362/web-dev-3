const express = require('express');
const mongoose = require('mongoose');
const Doctor = require('./model/doctors.model')
const app = express();
const port = 3000;

//read opertion
app.get('/doctors', async (req,res) =>{
    try{
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error){
        res.status(500).json({success:false, message: error.message})
    }
})

//get doctors by id 
app.get('/doctors/:id', async (req,res) =>{
    try{
        const doctor = await Doctor.findById(req.params.id);
        if(!doctor){
            return res.status(404).json({success:false, message: 'Doctor not found'});
        }
        res.json(doctor);
    } catch (error){
        res.status(500).json({success:false, message: error.message});
    }
});

mongoose.connect('mongodb://localhost:27017/HospitalDB').then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log(err);
    
})



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});