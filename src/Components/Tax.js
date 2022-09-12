import React from 'react'

function Tax() {
    return (
        <div className=' flex flex-col lg:mr-36 '>
            <h1 className='font-semibold'>Vergi</h1>
            <div className='flex items-center flex-col sm:flex-row '>
                <input type="number" placeholder='Bsmv' className='border h-12 p-2  w-28   my-2 sm:my-5 focus:outline-none ' />
                <input type="number" placeholder='Kkdf' className='border h-12 p-2  w-28   focus:outline-none lg:ml-4 ' />
            </div>
        </div>
    )
}

export default Tax