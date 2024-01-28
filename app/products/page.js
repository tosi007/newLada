"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
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
    <Link href="/"> <RiArrowGoBackFill className='text-3xl text-white absolute top-6 left-0'/> </Link>
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

<div className='flex flex-col  lg:flex-row'>



    <div className='flex flex-col'>
      <div><Image onClick={handleClick} className="mx-auto md:mx-40 " src={currentImage} width={350} height={100} alt='as' /> </div> <div className='flex mx-auto md:mx-40  mt-2 flex-row'> <Image className="mx-5 " onClick={() => setCurrentImage(pic1)} src={pic1} width={50} height={100} alt='as' />
        <Image className="mx-5 " onClick={() => setCurrentImage(pic2)} src={pic2} width={50} height={100} alt='as' />
        <Image className="mx-5 " onClick={() => setCurrentImage(pic3)} src={pic3} width={50} height={100} alt='as' />
     
              </div>
      </div>

    <div><br className='text-white'/><h1 className='text-white my-auto md:mt-36 text-3xl'>Eternal Embrace</h1><p className='text-gray-500 mt-3 text-lg'>Infinite love captured in a timeless, intertwined pendant. Radiant romance</p><p className='text-white mt-5 text-2xl'>Rs 50,000</p><div className='w-56 mt-3 rounded-lg h-10 flex flex-row bg-green-600'><div className='my-1 mx-1'><h1 className='text-3xl text-yellow-50'><FaWhatsapp/></h1></div><div className='my-[0.4rem]'><p className='text-white'>Contact on Whatsapp</p></div></div></div>



    </div>
  
    </>
  );
};

export default Page;






