"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { MdCloseFullscreen } from "react-icons/md";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="sm:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`text-white mt-3 focus:outline-none ${menuOpen ? 'z-10' : 'z-20 block'}`}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
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
      <nav className={`p-4 bg-black ${menuOpen ? 'fixed top-0 right-0 w-full h-full justify-center items-center bg-black z-50' : ''}`}>
        <div className=" mx-auto  sm:justify-center  flex justify-between items-center">
          {/* Navbar links */}
          <div className={`sm:flex sm:space-x-4 ${menuOpen ? 'flex-col items-end' : 'hidden'}`}>
            <a href="#" style={{ fontFamily: 'Alice', fontWeight: 400 }} className="text-white block">
              Home
            </a>
            <a href="#" style={{ fontFamily: 'Alice', fontWeight: 400 }} className="text-white block">
              About
            </a>
            <a href="#" style={{ fontFamily: 'Alice', fontWeight: 400 }} className="text-white block">
              Contact
            </a>
            {menuOpen && (
              <button onClick={() => setMenuOpen(false)} className="text-black mt-3 absolute top-0 right-2 focus:outline-none">
              <MdCloseFullscreen className='text-white' />
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

