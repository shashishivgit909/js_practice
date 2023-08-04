const dbConnect=require('./mongodb')

const update=async()=>{
    const db=await dbConnect();
    //update syntax: updateOne({1ts object for condition}, {$set: {chnage to make} })
    let result=await db.updateOne({name:"shashikalwar" },{$set: {name:"shashi"}}) ;

    //note:use "update" in place of "updateOne"  for update  all documents matching condition
    console.log(result)
    if(result.acknowledged)
    console.log("updated")
}
update();

//interview : if we use updateOne and there are many  documents matching condition then first matching documents will be updated only .