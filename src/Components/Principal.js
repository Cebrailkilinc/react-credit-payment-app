import {useContext} from 'react'

//Context
import DataContext from "../Context/DataContext"


function Principal() {
    const { getAnaPara, setgetAnaPara } = useContext(DataContext)    

    return (
        <div className='mt-10 sm:mt-16 flex flex-col '>
            <h1 className='font-semibold'>Ana Para</h1>
            <input type="number" value={getAnaPara} onChange={(e)=>{setgetAnaPara(e.target.value)}}  placeholder='Kredi Miktarı' className='border h-12 p-2  w-28 sm:w-56   my-2 sm:my-5 focus:outline-none'/>           
            <input type="range" onChange={(e)=>setgetAnaPara( Number(getAnaPara*2) )} className='w-80 sm:w-96 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer '/>         
        </div>
    )
}

export default Principal