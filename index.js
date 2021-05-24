const express = require("express");


const app = express();

const users = ["Asad","Moin","Sabed","Sabana","Suhana"];
app.get('/',(req,res)=>{
    res.send("Hello I am working");
})
app.get('/fruits/banana',(req,res)=>{
    res.send({fruit:'banana',quantity:1000,price:100000})
})
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const name = users[id];
    res.send({id,name});
})

app.listen(4000,()=>{
    console.log("listening to port 4000")
})