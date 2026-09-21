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
    res.status(500).json({success: false, message: "age is less than 18"});
}   });    

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 