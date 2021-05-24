const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const users = ["Asad","Moin","Sabed","Sabana","Suhana"];

app.use(cors());
app.use(bodyParser.json());
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

app.post('/adduser',(req,res)=>{
    const user = req.body
    user.id= 55;
    console.log("data recived",req.body);
    res.send(user)
})

app.listen(3000,()=>{
    console.log("listening to port 3000")
})