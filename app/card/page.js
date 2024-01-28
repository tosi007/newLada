import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
   

<div className="max-w-sm mx-2 bg-black border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <Image className="rounded-t-lg text-center  object-cover" width={1800} height={10}  objectFit='cover' src="/da.jpg" alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Eternal Embrace</h5>
        </a>
        <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">Infinite love captured in a timeless, intertwined pendant. Radiant romance</p>
        <h5 className="mb-2 text-lg font-bold tracking-tight text-white dark:text-white">PKR 50,000</h5>
        <Link href="/product" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            View Product
            
        </Link>
    </div>
</div>


  )
}

export default Card