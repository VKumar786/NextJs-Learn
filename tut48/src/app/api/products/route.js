import { connectionSrc } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await mongoose.connect(connectionSrc)
        let data = await Product.find({})
        console.warn(data);
        return NextResponse.json({
            results: data,
            success: true
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            results: [],
            success: false
        }, { status: 401 })
    }
}

export async function POST(request) {
    await mongoose.connect(connectionSrc)

    try {
        // let product = new Product({
        //     name: 'nokia',
        //     price: "8000",
        //     company: "India",
        //     color: "Black",
        //     category: "Mobile",
        // })
        const payload = await request.json()
        console.log('payload', payload)
        let product = new Product(payload)

        let results = await product.save()
        return NextResponse.json({
            results,
            success: true
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            results: [],
            success: false
        }, { status: 400 })
    }
}