const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;


mongoose.connect("mongodb://localhost:37817/hospitalDB").then(()=>)