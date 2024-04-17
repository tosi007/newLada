"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Fass from "../asss/page";
import CardSlider from "../asss/page";
import Link from "next/link";

const Ass = () => {
  const [data, setData] = useState("");

  const getData = async () => {
    const res = await fetch("http://localhost:5000/api/product/gett", {
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
      className="container  mx-auto"
      style={{ fontFamily: "Dosis", fontWeight: 400, fontSize: "40px" }}
    >
      <div className="text-center py-6">Top Sellers</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                <Link href={`/top/${item._id}`}>
                  <button
                    style={{ fontFamily: "Dosis", fontWeight: 200 }}
                    class="border hover:bg-black hover:text-white text-base hover:text-lg px-10 py-1 mb-2 ml-2  o"
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
      </div>
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
      <Fass />
    </div>
  );
};

export default Ass;
