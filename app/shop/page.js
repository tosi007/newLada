"use client";
import React, { useEffect, useState } from "react";
import Navs from "../new/page";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState("");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const getData = async () => {
    const res = await fetch("https://apis-rouge.vercel.app/api/product/get", {
      method: "GET",
    });
    const json = await res.json();
    console.log(json);
    setData(json);
  };

  const handleItemClick1 = async (category) => {
    console.log(category);
    const res = await fetch(
      `https://apis-rouge.vercel.app/api/product/comes?sort=${category}`,
      {
        method: "GET",
      }
    );
    const json = await res.json();
    console.log(json);
    setData(json);
  };

  const handleItemClick = async (category) => {
    if (category === "All") {
      window.location.href = "/";
    }
    const res = await fetch(
      `https://apis-rouge.vercel.app/api/product/come?category=${category}`,
      {
        method: "GET",
      }
    );
    const json = await res.json();
    console.log(json);
    setData(json);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <h1
          style={{
            fontFamily: "Dosis",
            fontWeight: 600,
            fontSize: "40px",
          }}
          className="text-center py-10"
        >
          Our Catalogue
        </h1>
        <button
          onClick={toggleDropdown}
          type="button"
          className="text-black  bg-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Category
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="z-10 absolute left-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
            <ul className="py-2 text-sm text-black dark:text-gray-200">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleItemClick("All")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleItemClick("Earring")}
                >
                  Earring
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleItemClick("Rings")}
                >
                  Rings
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleItemClick("Necklace")}
                >
                  Necklace
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleItemClick("Bracelet")}
                >
                  Bracelet
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleItemClick("Cufflink")}
                >
                  Cufflink
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => handleItemClick("Bridal jewelry")}
                >
                  Bridal jewelry
                </a>
              </li>
            </ul>
          </div>
        )}
        <div
          style={{ fontFamily: "Dosis", fontWeight: 700, fontSize: "19px" }}
          className=" grid mx-12 space-x-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {Array.isArray(data) ? (
            data.map((item) => (
              <div
                key={item._id}
                class="w-60 h-[27rem]  border-slate-200 border m-2 "
              >
                <Image
                  className="w-full h-[50%]"
                  alt="Mountains"
                  src={item.Pic}
                  width={200}
                  height={200}
                  style={{
                    objectPosition: "center",
                    objectFit: "cover", // cover, contain, none
                  }}
                />
                <div class="h-6 py-8 ml-2 text-lg truncate">{item.name}</div>
                <div
                  style={{
                    fontFamily: "Dosis",
                    fontWeight: 200,
                    fontSize: "20px",
                  }}
                  class="pt-11 ml-2"
                >
                  PKR, {item.Price}
                </div>
                <div>
                  <Link href={`/shop/${item._id}`}>
                    <button
                      style={{
                        fontFamily: "Dosis",
                        fontWeight: 200,
                        fontSize: "20px",
                      }}
                      class="border hover:bg-black hover:text-white px-10 py-1 mb-2 ml-2  o"
                    >
                      View
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>Loading .....</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
