'use client'
import React, { useState } from 'react'
import Navbar from '../Navbar/page';
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Admin =() => {
    
  const [email, setEmail] = useState(""); // Use setEmail instead of setemail
          const [password, setPassword] = useState(""); // Use setPassword instead of setpassword
           const router = useRouter()
            const login = async () => {
          const res = await fetch("https://apis-rouge.vercel.app/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
         });
         const json = await res.json();
         console.log(json);
    
         if (json.success) {
          localStorage.setItem('token', json.authtoken);
          toast.success('Login success', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          router.push("/admin/portal")// Use router.push to navigate to another page
        } else {
          toast.error('Invalid Credentials', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      };
    


  return (
    <>

  <div className="flex flex-col mt-3 items-center justify-center">
        <h1 className="text-3xl text-white" style={{ fontFamily: 'Montaga', fontWeight: '100' }}>Admin portal for Lada Jewelers</h1>

        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-4 border-black border-2 rounded-lg w-3/4 sm:w-auto"
          style={{ fontFamily: 'Montaga', fontWeight: '100' }}
          placeholder="Enter Your Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-4 border-black border-2 rounded-lg w-3/4 sm:w-auto"
          style={{ fontFamily: 'Montaga', fontWeight: '100' }}
          placeholder="Enter Your password"
        />

        <button
          onClick={login}
          className="transition duration-150 ease-in-out mt-4 bg-white text-black w-24 h-9 rounded-2xl p-0"
          style={{ fontFamily: 'Montaga', fontWeight: '100' }}
        >
          Login
        </button>
        
      </div>
        </>
  )
}

export default Admin;
