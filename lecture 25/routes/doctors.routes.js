const express = require('express');
const { get } = require('mongoose');
const routes = express.Router();
const Doctor = require('model/doctors.model');
const { getDoctors, getDoctorById, createDoctor, updateDoctor, deleteDoctor } = require('controller/doctors.controller');


routes.get('/api/doctors', getDoctors);

routes.get('/api/doctors/:id', getDoctorById);

routes.post("/api/doctors", createDoctor);

routes.put("/api/doctors/:id", updateDoctor);

routes.delete("/api/doctors/:id", deleteDoctor);

module.exports = routes;