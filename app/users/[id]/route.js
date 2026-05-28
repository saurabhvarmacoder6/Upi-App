import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import Product from "../../lib/model/product";


export async function GET(request, { params }) {

    const userId = await params;
    console.log("Received user ID:", userId.id);
    await connectDB();
    const data = await Product.findById(userId.id);
    return NextResponse.json({ message: data });
}

export async function PUT(request, { params }) {

    const userId = await params;
    const filter = { _id: userId.id };

    const body = await request.json();

    await connectDB();

    console.log("Received body:", body);

    const result = await Product.findByIdAndUpdate(filter, { $inc: { balance: Number(body.balance) } }, { new: true });
    return NextResponse.json(
        { result },
        { status: 200 }
    );
}