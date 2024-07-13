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


const img_saved= async ()=>{
    const dog_name = await read_promise("./dog.txt");
    //extract dog details.
    const api_details = await superagent.get(`https://dog.ceo/api/breed/${dog_name}/images/random`);
    //extract image url
    const img_url = api_details.body.message;
    //write image url in a seperate file.
    await write_promise(img_url);


}
img_saved();



