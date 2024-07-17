const  express = require('express')
const app = express()
const port = 3000
const tourRouter = require("./routes/tours");

app.use(express.static("./public"));

//time
app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next();
});



app.use("/tour",tourRouter);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});