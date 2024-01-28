"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
    TEDropdown,
    TEDropdownToggle,
    TEDropdownMenu,
    TEDropdownItem,
    TERipple,
  } from "tw-elements-react";
const Page = () => {
  const [pic1, setPic1] = useState('');
  const [pic2, setPic2] = useState('');
  const [pic3, setPic3] = useState('');

  const [currentImage, setCurrentImage] = useState('');

  const handleClick = () => {
    console.log("Image clicked");
    // Change the image source to the first image
    setCurrentImage(pic1);
  };

  useEffect(() => {
    
    const data = {
      _id: '65b47dae29ecc6fd43177bf2',
      name: 'dd',
      Price: 0,
      Description: 'iuu',
      Category: 'Bridal jewelry',
      Pic1: 'https://res.cloudinary.com/djjcs8pla/image/upload/v1706364371/btaj6ohyesgxfe3mob1h.jpg',
      Pic2: 'https://res.cloudinary.com/djjcs8pla/image/upload/v1706362905/oeqpalmed5fkruaynvgz.jpg',
      Pic3: 'https://res.cloudinary.com/djjcs8pla/image/upload/v1706327442/kelfc5xhmeuvxjwzvdxf.png',
      Date: '2024-01-27T03:51:10.272+00:00',
      __v: 0,
    };

    // Check if Pic1 is available and update the state
    if (data.Pic1) {
      setPic1(data.Pic1);
      setCurrentImage(data.Pic1); // Set currentImage to the first available picture
    }

    // Check if Pic2 is available and update the state
    if (data.Pic2) {
      setPic2(data.Pic2);
    }

    // Check if Pic3 is available and update the state
    if (data.Pic3) {
      setPic3(data.Pic3);
    }
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (<>
     
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

<div className='flex flex-row'>



    <div className='flex flex-col'>
      <div><Image onClick={handleClick} className="mx-auto md:mx-40 " src={currentImage} width={350} height={100} alt='as' /> </div> <div className='flex mx-auto md:mx-40  mt-2 flex-row'> <Image className="mx-5 " onClick={() => setCurrentImage(pic1)} src={pic1} width={50} height={100} alt='as' />
        <Image className="mx-5 " onClick={() => setCurrentImage(pic2)} src={pic2} width={50} height={100} alt='as' />
        <Image className="mx-5 " onClick={() => setCurrentImage(pic3)} src={pic3} width={50} height={100} alt='as' />
     
    
      </div>

    <div><h1 className='text-white text-3xl'>sjs</h1></div>













      </div>



    </div>
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="text-black bg-white  focus:ring-4 focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Dropdown button
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="z-10 absolute left-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Dashboard
              </a>
            </li>
            <li>
              <Link href="/admin" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Settings
              </Link>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Earnings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
    
    </>
  );
};

export default Page;






