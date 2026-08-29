
import express from 'express';

const app = express();
const PORT = 3000;

const employees = [
  { id: 1, name: 'Ansh Sharma', salary: '30000', department: 'IT' },
  { id: 2, name: 'Rohit Verma', salary: '35000', department: 'HR' },
  { id: 3, name: 'Adi Singh', salary: '40000', department: 'Finance' },
  { id: 4, name: 'Arjun Mehta', salary: '45000', department: 'IT' },
  { id: 5, name: 'Karish Gupta', salary: '50000', department: 'HR' },
  { id: 6, name: 'Yash Malhotra', salary: '55000', department: 'Finance' }
];

app.use(express.json());

app.get('/employees', (req, res) => {
  res.json(employees);
});

app.get('/employees/:id', (req, res) => {
  const employee = employees.find((employee) => employee.id === Number(req.params.id));

  if (!employee) {
    return res.status(404).json({ error: 'Employee not found' });
  }

  res.json(employee);
});

app.post('/employees', (req, res) => {
  const newEmployee = req.body;
  const nextId = employees.length ? Math.max(...employees.map((employee) => employee.id)) + 1 : 1;

  const employee = { id: nextId, ...newEmployee };
  employees.push(employee);

  res.status(201).json(employee);
});

app.put('/employees/:id', (req, res) => {
  const employeeIndex = employees.findIndex((employee) => employee.id === Number(req.params.id));

  if (employeeIndex === -1) {
    return res.status(404).json({ error: 'Employee not found' });
  }

  employees[employeeIndex] = {
    ...employees[employeeIndex],
    ...req.body,
    id: Number(req.params.id)
  };

  res.json({ success: true, employee: employees[employeeIndex] });
});

app.delete('/employees/:id', (req, res) => {
  const employeeIndex = employees.findIndex((employee) => employee.id === Number(req.params.id));

  if (employeeIndex === -1) {
    return res.status(404).json({ status: false, message: 'Employee not found' });
  }

  const [deletedEmployee] = employees.splice(employeeIndex, 1);
  res.json({ success: true, employee: deletedEmployee });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

