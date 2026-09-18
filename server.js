const express=require('express');
const app=express();
const PORT=3000;

const logmiddleware=(req,res,next)=>{  
    req.name="Riyansh"; 
    console.log("Request url:",req.url,"req method:",req.method);
    res.send("hello from middleware");
    // next();
}

app.use(logmiddleware);

app.get("/",(req,res)=>{
    console.log("hello World");
    res.send("hello World");
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})