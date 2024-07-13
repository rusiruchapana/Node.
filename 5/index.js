const superagent = require("superagent");
const fs = require("fs");

const read_promise=(file)=>{
    return new Promise((resolve, reject) => {
        fs.readFile(file,"utf8",(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    })
}





read_promise("./dog.txt")
    .then(data=>{
        return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);      
    })
    .then(data=>{
        console.log(data.body);
    })
    .catch(err=>{
        console.error("Error",err);
    });



