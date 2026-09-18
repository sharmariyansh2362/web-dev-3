const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;


const apimiddleware = (req, res, next) => {
    if (req.query.api_key === "12345") {  
        console.log("API middleware passed");
        next();
    } else {
        res.send("Invalid API key");
    }
};

app.use(logmiddleware);
app.use(apimiddleware);
app.use(morgan());


app.get("/", (req, res) => {
    console.log("hello World");
    res.send("hello World");
});

app.get("/about", (req, res) => {
    res.send(`Hello ${req.name} from about page`);
});

app.get("/data", (req, res) => {
    res.json({
        city: "Delhi",
        country: "India",
        temperature: 30
    });
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
