import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
    console.warn(content);
    let data = user.filter((item) => item.id.toString() === content.params.userId)
    if (data.length === 0) return NextResponse.json({ Result: 'Empty Data', success: false }, { status: 200 })
    return NextResponse.json({ Result: data, success: true }, { status: 200 })
}

export async function PUT(request, content) {
    let payload = await request.json()
    console.warn(payload, user);
    if (!payload.id || !payload.name || !payload.age || !payload.email)
        return NextResponse.json({ result: 'Please Fill Required Field', success: false }, {
            status: 201
        })

    let data = user.map((item) => {
        if (item.id.toString() === content.params.userId) {
            return payload
        } else return item
    })
    console.warn(data);
    return NextResponse.json({ result: data, success: true }, {
        status: 200
    })
}