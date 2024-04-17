"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Paage = () => {
  const [data, setData] = useState("");

  const getData = async () => {
    const res = await fetch("https://apis-rouge.vercel.app/api/product/getf", {
      method: "GET",
    });
    const json = await res.json();
    console.log(json);
    setData(json);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
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
              style={{ fontFamily: "Dosis", fontWeight: 200, fontSize: "20px" }}
              class="pt-11 ml-2"
            >
              PKR, {item.Price}
            </div>
            <div>
              <Link href={`/fproduct/${item._id}`}>
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
        <p>Loading ....</p>
      )}
        <div className="text-center">
        {" "}
        <Link href="/shop">
          {" "}
          <button
            style={{ fontFamily: "Dosis", fontWeight: 600, fontSize: "14px" }}
            className="border bg-black text-white px-6 py-2"
          >
            SHOP ALL PRODUCTS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Paage;
