const h = require('http');
const s = h.createServer((req,res)=>{
    res.end("Hello Yassine :) !!");
})

s.listen(process.env.PORT || 3000);