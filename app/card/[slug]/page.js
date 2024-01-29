"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri"

const Page = ({params}) => {
    const id = params.slug
  const[data, setData] = useState("")
  const[name, setName] = useState("")
  const getData = async()=>{
    let res = await fetch(`http://localhost:5000/api/product/get/${id}`)
    let data = await res.json()
     setData(data)
     setName(data.name)
   setPic(data.Pic)
   if (data.Pic2) {
    setPic2(data.Pic2);
  }
  if (data.Pic3) {
    setPic3(data.Pic3);
  }
   setCurrentImage(data.Pic)
    }
    const [pic, setPic] = useState('');
    const [pic2, setPic2] = useState('');
    const [pic3, setPic3] = useState('');
  
    const [currentImage, setCurrentImage] = useState('');
  
    const handleClick = () => {
      console.log("Image clicked");
      // Change the image source to the first image
      setCurrentImage(pic);
    };
  
  useEffect(() => {
   getData()
   if (data.Pic) {
    console.log(data.Pic)
    setPic(data.Pic);
   ; // Set currentImage to the first available picture
  }

  // Check if Pic2 is available and update the state
  if (data.Pic2) {
    setPic2(data.Pic2);
  }

  // Check if Pic3 is available and update the state
  if (data.Pic3) {
    setPic3(data.Pic3);
  }
  }, [])
  
  return (
   <>
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
      <div><Image onClick={handleClick} className="mx-auto md:mx-40 " src={currentImage} width={350} height={100} alt='as' /> </div> <div className='flex mx-auto md:mx-40  mt-2 flex-row'> <Image className="mx-5  w-24" onClick={() => setCurrentImage(pic)} src={pic} width={50} height={50} alt='as' />
        <Image className="mx-5 w-24 " onClick={() => setCurrentImage(pic2)} src={pic2} width={50} height={50} alt='as' />
        <Image className="mx-5  w-24" onClick={() => setCurrentImage(pic3)} src={pic3} width={50} height={50} alt='as' />
     
              </div>
      </div>

    <div className='ml-3'><br className='text-white'/><h1  style={{ fontFamily: 'Alice', fontWeight: 400, fontSize: '35px' }} className='text-white my-auto md:mt-36 text-3xl'>{data.name}</h1><p  style={{ fontFamily: 'Alice', fontWeight: 400, fontSize: '20px' }} className='text-gray-500 mt-3 text-lg'>{data.Description}</p><p  style={{ fontFamily: 'Alice', fontWeight: 400, fontSize: '20px' }} className='text-white mt-5 text-2xl'>Rs {data.Price}</p><div className='w-56 mt-3 rounded-lg h-10 flex flex-row bg-green-600'><div className='my-1 mx-1'><h1 className='text-3xl text-yellow-50'><FaWhatsapp/></h1></div><div className='my-[0.4rem]'><p  style={{ fontFamily: 'Alice', fontWeight: 400, fontSize: '18px' }} className='text-white'>Contact on Whatsapp</p></div></div></div>



    </div>
  
    </>
  
  
  

  )
}

export default Page