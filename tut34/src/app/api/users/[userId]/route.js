import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
    console.warn(content);
    let data = user.filter((item) => item.id.toString() === content.params.userId)
    if (data.length === 0) return NextResponse.json({ Result: 'Empty Data', success: false }, { status: 200 })
    return NextResponse.json({Result: data, success: true}, { status: 200 })
}