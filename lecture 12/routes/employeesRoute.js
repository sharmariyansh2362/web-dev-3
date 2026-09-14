const express = require('express');
const router = express.Router();
const { getEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } = require("../controller/employeesController");

//Read
router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployeeById);

//CREATE
router.post("/employees", createEmployee);

//UPDATE

router.put("/employees/:id", updateEmployee); 

//DELETE
router.delete("/employees/:id", deleteEmployee);

module.exports = router;