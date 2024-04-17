"use client"
import React, { useState } from 'react';

import { toast } from 'react-toastify';
const AccessCodeDialog = ({ onAccessGranted }) => {
    const [accessCode, setAccessCode] = useState('');
    const [error, setError] = useState('');
  
    const handleAccessCodeChange = (event) => {
      setAccessCode(event.target.value);
    };
  
    const handleAccessSubmit = () => {
      if (accessCode === '5665') {
        // Access granted
        onAccessGranted();
      } else {
        // Access denied, show error message
        setError('Incorrect access code');
      }
    };
  
    return (
      <div>
        <h2 className='text-white'>Enter Access Code</h2>
        <input type="text" value={accessCode} onChange={handleAccessCodeChange} />
        <button className='text-white' onClick={handleAccessSubmit}>Submit</button>
        {error && <p>{error}</p>}
      </div>
    );
  };
const ProtectedPage = () => {
    const [showDialog, setShowDialog] = useState(true);
    const [accessGranted, setAccessGranted] = useState(false);
  
    const handleAccessGranted = () => {
      setAccessGranted(true);
      setShowDialog(false);
    };
    const [newPrices, setNewPrices] = useState({
        gprice: null,
        grange: null,
        sprice: null,
        srange: null,
        dprice: null,
        drange: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPrices(prevState => ({
            ...prevState,
            [name]: value || null // Convert empty string to null
        }));
    };

    const handleUpdatePrices = async () => {
        try {
            // Filter out null values from newPrices object
            const filteredPrices = Object.fromEntries(
                Object.entries(newPrices).filter(([key, value]) => value !== null)
            );
    
            // Construct the request body
            const requestBody = JSON.stringify(filteredPrices);
    
            // Send a PUT request to update prices using fetch
            const response = await fetch('https://apis-rouge.vercel.app/api/price/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: requestBody
            });
    
            if (response.ok) {
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
                  window.location.reload()
            } else {
                const errorMessage = await response.text();
                throw new Error(`Failed to update prices: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error updating prices:', error);
        }
    };

    return (
        <div>
        {showDialog && <AccessCodeDialog onAccessGranted={handleAccessGranted} />}
        {accessGranted && <div className=' flex flex-col space-y-5 p-5 w-auto sm:w-[50%]'>
<h1 className='text-white text-3xl'></h1>
            <input type="number" className='py-3 rounded-lg' name="gprice" value={newPrices.gprice || ''} onChange={handleChange} placeholder="G Price" />
            <input type="text" className='py-3 rounded-lg' name="grange" value={newPrices.grange || ''} onChange={handleChange} placeholder="G Range" />
            <input type="number" className='py-3 rounded-lg' name="sprice" value={newPrices.sprice || ''} onChange={handleChange} placeholder="S Price" />
            <input type="text" className='py-3 rounded-lg' name="srange" value={newPrices.srange || ''} onChange={handleChange} placeholder="S Range" />
            <input type="number" className='py-3 rounded-lg' name="dprice" value={newPrices.dprice || ''} onChange={handleChange} placeholder="D Price" />
            <input type="text" className='py-3 rounded-lg' name="drange" value={newPrices.drange || ''} onChange={handleChange} placeholder="D Range" />

            <button 
className='bg-green-500 text-white rounded-md font-bold w-auto sm:w-[50%] p-3' onClick={handleUpdatePrices}>Update </button>
        </div>}
      </div>

    );
};

export default ProtectedPage;



