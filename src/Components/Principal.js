import React, { useState } from 'react';


function Principal() {

    return (
        <div className='mt-10 sm:mt-16 flex flex-col '>
            <h1 className='font-semibold'>Ana Para</h1>
            <input type="number" placeholder='Kredi Miktarı' className='border h-12 p-2  w-28 sm:w-56   my-2 sm:my-5 focus:outline-none'/>           
            <input type="range" className='w-80 sm:w-96 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer '/>         
        </div>
    )
}

export default Principal