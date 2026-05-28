import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
 user:String,
 number:Number,
 balance:Number,
 color:String,
 type:String
});

const Product = mongoose.models.users || mongoose.model("users", productSchema);
export default Product;