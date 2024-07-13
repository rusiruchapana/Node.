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

const write_promise=(message)=>{
    return new Promise((resolve, reject) => {
        fs.writeFile("./dogs-images",message,err=>{
            if (err) {
                reject(err);
            }else{
                console.log("Succesfully write.");
                resolve(message);
            }
        });
    })
}







read_promise("./dog.txt")
    .then(data=>{
        return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);      
    })
    .then(data1=>{
        return data1.body;
    })
    .then((data2)=>{
        //console.log(data2.message);
        write_promise((data2.message));
    })
    .catch(err=>{
        console.error("Error",err);
    });



