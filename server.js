const h = require('http');
const s = h.createServer((req,res)=>{
    res.end("Hi my Bright Side !!");
})

s.listen(process.env.PORT || 3000);