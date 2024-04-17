import Image from "next/image";
import React from "react";
import Paage from "../fproduct/page";
import Link from "next/link";

const Fass = () => {
  return (
    <div>
      <Link href="/shop">
        <div
          style={{ fontFamily: "Dosis", fontWeight: 300, fontSize: "48px" }}
          className="py-6 text-center"
        >
          Shop By Category
        </div>
      </Link>
      <div
        style={{ fontFamily: "Dosis", fontWeight: 700, fontSize: "19px" }}
        className=" grid mx-12 space-x-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      >
        <div className="w-[80%] border  border-slate-900 h-[85%]">
          <Image
            alt="logo"
            src="https://static.tossdown.com/images/ce2a0988-6229-40d2-b256-d8b04500b3c9.webp"
            width={700}
            height={700}
            className="w-[100%] h-[100%]"
          />
          <div className="w-[100%] h-[13%] text-[#514533] shadow-slate-400 shadow-lg text-center">
            Earrings
          </div>
        </div>
        <div className="w-[80%] border   h-[85%]">
          <Image
            alt="logo"
            src="https://static.tossdown.com/images/a853906d-ef6c-4c2f-b6a4-733290249c8e.webp"
            width={700}
            height={700}
            className="w-[100%] h-[100%]"
          />
          <div className="w-[100%] h-[13%] text-[#514533] shadow-slate-400 shadow-lg text-center">
            Necklace sets
          </div>
        </div>
        <div className="w-[80%] border   h-[85%]">
          <Image
            alt="logo"
            src="https://static.tossdown.com/images/7c49c335-5f07-4634-b549-639477ef4bcf.webp"
            width={700}
            height={700}
            className="w-[100%] h-[100%]"
          />
          <div className="w-[100%] h-[13%] text-[#514533] shadow-slate-400 shadow-lg text-center">
            Rings
          </div>
        </div>
      </div>

      <div className="text-center">
        {" "}
        <Link href="/shop">
          <button
            style={{ fontFamily: "Dosis", fontWeight: 600, fontSize: "14px" }}
            className="border bg-black text-white px-6 py-2"
          >
            See All Categories
          </button>
        </Link>
      </div>
      <div
        style={{ fontFamily: "Dosis", fontWeight: 300, fontSize: "48px" }}
        className="py-6 text-center"
      >
        FEATURED PRODUCTS
      </div>
      <Paage />
    </div>
  );
};

export default Fass;
