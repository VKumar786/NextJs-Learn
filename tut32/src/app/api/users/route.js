import { NextResponse } from 'next/server'

export async function GET(request) {
    return NextResponse.json({
        name: 'vishal kumar',
        age: 21,
        location: 'gurugram'
    },
        {
            status: 200
        })
}