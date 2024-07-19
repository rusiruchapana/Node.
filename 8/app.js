const express =  require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;


const tours_routes = require("./Routes/tours");
app.use("/tours",tours_routes);


app.listen(port, ()=>{
    console.log(`Server is started on ${port}`);
});






