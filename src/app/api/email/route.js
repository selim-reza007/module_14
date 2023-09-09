import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(req, res) {

    const { searchParams } = new URL(req.url);
    let toEmail = searchParams.get('email');

    let transporter = nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port: 25,
        secure: false,
        auth: {
            user: "info@teamrabbil.com",
            pass: '~sR4[bhaC[Qs'
        },
        tls: { rejectUnauthorized: false }
    })

    let myEmail = {
        form: "Test email form next.js application <info@teamrabbil.com>",
        to: toEmail,
        subject: "Test email form next.js application",
        text: "Test email form next.js application"
    }

    try {
        await transporter.sendMail(myEmail);
        return NextResponse.json({ msg: "success" });
    } catch {
        return NextResponse.json({ msg: "fail" });
    }

}