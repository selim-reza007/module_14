"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();

  const logout = async () => {
    const res = await fetch('/api/login');

    const json = await res.json();

    if(json['status'] === true){
      router.replace('/');
    }
  }

    return (
      <div>
        <p className="text-2xl text-white">Dashboard</p>
        <button onClick={logout} className="p-2 ml-5 mt-3 bg-amber-200">Logout</button>
      </div>
    );
  }