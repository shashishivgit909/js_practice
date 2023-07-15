//ceating basic API using static data (i.e data is given manually not connected from database)
const http=require('http'); // importing   
const data=require('./data'); //importing   
http.createServer((req, res)=>{
res.writeHead(201,{'Content-Type':'apllication\json'});
// res.write(JSON.stringify({name:"shashi" , gmail:'shashishiv26@gmail.com'})) //here sending API body as an object
res.write(JSON.stringify(data))
res.end();
}).listen(7000);

//NOte: packege.json and package -lock files will also if we run this code properly. THis is just for note , for proper got to gitHub:https://github.com/anil-sidhu/node-js/blob/basic-api/