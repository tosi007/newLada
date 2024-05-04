"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    // Logic to change isActive state after 3 seconds
    const timeout = setTimeout(() => {
      setIsActive(true);
    }, 100);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []); // useEffect runs only once when the component mounts
  return (
    <>
      <div className="flex z-0 sm:flex-row flex-col-reverse  w-full [50%] ">
        <div
          className={`transition-transform transform ${
            isActive ? "translate-x-0" : "-translate-x-[50rem]"
          }`}
          style={{ width: "50%" }}
        >
          <Image
            src="/poo.png"
            alt="logo"
            layout="responsive"
            width={480}
            height={50}
          />
        </div>
        <div
          style={{ fontFamily: "Dosis", fontWeight: 600, fontSize: "50px" }}
          className={` text-black ml-7  sm:mt-[110px] transition-transform transform ${
            isActive ? "translate-x-0" : "translate-x-[50rem]"
          }`}
        >
        <span>Elegance Crafted,</span>
          <br />
          <span>Dreams Embodied</span>
          <br />
          <span>in Jewelry</span> <br />{" "}
          <Link href="/shop">
            {" "}
            <button
              style={{ fontFamily: "Dosis", fontWeight: 300, fontSize: "20px" }}
              className="border rounded-lg mt-2 border-black p-3 w-[148px] hover:bg-black hover:text-white"
            >
              Browse Jewelry
            </button>
          </Link>
        </div>
      </div>
      <span
        className={` absolute top-[11rem] right-3 text-8xl text-slate-100 transition-transform transform ${
          isActive ? "translate-x-0" : "translate-x-[50rem]"
        }`}
        style={{ fontFamily: "Dosis", fontWeight: 200, fontSize: "50" }}
      >
        L<br />A<br />D<br />A
      </span>
    </>
  );
};

export default Hero;
