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
 <div className="justify-between bg-black flex">
        <div className="w-2/4 h-[0.1rem] mt-5 rounded-lg bg-[#D7D7DD]"></div>
        <div className="mt-2 text-center">
          <Image className="ml-9" src="/logo.png" alt="logo" width={30} height={30} />
          <div className="flex space-x-1 flex-row">
            <div style={{ fontFamily: 'Alice', fontWeight: 400 }} className="text-white ml-2">
              LADA
            </div>{' '}
            <div
              className="text-sm text-white mt-[0.15rem]"
              style={{ fontFamily: 'Alice', fontWeight: 400, fontSize: '12px' }}
            >
              {' '}
              Jewelers
            </div>{' '}
          </div>
        </div>
        <div className="w-2/4 h-[0.1rem] mt-5 rounded-lg bg-[#D7D7DD]"></div>
      </div>
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
