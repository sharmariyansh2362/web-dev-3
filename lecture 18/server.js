const express = require('express');
const app = express();
const PORT = 3000;

app.get("/age-check/:age", (req, res) => {
    let age = parseInt(req.params.age);
    try{
        if(age<18){
        throw new Error("You are not eligible to vote");
    }else{
        res.send("You are eligible to vote");
    }
} catch (error) {
    next(error);
    res.status(500).json({success: false, message: "age is less than 18"});
}   });    

app.use((err,req, res, next) => {   
    res.status(404).json({success: false, message: "Page not found"});
});
app.use((req, res) => {+
    res.status(400).json({success: false, message: "Internal server error"});
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});  