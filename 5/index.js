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
        console.log(data);
        return data;
    })
    .catch(err=>{
        console.error("Error",err);
    });



