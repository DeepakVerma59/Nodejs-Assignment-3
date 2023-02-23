
const fs = require('fs');
const http = require("http")
const a = http.createServer((Request, Response)=>{
    Response.end("<h1>Hello World!</h1><p> This is {Your Name}... </p> "
    )
})

a.listen(5000, ()=>{
    console.log("on port 5000")
})