const dbConnect=require('./mongodb') //imported mongodb connection code in this page

const insert=async()=>{
     let db=await dbConnect();
     //to insert single record
    const data=  await db.insertOne({name:'ramshish', age:32, sex:'male'})
    // to insert multirecords , give array of objects .
    const dataMORE=  await db.insertMany([{name:'ramshish', age:32, sex:'male'}, 
    {
        name:'hareram', age:32, sex:'male'
    }])


    if(data.acknowledged)
       console.log("data inserted");
}
 insert();