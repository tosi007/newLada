"use client"
import Image from 'next/image';
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
    <TEDropdown className="flex justify-center">
      <TERipple rippleColor="light">
        <TEDropdownToggle className="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
         Category
          <span className="ml-2 [&>svg]:w-5 w-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </TEDropdownToggle>
      </TERipple>

      <TEDropdownMenu>
        <TEDropdownItem>
          <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
            Action
          </a>
        </TEDropdownItem>
        <TEDropdownItem>
          <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
            Another action
          </a>
        </TEDropdownItem>
        <TEDropdownItem>
          <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
            Something else here
          </a>
        </TEDropdownItem>
      </TEDropdownMenu>
    </TEDropdown>

    
    </>
  );
};

export default Page;






