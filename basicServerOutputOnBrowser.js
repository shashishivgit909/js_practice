const http = require('http');
http.createServer((req , res)=>{
res.write("hello i am shashi kalwar ");
res.end();
}).listen(4500)  