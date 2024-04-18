"use client";
import Navs from "@/app/new/page";
import { Days_One } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
const Page = ({ params }) => {
  const id = params.slug;
  const [data, setData] = useState("");
  const get = async () => {
    let res = await fetch(`https://apis-rouge.vercel.app/api/product/getf/${id}`);
    let data = await res.json();
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    get();
  }, []);

  return (
    <>
      
      <div className="flex flex-col container mx-auto lg:flex-row">
        <div className="flex flex-col">
          <div>
            <Image
              className="mx-auto md:mx-30 "
              src={data.Pic}
              width={350}
              height={140}
              alt="as"
            />{" "}
          </div>{" "}
        </div>

        <div className="ml-10">
          <br className="text-black" />
          <h1
            style={{ fontFamily: "Alice", fontWeight: 400, fontSize: "35px" }}
            className="text-black my-auto md:mt-36 text-3xl"
          >
            {data.name}
          </h1>
          <p
            style={{ fontFamily: "Alice", fontWeight: 400, fontSize: "20px" }}
            className="text-gray-500 mt-3 text-lg"
          >
            Category : {data.Category}
          </p>
          <p
            style={{ fontFamily: "Alice", fontWeight: 400, fontSize: "20px" }}
            className="text-black mt-5 text-2xl"
          >
            Rs {data.Price}
          </p>
          <div className="w-56 mt-3 rounded-lg h-10 flex flex-row bg-green-600">
            <div className="my-1 mx-1">
              <h1 className="text-3xl text-yellow-50">
                <FaWhatsapp />
              </h1>
            </div>
            <div className="my-[0.4rem]">
              <p
                style={{
                  fontFamily: "Alice",
                  fontWeight: 400,
                  fontSize: "18px",
                }}
                className="text-black"
              >
                Contact on Whatsapp
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
