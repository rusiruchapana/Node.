const  express = require('express')
const app = express()
app.use(express.static("./public"));
const tourRouter = require("./routes/tours");
require("dotenv").config();
const port = process.env.PORT;


//time
app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next();
});



app.use("/tour",tourRouter);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});