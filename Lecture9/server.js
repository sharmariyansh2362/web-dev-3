const express = require('express');
const app = express();
const PORT = 3000;

const users = [
    { id: 1, name: 'John Doe' , email: 'john@example.com' },
    { id: 2, name: 'Jane Smith' , email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson' , email: 'alice@example.com' }
];

app.get("/users", (req, res) => {
    res.json(users);
})   

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Page</h1>');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

