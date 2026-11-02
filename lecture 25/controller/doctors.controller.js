const Doctor = require('../models/doctors.model.js');

const getdoctors =async (req, res) => {
    try {
        const doctors = await Doctor.find();    
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const getdoctorbyid = async (req,res)=> {
    const id = req.params.id;
    try{
        const doctor = await Doctor.findById(id);
        if(!doctor){
            return res.status(404).jason({sucess: false, message:'Doctor not found'})
        }
        res.jason(doctor);

    } catch (error) {
        res.status(500).jason({sucess: false, message: error.message});
    }
};

const createdoctor =  async (req, res) => {
    console.log(req.body)
    try {
        const doctor = await Doctor.create(req.body);
        res.status(201).json(doctor);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deletedoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const doctor = await Doctor.findByIdAndDelete(id);
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    getdoctors,
    getdoctorbyid,
    createdoctor,
    deletedoctor
};