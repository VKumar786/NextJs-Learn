import { NextResponse } from "next/server";

export async function GET(request, content) {
    console.warn(content);
    const studentData = content.params
    console.warn(studentData);
    // return new Response('All Route Catched')
    return NextResponse.json({studentData}, {status: 200})
}