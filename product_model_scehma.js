const mongoose=require('mangoose');
 const ProductSchema=new mongoose.Schema({
  name:String,
  price:Number,
  brand:String,
  category:String

 })

 module.exports=mongoose.model("product",ProductSchema);