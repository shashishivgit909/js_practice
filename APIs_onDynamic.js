const express=require('express');
const dbConnect =require('./mongodb') //this import mongodb file which conatins code to connect with database.
const { ObjectId } = require('mongodb'); // specific import 

const app=express();

//this is like a middleware , we need to get data from postman before executind any API methods below
app.use(express.json()) // used to get data from postman in node js .i.e ACtually body of request object is getting here , becouse data sent by postman comes as request 
//get API
 app.get('/', async(req, res)=>{  //note : we can use different or same also  route '/' in  all API  method .
    let data=await dbConnect();

     data=await data.find().toArray();
    
    console.log(data)
    res.send(data);//.status(200)
 })

 //post api method 
 app.post('/',async (req, res)=>{
   let data=await dbConnect();
   let result=await data.insertMany([req.body])  //INTERview :note: we can update data from postAPI method using update function of mongodb in this line , but standard method is to update data with the help of putAPI method .
   //here res.body is JSON data and insertMany need arrays of json data so use[]
   //console.log(req.body); //data from postman has come in req of nodejs so accessing req. body to print it in nodejs console
   res.send(result) // that is gone to client(i.e postman or reactjs ) as response of data insertion 
 })

/* Note: we can send data from url in potsman and receive it in route of API  as
 app.put("/:name",async(req,res)=>{ AND postman url http://localhost:3000/shashi , here shashi is data send from url and name=shashi received in nodejs 
  ans we can use  {name:req.params.name} insted of  {name:req.body.name } in below to acess that value 
 
  // this method is used when we have to change full row then in taht case we our data to modify have nothing matching with data already in database in that case for matching condition we need to use this method 


  app.put("/:name",async(req,res)=>{
   let data=await dbConnect();
   let result=await data.updateOne( 
     {name:req.params.name},   //this id condition( we can use dynamic condition(data from postman ) or static)
     {$set:req.body}) //this is what need to update in data , here we update with Json data sent by postman
   
     //console.log(result) //op: result of updated i.r acknowledzed eetc as an JSON
  res.send(result) 
})
*/

 //pu API method
 app.put("/",async(req,res)=>{
    let data=await dbConnect();
    let result=await data.updateOne( 
      {name:req.body.name},   //this id condition( we can use dynamic condition(data from postman ) or static)
      {$set:req.body}) //this is what need to update in data , here we update with Json data sent by postman
    
      //console.log(result) //op: result of updated i.r acknowledzed eetc as an JSON
   res.send(result) 
 })

//delete API 
 
 app.delete("/:id",async(req,res)=>{ //here id is copied from id of data in mongodb, since there distinct an dpassed  from url in postman
   let data=await dbConnect();
   objectId=req.params.id;
   let result=await data.deleteOne({_id:new ObjectId(objectId)})
     //console.log(result) //op: result of updated i.r acknowledzed eetc as an JSON
     console.log(result)
  res.send(result)  
})



 
 

app.listen(3000)

/* VVVI:
 Note:Q.INTERview :  we cannot pass body in getAPI .
USE of getAPI method : is used to read data from server using API.
POST api method : is used for saving new data in server using API .
PUTAPI mathod is used to  for updating data in server using API.
deleteAPI method: is used to delete data from server using API
*/
