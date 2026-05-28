import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
 user:String,
 amount:Number,
 type:String
});

const Transaction = mongoose.models.transactions || mongoose.model("transactions", historySchema);
export default Transaction;