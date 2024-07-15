const  express = require('express')
const app = express()
const port = 3000
const fs = require("fs");


const tourRouter = require("./routes/tours");
app.use("/tour",tourRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});