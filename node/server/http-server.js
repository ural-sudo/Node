
const http = require("http");

const server = http.createServer((req,res) =>{
    console.log(req);c
    res.write("Hello World");
    res.end();
});

server.listen(3000,()=>{
    console.log("server in...");
});