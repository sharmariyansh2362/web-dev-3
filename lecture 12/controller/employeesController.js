const employees = require("../data/employees");
const getEmployees = (req, res) => {
    res.json(employees);
};

const getEmployeeById =(req, res) => {
    const id = req.params.id;
    const employee = employees.find((employee) => employee.id == Number(id));  
    if(!employee) {
        return res.status(404).json({ error: "Employee not found" });
        console.log("Employee not found");
    }
    res.json(employee);

};

const createEmployee = (req, res) => {
    const employee = req.body;
    employees.push({ id: employees.length + 1, ...employee });
    res.status(201).json(employee);
};

const updateEmployee = (req, res) => {
    const id = req.params.id;
    const employee=req.body;
    const result = employees.find((employee) => employee.id == Number(id));
    if(!result) {
        return res.status(404).json({ error: "Employee not found" });
    }
    result.name = employee.name;
    result.salary = employee.salary;
    result.department = employee.department;
    res.json({ success: true ,employee: result });
};

const deleteEmployee = (req, res) => {
    const id = req.params.id;
    const result = employees.findIndex((employee) => employee.id == Number(id));
    if(!result) {
        return res.status(404).json({ error: "Employee not found" });
    }
    employees.splice(id -1, 1);
    res.json({ success: true, message: "Employee deleted successfully" });
};

module.exports = {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};