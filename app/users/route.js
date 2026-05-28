import { NextResponse } from "next/server";
import { connectDB } from "../lib/db";
import Product from "../lib/model/product";

export async function GET() {
    let data = [];
    await connectDB();
    data = await Product.find();
    return NextResponse.json( {message:data} );
}
