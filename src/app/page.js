"use client"

import Link from "next/link";
import { sendEmail } from "../../lib/apiRequests";
import { useState } from "react";

export default function Home() {

  const [email, setEmail] = useState("");

  const HandleSendEmail = async () => {
    let res = await sendEmail(email);
    alert(res['msg']);
  }

  return (
    <div className="flex flex-col">

      <Link className="p-5" href={'/login'}><span className="p-3 bg-indigo-200">Login</span></Link>

      <p className="text-2xl ml-2 text-white">Home page</p>

      <div className="m-auto mt-14">
        <p className="text-white">Send email</p>
        <input onChange={(e) => setEmail(e.target.value)} type="email" className="p-2" placeholder="Enter email" />
        <button className="p-2 bg-slate-400" onClick={HandleSendEmail}>Send</button>
      </div>
      <p className="m-auto mt-1">Note: This process will take some time</p>
    </div>
  );
}