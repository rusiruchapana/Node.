//config express
const express =  require("express");
const app = express();
//config dotenv file.
require("dotenv").config();
const port = process.env.PORT;



app.get("/",(req,res)=>{
    res.send("Simple get request");
});



app.listen(port, ()=>{
    console.log(`Server is started on ${port}`);
});






