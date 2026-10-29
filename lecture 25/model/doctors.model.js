const mongoose = require("mongoose");
const { type } = require("node:os");
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    experience: {
        type:Number,
        required:true
    },
    fees: {
        type:Number,
        required:true
    },
    salary: {
        type:Number,
        required:true
    }
})
module.exports = mongoose.model('doctors',doctorSchema);