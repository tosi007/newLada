"use client"
import { useRouter } from 'next/navigation';
import React,{useRef, useState} from 'react'
import { toast } from 'react-toastify';

const FeedBack =React.forwardRef((props, ref) => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
  
    const post =async()=>{
        
        const res=await fetch("http://localhost:5000/api/product/feed", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, message }),
           }) 
           toast.success('FeedBack Send', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        window.location.href='/'
    }
  return (
<div ref={ref} className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-black p-8">
    <h2 className="title-font mb-1 text-lg font-medium text-white">Feedback</h2>
    <p className="mb-5 leading-relaxed text-white">If you had any issues or you liked our product, please share
        with us!
    </p>
    <div className="mb-4">
        <label  className="text-sm leading-7 text-white">Email</label>
        <input type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value); console.log(email)}} name="email" className="w-full rounded border border-gray-300 bg-black py-1 px-3 text-base leading-8 text-white outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
    </div>
    <div className="mb-4">
        <label  className="text-sm leading-7 text-white">Message</label>
        <textarea id="message" value={message} onChange={(e)=>{setMessage(e.target.value); console.log(message)}} name="message" className="h-32 w-full resize-none rounded border border-gray-300 bg-black py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
    </div>
    <button onClick={post} className="rounded border border-white bg-black  py-2 px-6 text-lg text-white hover:bg-green-600 focus:outline-none">Send</button>
    <p className="mt-3 text-xs text-gray-500">Feel free to connect with us on social media platforms.</p>
</div>
  )
});
FeedBack.displayName = 'FeedBack';

export default FeedBack