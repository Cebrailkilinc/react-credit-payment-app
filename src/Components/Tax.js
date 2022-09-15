import {useContext, useState} from 'react'

//Context
import DataContext from "../Context/DataContext"

function Tax() {
    const { bsmv, setBsmv, kkdf, setKkdf} = useContext(DataContext)
      

    return (
        <div className=' flex flex-col lg:mr-36 '>
            <h1 className='font-semibold'>Vergi</h1>
            <div className='flex items-center flex-col sm:flex-row '>
                <input type="number" onChange={(e)=>{setBsmv(e.target.value)}}  placeholder='Bsmv' className='border h-10 p-1  w-28   my-2 sm:my-5 focus:outline-none ' />
                <input type="number" onChange={(e)=>{setKkdf(e.target.value)}} placeholder='Kkdf' className='border h-10 p-1  w-28   focus:outline-none lg:ml-4 ' />
            </div>
        </div>
    )
}

export default Tax