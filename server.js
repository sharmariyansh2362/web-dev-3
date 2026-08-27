
const e = require('express');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const employees = [
    { id: 1, name: "Ansh Sharma", salary: "30000", department: "IT" },
    { id: 2, name: "Rohit Verma", salary: "35000", department: "HR" },
    { id: 3, name: "Adi Singh", salary: "40000", department: "Finance" },
    { id: 4, name: "Arjun Mehta", salary: "45000", department: "IT" },
    { id: 5, name: "Karish Gupta", salary: "50000", department: "HR" },
    { id: 6, name: "Yash Malhotra", salary: "55000", department: "Finance" },
]

app.get("/employees", (req, res) => {
    res.json(employees);
});

app.get("/employees/:id", (req, res) => {
    const id = req.params.id;
    const employee = employees.find((employee) => employee.id == Number(id));  
    if(!employee) {
        return res.status(404).json({ error: "Employee not found" });
        console.log("Employee not found");
    }
    res.json(employee);

});

app.post("/employees", (req, res) => {
    const employee = req.body;
    employees.push({ id: employees.length + 1, ...employee });
    res.status(201).json(employee);
});

//UPDATE

app.put("/employees/:id", (req, res) => {
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
});
app.delete("/employees/:id", (req, res) => {
    const id = req.params.id;
    const result=employees.find((employee) => employee.id == Number(id));
    if(!result){
        res.status(404).json({ status:false, message: "Employee not found"  });
    }
    employees.splice(id-1,1);
    res.json({ success: true, result });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// const http = require('http');

// const server = http.createServer((req, res) =>{

//     // console.log(req.url);
//     // console.log(req.method);
//     // res.write(`<h1>Hello World again </h1>`);
//     if (req.url === "/"&& req.method == "GET"){
//         res.writeHead(200,{"Content-Type":"text/html"});
//         res.write(`<h1>Hello World</h1>`);
//         res.end();
//     }else if (req.url === "/about" && req.method == "GET"){
//         res.writeHead(200,{"Content-Type":"text/html"});
//         res.write(`<h1>About Page</h1>`);
//         res.end();
//     }else if (req.url === "/contact" && req.method == "GET"){
//         res.writeHead(200,{"Content-Type":"text/html"});
//         res.write(`<h1>Contact Page</h1>`);
//         res.end();
//     }else{
//         res.writeHead(404,{"Content-Type":"text/html"});
//         res.write(`<h1>Page Not Found</h1>`);
//         res.end();  
//     }
// });


const http = require('http');

const users = [
    { id: 1, name: 'John Doe' , email: 'john@example.com' },
    { id: 2, name: 'Jane Smith' , email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson' , email: 'alice@example.com' }
];

const server = http.createServer((req, res) => {
    
    // console.log(req.url);
    // console.log(req.method);
    // res.write(`<h1>Hello World again </h1>`);
    if (req.url === "/"&& req.method == "GET"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(`<h1>Hello World</h1>`);
        res.end();
    }else if (req.url === "/about" && req.method == "GET"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(`<h1>About Page</h1>`);
        res.end();
    }else if (req.url === "/contact" && req.method == "GET"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(`<h1>Contact Page</h1>`);
        res.end();
    }else if (req.url === "/users" && req.method == "POST"){
        
        res.writeHead(404,{"Content-Type":"text/html"});
        res.write(`<h1>Page Not Found</h1>`);
        res.end();  

    }
    
    else if (req.url === "/users" && req.method == "GET"){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.write(JSON.stringify(users));
        res.end();
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.write(`<h1>Page Not Found</h1>`);
        res.end();  
    }
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const userData = JSON.parse(body);
        users.push(userData);
        res.writeHead(201,{"Content-Type":"application/json"});
        res.write(JSON.stringify(userData));
        res.end();
      });
});
server.listen(3000,() => {
    console.log("Server is running on port 3000");
});

