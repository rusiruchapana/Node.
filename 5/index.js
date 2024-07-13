const superagent = require("superagent");

superagent
    .get("https://dog.ceo/api/breeds/image/random") 
    .end((err,res)=>{
        if (err) {
            console.error(err);
        }
        console.log(res.body.message);
    });