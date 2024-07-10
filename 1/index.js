const http =  require("http");

const server = http.createServer((req,res)=>{
        res.end("Simple web server.");
});


server.listen(8080,"localhost",()=>{
    console.log("Server is running.");
});
