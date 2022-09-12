import React from 'react'

function EarningRate() {
    return (
        <div className='flex flex-col '>
            <h1 className='font-semibold'>Kâr Oranı</h1>
            <input type="number" placeholder='Kâr oranı' className='border h-12 p-2  w-28 sm:w-56   my-2 sm:my-5 focus:outline-none' />           
        </div>
    )
}

export default EarningRate