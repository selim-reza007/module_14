import { tokenCookie } from "@/app/utility/TokenCookie";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req, res) {
    const JSON = await req.json();
    let email = JSON['email'];
    let password = JSON['password'];

    if (email === "selim@gmail.com" && password === "123") {
        // console.log("if block working");
        let Cookie = await tokenCookie(email);
        return NextResponse.json(
            { status: true, message: "Login success" },
            { status: 200, headers: Cookie }
        )
    }
    else {
        // console.log("if block is not working");

        return NextResponse.json({ status: false, message: "Login fail" })
    }
}

export async function GET(req, res) {
    cookies().delete('token');
    return NextResponse.json({
        status: true, message: "Logout success"
    })
}