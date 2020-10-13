const express = require('express');
const app = express();

app.use((req,res,next)=>{

    console.log("réponse 1");
    next();
})



app.use((req,res,next)=>{
    res.status(201);
    next();
})


app.use((req,res)=>{
    res.end("réponse 2");
})

module.exports = app;
