// import { NextResponse } from "next/server";

// export function middleware(req, res, next) {
//     const fullUrl = req.url;
//     const parts = fullUrl.split('/');
//     const routePath = `/${parts[parts.length - 1]}`;
//     if (routePath !== '/login') {
//         const absoluteUrl = `${req.nextUrl.origin}/login`;
//         return NextResponse.redirect(absoluteUrl, req.url);
//     }
// }
import { NextResponse } from "next/server";

export function middleware(req, res, next) {
    const absoluteUrl = `${req.nextUrl.origin}/login`;
    return NextResponse.redirect(absoluteUrl, req.url);
}

export const config = {
    matcher: ['/about/:path*', '/studentList/:path*']
}