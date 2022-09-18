import { useContext, useState } from 'react'
import DataContext from "../Context/DataContext"

function EarningRate() {

    
    const { earningRate, setEarningRate } = useContext(DataContext)

    return (
        <div className='flex flex-col '>
            <h1 className='font-semibold'>Kâr Oranı</h1>
            <input type="number" onChange={(e) => { setEarningRate(e.target.value) }} placeholder='Kâr oranı' className='border  rounded-md h-10 p-2  w-28 sm:w-56 my-1 sm:mt-2 focus:outline-none' />
        </div>
    )
}

export default EarningRate