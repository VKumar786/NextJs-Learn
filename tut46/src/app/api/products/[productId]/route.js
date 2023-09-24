import { connectionSrc } from "@/app/lib/db";
import { Product } from "@/app/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  try {
    await mongoose.connect(connectionSrc)
    let data = await Product.find({ _id: content.params.productId })
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

export async function PUT(request, content) {
  try {
    await mongoose.connect(connectionSrc)
    const payload = await request.json()
    let data = await Product.findByIdAndUpdate(content.params.productId, payload)
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

