//importing variables or function  from a file 

/*
const app=require('./data') //by require we tell  nodejs  to give given file or module we require them in this file
console.log(app.x)
console.log(app.y)
console.log(app.z)
console.log(app)
*/
//op
/*
10
20
[Function: z]
{ x: 10, y: 20, z: [Function: z] }
*/


//using filter method : give aray of elements which are 3
// let arr=[1,2,3,4,3,3]
// let filteredA=arr.filter((item)=>{
//     if(item===3) return item;
// })
// console.log(filteredA);//op:[ 3, 3, 3 ]
// console.log("i am node mom")

//ceating basic API using static data (i.e data is given manually not connected from database)
/*
const http=require('http');
const data=require('./data');
http.createServer((req, res)=>{
res.writeHead(201,{'Content-Type':'apllication\json'});
       // res.write(JSON.stringify({name:"shashi" , gmail:'shashishiv26@gmail.com'})) //here sending API body as an object ,
       // OR, 
res.write(JSON.stringify(data)) //here if above not sent then here sending  
res.end();
}).listen(7000);

*/

//input run command line

/*
const fs = require('fs'); // fs module is for file system

const input = process.argv; //node index.js hello.txt "this is text"  
  //running on terminal : input takes array of argment from  terminal where input[0 and 1] conatin node file and reamining input are from input[2].
fs.writeFileSync(input[2] ,input[3]); //this creates file of name input[2] , with content as input[3] in our current working folder 

*/

//now try to create and delete file based on input from terminal
/*
const fs = require('fs');

const input = process.argv;

if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4]) 
}
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3]) // to delete file of name input[3]
}
else
{
    console.log("invalid input ") 
}

// terminal code:
/*node index.js remove hello.txt  : remove hello text file in above code
node index.js add hello.txt "this is text" : creates hellotext file in above code 
*/

//here we create files dynamically inside a folder using command line 
/*
const fs=require('fs')
const path=require('path') // this is also core
const dirPath=path.join(__dirname , "files")// here __dirname give path of NODE-TUT, and using path.join, path comes up to  folder "files"
//path module simply join given path as parametter into single path

//Note: since we need exact path of folder where we want to create files there otherwise file will be created in root folder , dirPath gives path to folder:'files'

//console.log(dirPath) //op:/Users/shashikalwar/Desktop/Node-tut/files

//creating files inside folder using loop

for (let i=0;i<5;i++)
{
   fs.writeFileSync(`${dirPath}/hello${i}.txt` ,"a si ple text file")// `${dirPath}/hello${i}.txt` : this gives exact filename(i.e Path so files are created at exact location  specified)
}
*/

//reading , listing files inside folder or directory:"files"
/*
fs.readdir(dirPath ,(error, item)=>{
    console.log(item) // op: arrys of files name i.e item =[files list]
    //prints files name using for each loop nothing more , main thing is item
    item.forEach((val)=>{
        console.log(val) //op: prints individual files name 
    })
})
*/

/*
Note: INterview question: the folder in which our node js is running is like an webserver environment , it doesnot know about other folders or files outside it so coulnot access them.This quality gives security to our data when we open any site .
*/
 
 
//VVVVVVVVVVVVi
//CRUD OPREATIONS WITH  FILE SYSTEM(CREATE , READ ,UPDATE ,DELETE) , WE WILL SEE ALSO :  RENAME FILE

/*

const fs=require('fs')
const path=require('path') // this is also core
const dirPath=path.join(__dirname , "crud")
const filePath=`${dirPath}/apple.txt`;

*/
//creating file 
/*
fs.writeFileSync(`${dirPath}/apple.txt` ,"a simple text file")// `${dirPath}/apple.txt` : this gives exact filename(i.e Path so files are created at exact location  specified)
//fs.writeFileSync("apple.txt" ,"a simple text file")// this crates file in root folder of node :i.e NODE-TUT
*/
//read in file
/*
fs.readFile(filePath,'utf8',(error,content)=>{ //utft reads files in form of strings , if it is not present then strings will be read in form of numbers 
    console.log(content) //op: a simple text file
}) 
*/

//update inside file i.e add some new  conent in file
/*
fs.appendFile(filePath, "text to add at the end of file's content",(error)=>{
    if(!error)
    console.log("file is updated")
})
*/
//rename file
/*
fs.rename(filePath ,`${dirPath}/fruit.txt`,(error)=>{ //new dfilr name will be fruit.txt
    if(!error)
       console.log("file reamned successfully")  
})
*/

//to delete a file
/*
fs.unlinkSync(`${dirPath}/fruit.txt`) //path of file to delete: `${dirPath}/fruit.txt`
*/
//interview Q.BUffer: it is a temporary memory which is needed by nodejs while working with file system to do its opreation

 
//Express js :

//TOPIC: Routing with Express js

//we have installed express js using npn  so here just requiring it 
/*
const express=require("express")
const app=express() //invoke express method

/*
//this make a route that when give  a when user hits (http://localhost:5000)  he got: "hello this home page" , here route is '' or '/' both do same work
 app.get('',(req, res)=>{
    res.send("hello this home page ")
 })
 */

 // in this we are getting  values in response and acessing it 
 /*
 app.get('',(req, res)=>{
    console.log("data sent by browser ",req.query) //in request we are giving a object in request so object willbe printed by this line in node js becouse it is a request on node js(server)
    console.log("data sent by browser ",req.query.name) //request given in URL as:
    res.send("hello this home page , and request sent by browser = "+req.query.name)
 })

 ////this create aboutpage at given server(http://localhost:5000/about)
 app.get('/about',(req, res)=>{
    res.send("hello this ABOUT page ") //this messgae is visible on this page as response
 })

 // HERE WE ARE MAKING SERVER AT GIVEN PORT NO TO LISTEN 
 app.listen(5000)
*/
 
 //############################################

 //TOPIC: How to display Or render HTML / JSON data on  pages:

  /*
  Note: JSON data is  important for API and HTML data is importnat for websites
 JSON : means JavaScript Object Notation. EG:

 File: first.json
{"employees":[  
    {"name":"Sonoo", "email":"sonoojaiswal1987@gmail.com"},  
    {"name":"Rahul", "email":"rahul32@gmail.com"},  
    {"name":"John", "email":"john32bob@gmail.com"}  
]}  
  */

