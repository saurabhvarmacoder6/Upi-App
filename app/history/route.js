import { NextResponse } from "next/server";
import { connectDB } from "../lib2/db";
import Transaction from "../lib2/model/transaction";

export async function GET(request) {
    let data = [];
    await connectDB();
    data = await Transaction.find();
    return NextResponse.json({history:data});
}


export async function POST(request) {
   const reqData = await request.json();
    await connectDB();
    const transaction = new Transaction(reqData);
    await transaction.save();
    return NextResponse.json({ message: "Transaction recorded successfully" });
}

export async function DELETE() {
    await connectDB();

    await Transaction.deleteMany({});

    return NextResponse.json({
        message: "All history deleted"
    });
}