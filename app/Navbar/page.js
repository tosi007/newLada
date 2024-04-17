"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { MdCloseFullscreen } from "react-icons/md";
import { useRef } from 'react';
import Card from '../card/page';
import { SiAboutdotme } from "react-icons/si";
import {BsArrowDownShort, BsX} from 'react-icons/bs'
import { IoMenu } from "react-icons/io5";
import FeedBack from '../component/feed';
import BackgroundVideo from '../component/video';
import Link from 'next/link';
import { FaTachometerAlt } from "react-icons/fa";
import Price from '../component/price';
import { MdConnectWithoutContact } from "react-icons/md";
import Social from '../component/social';
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
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
  
           <div className="container flex flex-col md:flex-row py-2 justify-between items-center relative">
      

      {/* Mobile Search Bar and Hamburger */}
      <div className="md:hidden flex gap-2 items-center absolute -top-2 right-0">

      
        <h1 className='flex items-center px-3 py-1 font-medium text-white capitalize rounded-md bg-black ' onClick={toggleSidebar}>
        <IoMenu className="text-3xl  mt-[27px] " /> 
        </h1>
      </div>

      {/* Navigation Links for Desktop */}
      <div className="hidden md:flex items-center gap-4">
      
        <h1   className='text-base font-medium cursor-pointer'>About</h1>
        <h1  className='text-base font-medium cursor-pointer'>Contact</h1>
      </div>

    

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="md:hidden fixed top-0 left-0 right-5 h-full w-full bg-black z-50">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <BsX className="text-white cursor-pointer text-4xl absolute top-0 left-0" onClick={toggleSidebar} />
          </div>

          {/* Add sidebar content here, e.g., links to services and courses */}
          <div className="flex  p-4"><Image src="/logo.png" width={50} className='w-[50px] mx-auto ' height={150} alt="logo" /></div><br/>
          <a className='text-xl text-center text-white font-medium cursor-pointer'  onClick={()=> { setIsSidebarOpen(!isSidebarOpen)}}><FaTachometerAlt className='text-6xl mx-auto' /></a><br/>
          <h1 className='text-xl text-center text-white font-medium cursor-pointer'  onClick={()=> {scrollToSection(about) ; setIsSidebarOpen(!isSidebarOpen)}}><SiAboutdotme className='text-6xl mx-auto'/></h1>
          <h1 className='text-xl text-center text-white font-medium cursor-pointer' onClick={()=> {scrollToSection(feed) ; setIsSidebarOpen(!isSidebarOpen)}}><MdConnectWithoutContact className='text-6xl mx-auto'/></h1>
        </div>
      )}
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
          <Social/>
        </div>
        <div className="w-2/4 h-[0.1rem] mt-5 rounded-lg bg-[#D7D7DD]"></div>
      </div><div className="sm:hidden">  <Price/> </div>
      <nav className={`p-4 bg-black ${menuOpen ? 'fixed top-0 right-0 w-full h-full justify-center items-center bg-black z-50' : ''}`}>
        <div className=" mx-auto  sm:justify-center  flex justify-between items-center">
          {/* Navbar links */}
          <div className={`sm:flex sm:space-x-4 ${menuOpen ? 'flex-col items-end' : 'hidden'}`}>
            <a href="#" style={{ fontFamily: 'Alice', fontWeight: 400 }} className="text-white transition delay-150 duration-300 ease-in-out ... text-4xl sm:text-lg block">
            <FaTachometerAlt className='text-3xl hover:rotate-45 mx-auto' />
            </a>
            <a href="#" onClick={()=> scrollToSection(about)} style={{ fontFamily: 'Alice', fontWeight: 400 }} className="text-white text-4xl sm:text-lg  block">
            <SiAboutdotme className='text-4xl hover:rotate-45 mx-auto'/>
            </a>
            <a href="#" onClick={()=> {scrollToSection(feed) ; setMenuOpen(false)}}  style={{ fontFamily: 'Alice', fontWeight: 400 }} className="text-white text-4xl sm:text-lg  block">
            <MdConnectWithoutContact className='text-4xl hover:rotate-45 mx-auto'/>
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
 <div style={{ width: '50%' }}><Image src="/poo.png" alt="logo" layout="responsive" width={480} height={50} /></div><div><div className="hidden sm:block"><Price /></div>
 <div className=' text-white ml-7  sm:mt-[50px]'><span style={{ fontFamily: 'Alice', fontWeight: 400 ,fontSize:"30px"}}>Elegance Crafted,</span><br/><span style={{ fontFamily: 'Alice', fontWeight: 400, fontSize:"30px" }}>Dreams Embodied</span><br/><span style={{ fontFamily: 'Alice', fontWeight: 400,fontSize:"30px" }}>in Jewelry</span> <br/> 
 <button onClick={()=> scrollToSection(browse)} style={{ fontFamily: 'Alice', fontWeight: 400 }} className='border hover:bg-green-600 rounded-lg mt-2 border-white p-3 w-[148px]'>Browse Jewelry</button></div>
 </div></div>
 <span className=' absolute top-52 right-3  text-white' style={{ fontFamily: 'Alice', fontWeight: 400 ,fontSize:"50px"}}>L<br/>A<br/>D<br/>A</span>
 <Card ref={browse}  />

<BackgroundVideo ref={about}/>
<FeedBack ref={feed}/>

    </>
  );
};

export default Navbar;