// here we have used HTML tags inside body of response page: this is diplaying HTML in page , all code reamins same
/*
app.get('/about',(req, res)=>{
    res.send(<h1>`hello this ABOUT page </h1>`
    <input type ="button"> click me</button>
    <a href="/"> go to home page</a>) //this messgae is visible on this page as response
 })
*/

// here we are sending data in javascript object  form , this is called JSON data showing on Page
/*
app.get('/about',(req, res)=>{
    res.send([{name:"shashi",email:"shashishiv26@gmail.com"},
    {name:"ram",email:"shashiram26@gmail.com"},
    {name:"hari",email:"shashihari26@gmail.com"}
]) //this messgae is visible on this page as response
 })
 */

 /*
 #############################################
 Topic: make html file and acess it in node js 
 reason: if we are making a home page which may conatin 100 line of code so it is not good to render  as above  so use file

 //code:



const express =require('express');
const path=require('path');

const app=express();
const HTMLfolderPath=path.join(__dirname,'HTMLfolder') //here __dirname give path to root folder (i.e NODETUT) and  thsi line join two path to give exact path to HTMLfolder.
app.use(express.static(HTMLfolderPath)); //static means static files like about.html
     // now we can access all stataic files inside HTML folder by:
     //losthost:5000/aboout.html in browser
app.listen(5000)

//interview questions:

q1.use of path module?
ans: it helps to get path of sub folder in root folder in our Project.

q2.Use of static ()?
ans: it loads static files of given folder'path.
*/

//#############################################################

//TOPIC:HOW TO REMOVE EXTENSION FROM URL eg: localhost:500/about.html, here .html is extension.
//--> we need to do that becouse, we donot want to let user know that on which technology our page is biult, so remove extensiion.
/* 
code: 

const express =require('express');
const path=require('path');

const app=express();
const HTMLfolderPath=path.join(__dirname,'HTMLfolder') //here __dirname give path to root folder (i.e NODETUT) and  thsi line join two path to give exact path to HTMLfolder.

//here '' shows our response got loaded  on root folder so we can access on there, using localhost:5000
app.get('', (_, resp)=>{
    resp.sendFile(`${HTMLfolderPath}/index.html`) //this send file of given path as resonse  to browser
})

//here '/about' shows that we can get this file response on localhost:5000/about

app.get('/aboutme', (_, resp)=>{
    resp.sendFile(`${HTMLfolderPath}/about.html`) //this send file of given path as resonse  to browser
})

//here route is '*' which means if none of the mentioned route is entered .Then loaded page below get( ) will be shown , this can handle 404 error which used to come for unindentified URL .
app.get('*', (_, resp)=>{
    resp.sendFile(`${HTMLfolderPath}/nopage.html`)
})
 //so for this http://localhost:5000/hellome , nopage.html will be shown

// Note: LOOk ,here '/aboutme' is not a file name of HTML folder : but it doesnot ,matter , here our response is loaded on  localhost:5000/aboutme so we can access it on same loaded  localhost:5000/aboutme
 app.listen(5000)

*/

/* Topic:
STATIC PAGE : if page shown whatever is writtrn in it and not connected with database for any data to shiw in page , then it is called static. eg.our simple html page.
DYNMAIC PAGE: IF  a page is connected with database and used to show some value when come from database , it is called dynamkc page. 
*/

//#################
/*
VVVi :
TOPIC:MIDDLEWARE

DEFINITION: Middleware are some functions which are applied on routes to access and modify or change in request and response .
 EventTarget. od use of it: use in user authentication checking , making ban oif website in some countries etc.

 //how to make  middleware. 
 1st way , make middlware in same file of Express js API
 code: 

 //eg:  application level middleware:

 const express=require("express");
 const app=express(); 

 const reqFilter=(req, resp, next)=>{ //here reqFilter is a middleware
    if(!req.query.age) //http://localhost:5000/users?age=%2224%22 ,This is  way to give input in response from URL
    {
        resp.send("pleae enter your age")
    }
    else if(req.query.age<18)
    {
        resp.send("you  are not allowed to open this page")
    }
    else
    {
        next(); //here if we call this then only we can  go to home page or other pages by routing below 
    }
   
 }

 app.use(reqFilter); //apply middleware on all route (i.e before visiting nay page by route first it need to check middleware) 
 app.get("/",(req, resp)=>{
    resp.send("welcome to home page");
 })

 app.get("/users,(req, resp)=>{ 
    resp.send("welcome to users page");
 })

 app.listen(5000)

 Q1.use of middlw ware ?
 Q2.types of middleware: 
 ans: 1.application level middleware : applyon all routes.
      2.route-level middlware : middleware apply on some specific  routes
      3.Error handling middleware.
      4.Built-in middleware
      5.third party middleware
 */


//route-level middleware: 
/*

  app.get("/users",reqFilter,(req, resp)=>{ // here middleware is applied on this route only .so middleware is executed before this route to check authentication .
    resp.send("welcome to users page");
 })

 Note: just comment app.use(reqFilter) and apply reqFilter  on specific route as above route "/users".
  we can also midleware in seperate file and export them as we do with acess elements from another file and use them in required routes
 */
