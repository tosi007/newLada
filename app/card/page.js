"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Bottom from '../bottom/page';

const Card = React.forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState("");

  const getData = async () => {
    const res = await fetch("http://localhost:5000/api/product/get", {
      method: "GET",
    });
    const json = await res.json();
    console.log(json);
    setData(json);
  };

  const handleItemClick1 = async (category) => {
    console.log(category);
    const res = await fetch(`http://localhost:5000/api/product/comes?sort=${category}`, {
      method: "GET",
    });
    const json = await res.json();
    console.log(json);
    setData(json);
  };

  const handleItemClick = async (category) => {
    if (category === "All") {
      window.location.href = '/';
    }
    const res = await fetch(`http://localhost:5000/api/product/come?category=${category}`, {
      method: "GET",
    });
    const json = await res.json();
    console.log(json);
    setData(json);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div ref={ref}>
        <Bottom />
        <div className="relative my-4 inline-block ml-3 shadow-xl text-left">
          <button
            onClick={toggleDropdown}
            type="button"
            className="text-black  bg-white focus:ring-4 focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Category
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          {isOpen && (
            <div className="z-10 absolute left-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleItemClick('All')}
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleItemClick('Earring')}
                  >
                    Earring
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleItemClick('Rings')}
                  >
                    Rings
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleItemClick('Necklace')}
                  >
                    Necklace
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleItemClick('Bracelet')}
                  >
                    Bracelet
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleItemClick('Cufflink')}
                  >
                    Cufflink
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleItemClick('Bridal jewelry')}
                  >
                    Bridal jewelry
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative my-4 mx-3 inline-block text-left">
          <button
            onClick={toggleDropdown}
            type="button"
            className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sort By
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          {isOpen && (
            <div className="z-10 absolute left-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleItemClick1('lowToHigh')}
                  >
                    lowToHigh
                  </a>
                </li>
                <li>
                  <a
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleItemClick1('highToLow')}
                  >
                    highToLow
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 grid:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.isArray(data) ? (
            data.map((item) => (
              <div key={item._id} className="w-fit mx-2 bg-black border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href={`/card/${item._id}`}>
                  <Image className="rounded-t-lg md:w-[250px] text-center hover:transition-transform hover:transform hover:ease-out duration-300 " width={200} height={10} objectFit='cover' src={item.Pic} alt="" />
                  </Link>
                <div className="p-5">
                <Link href={`/card/${item._id}`}>
                    <h5 style={{ fontFamily: 'Alice', fontWeight: 400, fontSize: '30px' }} className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{item.name}</h5>
                    </Link>
                  <p style={{ fontFamily: 'Alice', fontWeight: 400, fontSize: '20px' }} className="mb-3 font-normal text-gray-400 dark:text-gray-400">{item.Description}</p>
                  <h5 style={{ fontFamily: 'Alice', fontWeight: 400, fontSize: '25px' }} className="mb-2 text-lg font-bold tracking-tight text-white dark:text-white">PKR.{item.Price}</h5>
                  <Link href={`/card/${item._id}`} style={{ fontFamily: 'Alice', fontWeight: 400, fontSize: '17px' }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View Product
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>Data is not an array</p>
          )}
        </div>
      </div>
    </>
  );
});
Card.displayName = 'Card';
export default Card;
