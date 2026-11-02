const express = require('express');
const app = express();
const Doctor = require('model/doctors.model');
const mongoose = require('mongoose');
const port = 3000;

app.use(express.json())




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})