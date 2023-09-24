import { connectionSrc } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
    let data = []
    try {
        await mongoose.connect(connectionSrc)
        data = await Product.find()
    } catch (error) {
        data = { success: false }
    }

    return NextResponse.json({ 
        results: data,
        success: true
    }, { status: 200 })
} 