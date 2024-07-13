const superagent = require("superagent");
const fs = require("fs");

fs.readFile("./dog.txt","utf8",(err,data)=>{
    if (err) {
        console.error(err);
    }else{
        superagent
            .get(`https://dog.ceo/api/breed/${data}/images/random`) 
            .end((err,res)=>{
                const img_url=res.body.message;
                if (err) {
                    console.error(err);
                }else{
                    fs.writeFile("./dogs-images",img_url,(err)=>{
                            if (err) {
                                console.error(err);
                            }else{
                                console.log("Succesfully write file.");
                            }
                    });
                }
                
            });
    }
});



