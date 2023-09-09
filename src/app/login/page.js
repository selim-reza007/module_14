"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Login() {

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const handleSubmit = async () => {
    const config = { method: "POST", body: JSON.stringify(formData) };
    const response = await fetch('/api/login', config);
    const json = await response.json();
    console.log("login successful");
    if (json['status'] === true) {
      router.replace('/dashboard');
    } else {
      alert(json['message']);
    }
  }

  return (
    <div className="">
      <p className="text-white text-2xl">Login page</p>
      <div className="w-[400px] flex flex-col items-center bg-amber-300 gap-1 m-auto mt-10">
        <p>Email Address</p>
        <input onChange={e => setFormData({ ...formData, email: e.target.value })} type="email" className="p-2 w-5/6" />
        <p>Password</p>
        <input onChange={e => setFormData({ ...formData, password: e.target.value })} type="password" className="p-2 w-5/6" />
        <button onClick={handleSubmit} className="py-2 px-3 bg-slate-500 mb-1">Login</button>
      </div>
    </div>
  );
}