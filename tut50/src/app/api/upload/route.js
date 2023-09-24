import { writeFile } from 'fs/promises'
import { NextResponse } from "next/server"

export async function POST(req) {
    const data = await req.formData()
    const image = await data.get('image')

    if (!image) return NextResponse.json({
        success: false,
        message: 'Unable to Upload'
    })

    const byteData = await image.arrayBuffer()

    const buffer = Buffer.from(byteData)
    const path = `./public/${image.name}`

    await writeFile(path, buffer)

    return NextResponse.json({
        success: false,
        message: 'Image uploaded successfully'
    })
}