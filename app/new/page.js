"use client";
import React, { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";

import { IoCloseOutline } from "react-icons/io5";
import Hero from "../Hero/page";
import Image from "next/image";
import Ass from "../top/page";
import Link from "next/link";
const Navs = () => {
  const [isActive, setIsActive] = useState(false);
  const [toogle, setToogle] = useState(false);
  const side = () => {
    setToogle(true);
  };
  const close = () => {
    setToogle(false);
  };
  useEffect(() => {
    // Logic to change isActive state after 3 seconds
    const timeout = setTimeout(() => {
      setIsActive(true);
    }, 100);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []); // useEffect runs only once when the component mounts

  return (
    <>
      <div>
        <div className="h-auto w-full ">
          <div className="pt-4">
            <div className="container   mx-auto flex justify-between">
              <div
                style={{
                  fontFamily: "Dosis",
                  fontWeight: 300,
                  fontSize: "20px",
                }}
                className={`transform w-7 h-7 pt-2  space-x-3 text-base hidden md:block md:flex transition-transform ${
                  isActive ? "translate-x-0" : "-translate-x-96"
                }`}
              >
                <Link href="/">
                  <button className="text-slate-500 hover:text-black">
                    Home
                  </button>
                </Link>{" "}
                <Link href="/shop">
                  <button className="text-slate-500 hover:text-black">
                    Shop
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="text-slate-500 hover:text-black">
                    Contact
                  </button>
                </Link>
                <Link href="/about">
                  <button className="text-slate-500 hover:text-black">
                    About
                  </button>
                </Link>
              </div>
              <div
                className={`transform pl-2 md:pl-0 transition-transform ${
                  isActive ? "translate-x-0" : "-translate-y-96"
                }`}
              >
                <svg
                  width="70"
                  height="40"
                  viewBox="0 0 200 124.85486590026754"
                  className="looka-1j8o68f"
                >
                  <defs id="SvgjsDefs1151"></defs>
                  <g
                    id="SvgjsG1152"
                    featurekey="X3o6dM-0"
                    transform="matrix(6.829667095935116,0,0,6.829667095935116,-1.0927385693272018,-53.81778401084018)"
                    fill="#000000"
                  >
                    <path d="M14.64 21.4 q0.24 0.04 0.54 0.13 t0.57 0.24 t0.46 0.36 t0.19 0.49 q0 0.26 -0.19 0.38 t-0.46 0.17 t-0.57 0.04 t-0.52 -0.01 l-5.36 0 t-3.64 0.01 t-2.25 0.01 t-1.22 0.01 t-0.53 0.01 l-0.18 0 q-0.5 0 -0.91 -0.14 t-0.41 -0.44 q0 -0.26 0.2 -0.39 t0.51 -0.19 t0.67 -0.06 l0.66 0 q0.98 0 1.92 -0.06 t1.9 -0.16 q-0.16 -1.04 -0.22 -2.5 t-0.06 -2.99 t0.03 -2.96 t0.07 -2.41 q0 -0.62 0.03 -1.17 t0.09 -0.97 t0.16 -0.67 t0.26 -0.25 q0.32 0 0.55 0.2 t0.39 0.5 t0.23 0.64 t0.05 0.6 q-0.06 1.92 -0.11 3.37 t-0.1 2.53 t-0.08 1.83 t-0.03 1.23 q-0.02 0.3 -0.06 0.68 t-0.1 0.78 t-0.14 0.79 t-0.2 0.69 q0.92 -0.08 1.87 -0.18 t1.93 -0.17 t1.99 -0.07 t2.07 0.1 z M13.799999999999999 14.54 q0.28 0.06 0.49 0.26 t0.35 0.44 q0.16 -0.18 0.4 -0.2 t0.46 0.07 t0.36 0.28 t0.1 0.45 q-0.08 0.36 -0.15 0.9 t-0.09 1.04 t0.03 0.86 t0.21 0.36 q0.12 0 0.29 -0.31 t0.34 -0.73 t0.31 -0.84 t0.18 -0.64 q0.06 -0.2 0.2 -0.27 t0.27 -0.04 t0.22 0.15 t0.03 0.3 q-0.04 0.12 -0.13 0.45 t-0.23 0.73 t-0.33 0.83 t-0.44 0.76 t-0.56 0.51 t-0.67 0.08 q-0.58 -0.16 -0.84 -0.7 q-0.16 0.48 -0.44 0.87 t-0.72 0.57 q-0.42 0.14 -0.74 0.06 q-0.58 -0.16 -0.92 -0.72 t-0.46 -1.3 t-0.02 -1.54 t0.41 -1.44 t0.83 -1.01 t1.26 -0.23 z M14.32 16.56 q-0.04 -0.34 -0.15 -0.66 t-0.33 -0.36 q-0.32 -0.06 -0.57 0.23 t-0.41 0.77 t-0.23 1.05 t-0.04 1.08 t0.16 0.87 t0.39 0.4 t0.49 -0.28 t0.4 -0.82 t0.26 -1.11 t0.03 -1.17 z M20.479999999999997 11.38 q0 -0.48 0.26 -0.67 t0.56 -0.17 t0.53 0.22 t0.17 0.52 q-0.04 0.24 -0.12 0.91 t-0.17 1.55 t-0.15 1.82 t-0.06 1.74 t0.07 1.31 t0.27 0.51 q0.18 0 0.37 -0.34 t0.37 -0.79 t0.31 -0.88 t0.17 -0.63 q0.06 -0.2 0.19 -0.27 t0.26 -0.04 t0.22 0.15 t0.05 0.32 t-0.18 0.78 t-0.42 1.19 t-0.73 1.09 t-1.07 0.48 q-0.46 0 -0.71 -0.37 t-0.39 -0.97 q-0.16 0.38 -0.43 0.68 t-0.67 0.44 q-0.44 0.16 -0.76 0.04 q-0.58 -0.14 -0.92 -0.63 t-0.47 -1.14 t-0.03 -1.35 t0.41 -1.26 t0.83 -0.87 t1.26 -0.19 q0.4 0.06 0.7 0.42 q0.08 -1.14 0.18 -2.12 t0.1 -1.48 z M20.02 16.32 q-0.04 -0.28 -0.15 -0.56 t-0.33 -0.32 q-0.32 -0.06 -0.57 0.2 t-0.41 0.67 t-0.23 0.91 t-0.04 0.95 t0.17 0.76 t0.4 0.35 t0.49 -0.24 t0.4 -0.72 t0.25 -0.98 t0.02 -1.02 z M25.419999999999998 14.54 q0.28 0.06 0.49 0.26 t0.35 0.44 q0.16 -0.18 0.4 -0.2 t0.46 0.07 t0.36 0.28 t0.1 0.45 q-0.08 0.36 -0.15 0.9 t-0.09 1.04 t0.03 0.86 t0.21 0.36 q0.12 0 0.29 -0.31 t0.34 -0.73 t0.31 -0.84 t0.18 -0.64 q0.06 -0.2 0.2 -0.27 t0.27 -0.04 t0.22 0.15 t0.03 0.3 q-0.04 0.12 -0.13 0.45 t-0.23 0.73 t-0.33 0.83 t-0.44 0.76 t-0.56 0.51 t-0.67 0.08 q-0.58 -0.16 -0.84 -0.7 q-0.16 0.48 -0.44 0.87 t-0.72 0.57 q-0.42 0.14 -0.74 0.06 q-0.58 -0.16 -0.92 -0.72 t-0.46 -1.3 t-0.02 -1.54 t0.41 -1.44 t0.83 -1.01 t1.26 -0.23 z M25.939999999999998 16.56 q-0.04 -0.34 -0.15 -0.66 t-0.33 -0.36 q-0.32 -0.06 -0.57 0.23 t-0.41 0.77 t-0.23 1.05 t-0.04 1.08 t0.16 0.87 t0.39 0.4 t0.49 -0.28 t0.4 -0.82 t0.26 -1.11 t0.03 -1.17 z"></path>
                  </g>
                  <g
                    id="SvgjsG1153"
                    featurekey="RFbU7s-0"
                    transform="matrix(0.7909202748295893,0,0,0.7909202748295893,19.699450511477508,108.9415493069295)"
                    fill="#000000"
                  >
                    <path d="M3.66 7.76 l3 0 l0 7.24 c0 3.14 -2.44 5.1 -5.4 5.1 c-0.22 0 -0.4 0 -0.5 -0.02 s-0.24 -0.06 -0.38 -0.08 l0 -2.78 c0.26 0.06 0.54 0.1 0.8 0.1 c1.54 0 2.48 -0.72 2.48 -2.32 l0 -7.24 z M21.532000000000004 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 1.94 l6.1 0 l0 2.78 l-9.1 0 l0 -12.24 z M57.844 7.76 l2.92 0 l-2.26 12.24 l-4.44 0 l-1.6 -7.14 l-1.7 7.14 l-4.68 0 l-1.98 -12.24 l3.06 0 l1.38 9.16 l1.8 -7.14 l4.26 0 l1.72 7.14 z M74.816 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 1.94 l6.1 0 l0 2.78 l-9.1 0 l0 -12.24 z M107.468 17.22 l0 2.78 l-9.1 0 l0 -12.24 l3 0 l0 9.46 l6.1 0 z M130.84 17.22 l0 2.78 l-9.1 0 l0 -12.24 l3 0 l0 9.46 l6.1 0 z M145.112 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 1.94 l6.1 0 l0 2.78 l-9.1 0 l0 -12.24 z M171.664 10.58 l0 2.92 l2.8 0 c0.92 0 1.46 -0.54 1.46 -1.46 s-0.54 -1.46 -1.46 -1.46 l-2.8 0 z M176.204 15.48 c0.56 0.76 1.12 1.52 1.7 2.26 c0.56 0.74 1.12 1.5 1.68 2.26 l-3.66 0 c-0.72 -0.96 -1.42 -1.92 -2.12 -2.88 c-0.7 -0.94 -1.42 -1.9 -2.14 -2.86 l0 5.74 l-3 0 l0 -12.24 l5.8 0 c2.28 0 4.22 1.74 4.22 4.04 c0 1.62 -1 3.04 -2.48 3.68 z M192.996 19.7 l0 -2.82 c0.24 0.06 0.54 0.12 0.88 0.16 c0.34 0.06 0.7 0.1 1.08 0.12 s0.76 0.04 1.16 0.06 s0.78 0.04 1.12 0.04 c0.94 0 1.6 -0.06 2 -0.16 c0.38 -0.1 0.58 -0.28 0.58 -0.56 c0 -0.24 -0.18 -0.42 -0.36 -0.56 c-0.66 -0.44 -1.44 -0.62 -2.22 -0.8 c-2.2 -0.44 -4.22 -1.32 -4.22 -3.84 c0 -2.98 2.82 -3.68 5.24 -3.68 c1.34 0 2.7 0.14 4 0.46 l0 2.82 c-0.2 -0.06 -0.46 -0.1 -0.78 -0.16 c-0.34 -0.04 -0.68 -0.08 -1.06 -0.12 c-0.78 -0.08 -1.52 -0.12 -2.3 -0.12 c-0.44 0 -1.36 0 -1.78 0.16 c-0.28 0.1 -0.46 0.22 -0.46 0.54 c0 0.16 0.04 0.3 0.12 0.42 c0.08 0.14 0.22 0.24 0.4 0.34 c0.54 0.3 1.24 0.48 1.84 0.62 c0.5 0.12 1 0.26 1.52 0.4 c1.76 0.48 2.92 1.46 2.92 3.34 c0 3.1 -3.08 3.76 -5.56 3.76 c-1.36 0 -2.78 -0.1 -4.12 -0.42 z"></path>
                  </g>
                </svg>
              </div>
              <div
                style={{
                  fontFamily: "Dosis",
                  fontWeight: 300,
                  fontSize: "20px",
                }}
                className={`transition-transform transform ${
                  isActive ? "translate-x-0" : "translate-x-64"
                } pt-3 hidden md:block `}
              ></div>
              <div
                onClick={side}
                className={`md:hidden pr-3 text-lg pt-2 transition-transform transform ${
                  isActive ? "translate-x-0" : "-translate-x-96"
                }`}
              >
                <CiMenuFries />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`border bg-white z-10 transition-transform transform  h-screen w-full md:hidden  absolute top-0 right-0 ${
          toogle ? "translate-x-0" : "-translate-x-96"
        }`}
      >
        <div className="flex justify-between  ">
          <div className="p-3">
            <svg
              width="70"
              height="40"
              viewBox="0 0 200 124.85486590026754"
              className="looka-1j8o68f"
            >
              <defs id="SvgjsDefs1151"></defs>
              <g
                id="SvgjsG1152"
                featurekey="X3o6dM-0"
                transform="matrix(6.829667095935116,0,0,6.829667095935116,-1.0927385693272018,-53.81778401084018)"
                fill="#000000"
              >
                <path d="M14.64 21.4 q0.24 0.04 0.54 0.13 t0.57 0.24 t0.46 0.36 t0.19 0.49 q0 0.26 -0.19 0.38 t-0.46 0.17 t-0.57 0.04 t-0.52 -0.01 l-5.36 0 t-3.64 0.01 t-2.25 0.01 t-1.22 0.01 t-0.53 0.01 l-0.18 0 q-0.5 0 -0.91 -0.14 t-0.41 -0.44 q0 -0.26 0.2 -0.39 t0.51 -0.19 t0.67 -0.06 l0.66 0 q0.98 0 1.92 -0.06 t1.9 -0.16 q-0.16 -1.04 -0.22 -2.5 t-0.06 -2.99 t0.03 -2.96 t0.07 -2.41 q0 -0.62 0.03 -1.17 t0.09 -0.97 t0.16 -0.67 t0.26 -0.25 q0.32 0 0.55 0.2 t0.39 0.5 t0.23 0.64 t0.05 0.6 q-0.06 1.92 -0.11 3.37 t-0.1 2.53 t-0.08 1.83 t-0.03 1.23 q-0.02 0.3 -0.06 0.68 t-0.1 0.78 t-0.14 0.79 t-0.2 0.69 q0.92 -0.08 1.87 -0.18 t1.93 -0.17 t1.99 -0.07 t2.07 0.1 z M13.799999999999999 14.54 q0.28 0.06 0.49 0.26 t0.35 0.44 q0.16 -0.18 0.4 -0.2 t0.46 0.07 t0.36 0.28 t0.1 0.45 q-0.08 0.36 -0.15 0.9 t-0.09 1.04 t0.03 0.86 t0.21 0.36 q0.12 0 0.29 -0.31 t0.34 -0.73 t0.31 -0.84 t0.18 -0.64 q0.06 -0.2 0.2 -0.27 t0.27 -0.04 t0.22 0.15 t0.03 0.3 q-0.04 0.12 -0.13 0.45 t-0.23 0.73 t-0.33 0.83 t-0.44 0.76 t-0.56 0.51 t-0.67 0.08 q-0.58 -0.16 -0.84 -0.7 q-0.16 0.48 -0.44 0.87 t-0.72 0.57 q-0.42 0.14 -0.74 0.06 q-0.58 -0.16 -0.92 -0.72 t-0.46 -1.3 t-0.02 -1.54 t0.41 -1.44 t0.83 -1.01 t1.26 -0.23 z M14.32 16.56 q-0.04 -0.34 -0.15 -0.66 t-0.33 -0.36 q-0.32 -0.06 -0.57 0.23 t-0.41 0.77 t-0.23 1.05 t-0.04 1.08 t0.16 0.87 t0.39 0.4 t0.49 -0.28 t0.4 -0.82 t0.26 -1.11 t0.03 -1.17 z M20.479999999999997 11.38 q0 -0.48 0.26 -0.67 t0.56 -0.17 t0.53 0.22 t0.17 0.52 q-0.04 0.24 -0.12 0.91 t-0.17 1.55 t-0.15 1.82 t-0.06 1.74 t0.07 1.31 t0.27 0.51 q0.18 0 0.37 -0.34 t0.37 -0.79 t0.31 -0.88 t0.17 -0.63 q0.06 -0.2 0.19 -0.27 t0.26 -0.04 t0.22 0.15 t0.05 0.32 t-0.18 0.78 t-0.42 1.19 t-0.73 1.09 t-1.07 0.48 q-0.46 0 -0.71 -0.37 t-0.39 -0.97 q-0.16 0.38 -0.43 0.68 t-0.67 0.44 q-0.44 0.16 -0.76 0.04 q-0.58 -0.14 -0.92 -0.63 t-0.47 -1.14 t-0.03 -1.35 t0.41 -1.26 t0.83 -0.87 t1.26 -0.19 q0.4 0.06 0.7 0.42 q0.08 -1.14 0.18 -2.12 t0.1 -1.48 z M20.02 16.32 q-0.04 -0.28 -0.15 -0.56 t-0.33 -0.32 q-0.32 -0.06 -0.57 0.2 t-0.41 0.67 t-0.23 0.91 t-0.04 0.95 t0.17 0.76 t0.4 0.35 t0.49 -0.24 t0.4 -0.72 t0.25 -0.98 t0.02 -1.02 z M25.419999999999998 14.54 q0.28 0.06 0.49 0.26 t0.35 0.44 q0.16 -0.18 0.4 -0.2 t0.46 0.07 t0.36 0.28 t0.1 0.45 q-0.08 0.36 -0.15 0.9 t-0.09 1.04 t0.03 0.86 t0.21 0.36 q0.12 0 0.29 -0.31 t0.34 -0.73 t0.31 -0.84 t0.18 -0.64 q0.06 -0.2 0.2 -0.27 t0.27 -0.04 t0.22 0.15 t0.03 0.3 q-0.04 0.12 -0.13 0.45 t-0.23 0.73 t-0.33 0.83 t-0.44 0.76 t-0.56 0.51 t-0.67 0.08 q-0.58 -0.16 -0.84 -0.7 q-0.16 0.48 -0.44 0.87 t-0.72 0.57 q-0.42 0.14 -0.74 0.06 q-0.58 -0.16 -0.92 -0.72 t-0.46 -1.3 t-0.02 -1.54 t0.41 -1.44 t0.83 -1.01 t1.26 -0.23 z M25.939999999999998 16.56 q-0.04 -0.34 -0.15 -0.66 t-0.33 -0.36 q-0.32 -0.06 -0.57 0.23 t-0.41 0.77 t-0.23 1.05 t-0.04 1.08 t0.16 0.87 t0.39 0.4 t0.49 -0.28 t0.4 -0.82 t0.26 -1.11 t0.03 -1.17 z"></path>
              </g>
              <g
                id="SvgjsG1153"
                featurekey="RFbU7s-0"
                transform="matrix(0.7909202748295893,0,0,0.7909202748295893,19.699450511477508,108.9415493069295)"
                fill="#000000"
              >
                <path d="M3.66 7.76 l3 0 l0 7.24 c0 3.14 -2.44 5.1 -5.4 5.1 c-0.22 0 -0.4 0 -0.5 -0.02 s-0.24 -0.06 -0.38 -0.08 l0 -2.78 c0.26 0.06 0.54 0.1 0.8 0.1 c1.54 0 2.48 -0.72 2.48 -2.32 l0 -7.24 z M21.532000000000004 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 1.94 l6.1 0 l0 2.78 l-9.1 0 l0 -12.24 z M57.844 7.76 l2.92 0 l-2.26 12.24 l-4.44 0 l-1.6 -7.14 l-1.7 7.14 l-4.68 0 l-1.98 -12.24 l3.06 0 l1.38 9.16 l1.8 -7.14 l4.26 0 l1.72 7.14 z M74.816 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 1.94 l6.1 0 l0 2.78 l-9.1 0 l0 -12.24 z M107.468 17.22 l0 2.78 l-9.1 0 l0 -12.24 l3 0 l0 9.46 l6.1 0 z M130.84 17.22 l0 2.78 l-9.1 0 l0 -12.24 l3 0 l0 9.46 l6.1 0 z M145.112 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 1.94 l6.1 0 l0 2.78 l-9.1 0 l0 -12.24 z M171.664 10.58 l0 2.92 l2.8 0 c0.92 0 1.46 -0.54 1.46 -1.46 s-0.54 -1.46 -1.46 -1.46 l-2.8 0 z M176.204 15.48 c0.56 0.76 1.12 1.52 1.7 2.26 c0.56 0.74 1.12 1.5 1.68 2.26 l-3.66 0 c-0.72 -0.96 -1.42 -1.92 -2.12 -2.88 c-0.7 -0.94 -1.42 -1.9 -2.14 -2.86 l0 5.74 l-3 0 l0 -12.24 l5.8 0 c2.28 0 4.22 1.74 4.22 4.04 c0 1.62 -1 3.04 -2.48 3.68 z M192.996 19.7 l0 -2.82 c0.24 0.06 0.54 0.12 0.88 0.16 c0.34 0.06 0.7 0.1 1.08 0.12 s0.76 0.04 1.16 0.06 s0.78 0.04 1.12 0.04 c0.94 0 1.6 -0.06 2 -0.16 c0.38 -0.1 0.58 -0.28 0.58 -0.56 c0 -0.24 -0.18 -0.42 -0.36 -0.56 c-0.66 -0.44 -1.44 -0.62 -2.22 -0.8 c-2.2 -0.44 -4.22 -1.32 -4.22 -3.84 c0 -2.98 2.82 -3.68 5.24 -3.68 c1.34 0 2.7 0.14 4 0.46 l0 2.82 c-0.2 -0.06 -0.46 -0.1 -0.78 -0.16 c-0.34 -0.04 -0.68 -0.08 -1.06 -0.12 c-0.78 -0.08 -1.52 -0.12 -2.3 -0.12 c-0.44 0 -1.36 0 -1.78 0.16 c-0.28 0.1 -0.46 0.22 -0.46 0.54 c0 0.16 0.04 0.3 0.12 0.42 c0.08 0.14 0.22 0.24 0.4 0.34 c0.54 0.3 1.24 0.48 1.84 0.62 c0.5 0.12 1 0.26 1.52 0.4 c1.76 0.48 2.92 1.46 2.92 3.34 c0 3.1 -3.08 3.76 -5.56 3.76 c-1.36 0 -2.78 -0.1 -4.12 -0.42 z"></path>
              </g>
            </svg>
          </div>
          <div onClick={close} className="text-xl p-3">
            <IoCloseOutline />
          </div>
        </div>
        <div
          style={{ fontFamily: "Dosis", fontWeight: 300, fontSize: "20px" }}
          className="flex space-y-4 flex-col justify-center items-center"
        >
          <Link onClick={close} href="/">
            <button className="text-slate-500 hover:text-black">Home</button>
          </Link>{" "}
          <Link onClick={close} href="/shop">
            <button className="text-slate-500 hover:text-black">Shop</button>
          </Link>
          <Link onClick={close} href="/contact">
            <button className="text-slate-500 hover:text-black">
              Contact-us
            </button>
          </Link>
          <Link onClick={close} href="/about">
            <button className="text-slate-500 hover:text-black">About</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navs;
