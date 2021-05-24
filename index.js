const express = require("express");


const app = express();

app.get('/',(req,res)=>{
    res.send("Hello I am working");
})


app.listen(3000,()=>{
    console.log("listening to port 3000")
})