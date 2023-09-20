import { user } from '@/util/db'
import { NextResponse } from 'next/server'

export function GET(request) {
    return NextResponse.json(user,{
        status: 200
    })
}