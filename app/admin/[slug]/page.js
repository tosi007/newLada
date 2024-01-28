"use client"
import { AiOutlineLogout } from "react-icons/ai";
import Navbar from '@/app/Navbar/page';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
const Slug = () => {
    const postDetails=async()=>{
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","Lada_shop")
        data.append('cloud_name',"djjcs8pla")
       await fetch("https://api.cloudinary.com/v1_1/djjcs8pla/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
          setUrl(data.url)
           toast.success('Image Uploaded', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

        })
        .catch(err=>{
            console.log(err)
        })
      }

      const postDetails2=async()=>{
        const data = new FormData()
        data.append("file",image2)
        data.append("upload_preset","Lada_shop")
        data.append('cloud_name',"djjcs8pla")
       await fetch("https://api.cloudinary.com/v1_1/djjcs8pla/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
          setUrl2(data.url)
           toast.success('Image Uploaded', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

        })
        .catch(err=>{
            console.log(err)
        })
      }


      const postDetails3=async()=>{
        const data = new FormData()
        data.append("file",image3)
        data.append("upload_preset","Lada_shop")
        data.append('cloud_name',"djjcs8pla")
       await fetch("https://api.cloudinary.com/v1_1/djjcs8pla/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
          setUrl3(data.url)
           toast.success('Image Uploaded', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

        })
        .catch(err=>{
            console.log(err)
        })
      }

 const router = useRouter()
 const logout = () => {
    localStorage.removeItem('token');
    console.log(localStorage.getItem('token'));
    toast.success('Logout successful', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    window.location.reload()
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    getdata()
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }else{
        router.push("/")
    }
  }, []);
          

  const [productName, setProductName] = useState('');
  const [image, setImage] = useState('');
  const [image3, setImage3] = useState('');
  const [image2, setImage2] = useState('');
  const [url, setUrl] = useState("")
  const [url2, setUrl2] = useState("")
  const [url3, setUrl3] = useState("")
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [selectedState, setSelectedState] = useState(''); // Assuming 'State' is a dropdown

  // Event handlers to update state on input change
  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();

    // Use the form values as needed, for example, send them to an API, etc.
    console.log('Product Name:', productName);
    console.log('Description:', description);
    console.log('Price:', price);
    console.log('Selected State:', selectedState);

    const res = await fetch("http://localhost:5000/api/product/addproduct", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name:productName, Description:description, Price:price, Category:selectedState, Pic:url , Pic2:url2 , Pic3:url3}),
   });
   const json = await res.json();
   console.log(json);
   
   toast.success('Added successful', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  window.location.href = "/admin/portal" 
  };
const [data, setData] = useState("")

const getdata = async()=>{
    const res = await fetch("http://localhost:5000/api/product/get",
    {
      "method": "GET",
    
    })
    const json =await res.json()
    console.log(json)
    setData(json)
    
  }



  const onDelete = async (id) => {
    const shouldDelete = window.confirm('Are you sure you want to delete?');
    if (shouldDelete) {
    try {
      let res = await fetch(`http://localhost:5000/api/product/delete/${id}`, {
        method: "DELETE",
      });
      window.location.reload();
      // Handle the response or perform any other actions
      console.log('Deleted successfully');
    } catch (error) {
      console.error('Error deleting item:', error);
    }


} else {
    console.log('Cancelled deletion.');
  }


};



  return (
<>
{!isLoggedIn ? (
          <></>
        ) : (<>
         <button onClick={logout} className=" text-white text-4xl absolute top-6 right-0 " ><AiOutlineLogout /></button>
           <div className="justify-between bg-black flex">
        <div className="w-2/4 h-[0.1rem] mt-5 rounded-lg bg-[#D7D7DD]"></div>
        <div className="mt-2 text-center">
          <Image className="ml-9" src="/logo.png" alt="logo" width={30} height={30} />
          <div className="flex space-x-1 flex-row">
            <div style={{ fontFamily: 'Alice', fontWeight: 400 }} className="text-white ml-2">
              LADA
            </div>{' '}
            <div
              className="text-sm text-white mt-[0.15rem]"
              style={{ fontFamily: 'Alice', fontWeight: 400, fontSize: '12px' }}
            >
              {' '}
              Jewelers
            </div>{' '}
          </div>
        </div>
        <div className="w-2/4 h-[0.1rem] mt-5 rounded-lg bg-[#D7D7DD]"></div>
      </div>



   <div className="flex flex-col">
 <h1  style={{ fontFamily: 'Alice', fontWeight: 400, fontSize: '30px' }} className='text-white text-center mt-2'>Add Your Product</h1>
       <div className="w-full md:w-1/5 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
         Upload Image
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
           
            type="File"
            
            onChange={(e)=>{setImage(e.target.files[0])}}
          />
<button className="text-white border border-white my-5 w-20 rounded-lg" onClick={()=>postDetails()}>upload</button>
        </div>


        <div className="w-full md:w-1/5 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
         Upload Second Image
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
           
            type="File"
            
            onChange={(e)=>{setImage2(e.target.files[0])}}
          />
<button className="text-white border border-white my-5 w-20 rounded-lg" onClick={()=>postDetails2()}>upload</button>
        </div>

        <div className="w-full md:w-1/5 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
         Upload third Image
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
           
            type="File"
            
            onChange={(e)=>{setImage3(e.target.files[0])}}
          />
<button className="text-white border border-white my-5 w-20 rounded-lg" onClick={()=>postDetails3()}>upload</button>
        </div>

<form className="w-full ml-3 max-w-lg" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Product-name">
            Product Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-Product-name"
            type="text"
            placeholder="Indian style earnings"
            value={productName}
            onChange={handleProductNameChange}
          />
          <p className="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Description">
            Description
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-Description"
            type="text"
            placeholder="e.g 24 Karat"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-price">
            Price
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-price"
            type="number"
            placeholder="PKR 50,000"
            value={price}
            onChange={handlePriceChange}
          />
          <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you like</p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
            Category
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              value={selectedState}
              onChange={handleStateChange}
            >
                <option value="">select</option>
              <option value="Earring">Earring</option>
              <option value="Necklace">Necklace</option>
              <option value="Bracelet">Bracelet</option>
              <option value="Cufflink">Cufflink</option>
              <option value="Bridal jewelry">Bridal jewelry</option>
              <option value="Rings">Rings </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
     
      {/* Submit button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
    
    
 </div>
 



<h1 className="text-white text-4xl font-bold text-center mt-4">Your Published Data</h1>





<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                    Product Image
                </th>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
       
        {data && data.map((item)=>(          <tr key={item._id} 
           className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 <Image src={item.Pic} alt="image" width={50} height={50}/>
                </th>
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
                </td>
                <td className="px-6 w-32 text-ellipsis overflow-hidden ... py-4">
                    {item.Description}
                </td>
                <td className="px-6 py-4">
                    {item.Category}
                </td>
                <td className="px-6 py-4">
                    {item.Price}
                </td>
                <td className="px-6 py-4">
                    <Link href={`/admin/portal/${item._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                    
                </td>
                <button onClick={() => onDelete(item._id)} className=" text-black mt-6 text-3xl"><MdDelete /></button>
            </tr>))}
           
        </tbody>
    </table>
</div>










         </>
        )}

</>
  )
}

export default Slug