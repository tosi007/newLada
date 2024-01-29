import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
 <>
 <div  className='flex sm:flex-row flex-col-reverse  w-full h-full bg-black '>
 <div style={{ width: '50%' }}><Image src="/poo.png" alt="logo" layout="responsive" width={480} height={50} /></div>
 <div className=' text-white ml-7  sm:mt-[110px]'><span style={{ fontFamily: 'Alice', fontWeight: 400 ,fontSize:"30px"}}>Elegance Crafted,</span><br/><span style={{ fontFamily: 'Alice', fontWeight: 400, fontSize:"30px" }}>Dreams Embodied</span><br/><span style={{ fontFamily: 'Alice', fontWeight: 400,fontSize:"30px" }}>in Jewelry</span> <br/> <button style={{ fontFamily: 'Alice', fontWeight: 400 }} className='border rounded-lg mt-2 border-white p-3 w-[148px]'>Browse Jewelry</button></div>
 </div>
 <span className=' absolute top-32 right-3  text-white' style={{ fontFamily: 'Alice', fontWeight: 400 ,fontSize:"50px"}}>L<br/>A<br/>D<br/>A</span>
 </>
  );
};

export default Hero;
