import { useContext, useState } from 'react'

//Context
import DataContext from "../Context/DataContext"

function EarningRate() {
    const {karOranı, setKarOranı } = useContext(DataContext) 
 
    return (
        <div className='flex flex-col '>
            <h1 className='font-semibold'>Kâr Oranı</h1>
            <input type="number" onChange={(e)=>{setKarOranı(e.target.value)}}  placeholder='Kâr oranı' className='border h-10 p-2  w-28 sm:w-56   my-2 sm:my-5 focus:outline-none' />
        </div>
    )
}

export default EarningRate