import { user } from '@/util/db'
import { NextResponse } from 'next/server'

export function GET(request) {
    return NextResponse.json(user, {
        status: 200
    })
}

export async function POST(request) {
    let payload = await request.json()
    console.warn(payload);
    user.push(payload)
    if (!payload.id || !payload.name || !payload.age || !payload.email)
        return NextResponse.json({ result: 'Please Fill Required Field', success: false }, {
            status: 201
        })
    return NextResponse.json({ result: user, success: true }, {
        status: 200
    })
}
