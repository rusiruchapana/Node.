const express = require("express");
const router = express.Router();


router.get("/",(req,res)=>{
    res.send("Simple get API in tours.js file.");
});





module.exports = router;


