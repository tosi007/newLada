import React from 'react'

const Footer = () => {
  return (


<footer className="bg-black rounded-lg shadow dark:bg-gray-900 m-4">
<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
      <h1  style={{ fontFamily: 'Alice', fontWeight: 400, fontSize: '45px' }} className='text-4xl text-white'>Lada Jewelers</h1>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#"  style={{ fontFamily: 'Alice', fontWeight: 400, fontSize: '18px' }} className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#"  style={{ fontFamily: 'Alice', fontWeight: 400, fontSize: '18px' }} className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#"  style={{ fontFamily: 'Alice', fontWeight: 400, fontSize: '18px' }} className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#"  style={{ fontFamily: 'Alice', fontWeight: 400, fontSize: '18px' }} className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Lada Jewelers™</a>. Dev by Tosi.</span>
    </div>
</footer>


  )
}

export default Footer