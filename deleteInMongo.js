const dbConnect=require('./mongodb')

const deleteData =async()=>{
    const db=await dbConnect();
   
    let result=await db.deleteMany({name:"ramshish" }) ;// result : op = { acknowledged: true, deletedCount: 114 }


   // NOte use delete one to delete one record for condition
    if(result.acknowledged)
    console.log("deleted")
}
deleteData();