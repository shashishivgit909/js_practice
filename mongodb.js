const {MongoClient}=require('mongodb');

 
const url="mongodb://0.0.0.0:27017"; //path of mongodb 27017 is port no
const client= new MongoClient(url);
let databaseName="employee";

//this function make connection with mongoDB
async function dbConnect(){
    const result=await client.connect();  // client.connect(); this gives promise and this may take time to get  connected with mongodb so we make it await
    let db=result.db(databaseName); 
   return  db.collection("manager"); // here we  can connect to collection managaer of database employee 
   }
   module.exports=dbConnect ;// donot call here dbConnect
