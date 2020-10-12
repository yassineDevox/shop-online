const express = require('express');
const app = express();

app.use((req,res)=>{
    res.json({
        message:"Im Here Yassine !!"
    })
})

module.exports = app;
