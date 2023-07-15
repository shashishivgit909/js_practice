// VVVVVI:  handling drawbacks of asynchronous programming using promise
/*
 let a=20;
 let b=0;
 setTimeout(()=>{
    b=30;
 },2000)
 console.log(a+b)
 */ //OP: 20 but if 2nd stement was  excuted on time then OP: will 50
  // handling usinh promise: when ever any function is going to take time to complete then keep them in promise , becouse it ensures that if when code inside function will be executed then its affect in the output will be updated
  let a=20;
  let b=0;
 let waitingdata=new Promise((resolve , reject)=>{
    setTimeout(()=>{
        b=30;
        //resolve(b)
        reject(new Error("promise not solved"))
     },2000)
 }) 
 //below statement will wait until above promise will be fullfilled (resolved or rejected)
 waitingdata.then((data)=>{ // this runs in case of resoolve 
    b=data;
    console.log(a+b) //op:50
 })

 waitingdata.catch((err)=>{ // this runs in case of  reject

    console.log(a+b); //op:50
 })

