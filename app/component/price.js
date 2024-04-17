"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';
import { FaArrowDown } from 'react-icons/fa';

const Price = () => {
  const [data, setData] = useState("as");
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/price/get');
      const jsonData = await response.json();
      setData(jsonData[0]); 
      console.log(data)
      // Assuming your API returns an object with price and range properties
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    // Fetch data from the API
  

    fetchData();
 
  
  }, ); // No dependency array means this effect runs once, after the initial render
 
   // This will log the data after it's fetched
  return (
  <div className='flex-col ml-3 text-center'> 
    <div className='flex-row flex justify-center space-x-14 text-center'>
    <div className='text-white '><div><Image src="/Gold.png" alt='logo' width={100} height={100} /></div><div className='flex'>PKR   {data.gprice}    {data.grange === 'high' ? (
              <BiUpArrowAlt className='text-green-500 text-3xl' />
            ) : (
              <FaArrowDown className='text-red-500 text-xl mx-2' />
            )}</div></div><div className='text-white'><div><Image src="/Dia.png" alt='logo' width={120} height={120} /></div><div className='flex'>PKR  {data.sprice}    {data.srange === 'high' ? (
              <BiUpArrowAlt className='text-green-500 text-3xl' />
            ) : (
              <FaArrowDown className='text-red-500 text-xl mx-2' /> 
            )}</div></div><div className='text-white'><div><Image src="/Silver.png" alt='logo' width={70} height={70} /></div><div className='flex'>PKR  {data.dprice}    {data.drange === 'high' ? (
              <BiUpArrowAlt className='text-green-500 text-3xl' />
            ) : (
                        <FaArrowDown className='text-red-500 text-xl mx-2' />
            )}</div></div></div>
    </div>
  )
}

export default Price