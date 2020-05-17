const express = require('express'); 
const bodyParser = require ('body-parser');
const app = express()
const fs = require('fs'); 
const parser = require ('./routes/parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (req,res) =>{
    res.json("hello");
});

app.use('/api', parser);

const PORT = 9999;
app.listen(PORT, () =>{
    console.log('Server Running - Port:9999');
});