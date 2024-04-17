"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

const FeedBack = React.forwardRef((props, ref) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const post = async () => {
    const res = await fetch("https://apis-rouge.vercel.app/api/product/feed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    });
    toast.success("FeedBack Send", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    window.location.href = "/";
  };
  return (
    <>
      <div
        ref={ref}
        className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8"
      >
        <h2 className="title-font mb-1 text-lg font-medium text-black">
          Feedback
        </h2>
        <p className="mb-5 leading-relaxed text-black">
          If you had any issues or you liked our product, please share with us!
        </p>
        <div className="mb-4">
          <label className="text-sm leading-7 text-black">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(email);
            }}
            name="email"
            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-black outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm leading-7 text-black">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              console.log(message);
            }}
            name="message"
            className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          ></textarea>
        </div>
        <button
          onClick={post}
          className="rounded border border-white bg-white  py-2 px-6 text-lg text-black hover:bg-green-600 focus:outline-none"
        >
          Send
        </button>
        <p className="mt-3 text-xs text-gray-500">
          Feel free to connect with us on social media platforms.
        </p>
      </div>
    </>
  );
});
FeedBack.displayName = "FeedBack";

export default FeedBack;
