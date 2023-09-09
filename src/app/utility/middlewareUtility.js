import { NextResponse } from "next/server";
import { verifyToken } from "./JWTHelper";

export async function checkCookieAuth(req) {
    try {
        let token = req.cookies.get('token');
        let payload = await verifyToken(token);
        const requestHeaders = new Headers(req.headers);
        requestHeaders.set('email',payload['email']);   
        
        console.log("Middleware helper workoing");

        return NextResponse.next({
            request: {headers:requestHeaders},
        })
    }
    catch (e) {
        console.log("Middleware helper is not workoing");
        return NextResponse.redirect(new URL('/login',req.url));
    }
}