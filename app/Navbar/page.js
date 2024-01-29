"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { MdCloseFullscreen } from "react-icons/md";
import { useRef } from 'react';
import Card from '../card/page';
import FeedBack from '../component/feed';
import BackgroundVideo from '../component/video';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const browse = useRef(null)
const feed = useRef(null)
const about = useRef(null)
const scrollToSection =(elementRef)=>{

    

  window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:"smooth"
  })
}
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
      <div className="justify-between  bg-black flex">
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
            <a href="#" style={{ fontFamily: 'Alice', fontWeight: 400 }} className="text-white transition delay-150 duration-300 ease-in-out ... text-4xl sm:text-lg block">
              Home
            </a>
            <a href="#" onClick={()=> scrollToSection(about)} style={{ fontFamily: 'Alice', fontWeight: 400 }} className="text-white text-4xl sm:text-lg  block">
              About
            </a>
            <a href="#" onClick={()=> {scrollToSection(feed) ; setMenuOpen(false)}}  style={{ fontFamily: 'Alice', fontWeight: 400 }} className="text-white text-4xl sm:text-lg  block">
              Contact
            </a>
            {menuOpen && (
              <button onClick={() => setMenuOpen(false)} className="text-black mt-3 absolute top-0 right-28 text-5xl focus:outline-none">
              <MdCloseFullscreen className='text-white' />
              </button>
            )}
          </div>
        </div>
      </nav>
      <div  className='flex sm:flex-row flex-col-reverse  w-full h-full bg-black '>
 <div style={{ width: '50%' }}><Image src="/poo.png" alt="logo" layout="responsive" width={480} height={50} /></div>
 <div className=' text-white ml-7  sm:mt-[110px]'><span style={{ fontFamily: 'Alice', fontWeight: 400 ,fontSize:"30px"}}>Elegance Crafted,</span><br/><span style={{ fontFamily: 'Alice', fontWeight: 400, fontSize:"30px" }}>Dreams Embodied</span><br/><span style={{ fontFamily: 'Alice', fontWeight: 400,fontSize:"30px" }}>in Jewelry</span> <br/> 
 <button onClick={()=> scrollToSection(browse)} style={{ fontFamily: 'Alice', fontWeight: 400 }} className='border hover:bg-green-600 rounded-lg mt-2 border-white p-3 w-[148px]'>Browse Jewelry</button></div>
 </div>
 <span className=' absolute top-32 right-3  text-white' style={{ fontFamily: 'Alice', fontWeight: 400 ,fontSize:"50px"}}>L<br/>A<br/>D<br/>A</span>
 <Card ref={browse}  />

<BackgroundVideo ref={about}/>
<FeedBack ref={feed}/>

    </>
  );
};

export default Navbar;

