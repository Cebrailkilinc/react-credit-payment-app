import React from 'react'
import { useState } from 'react'

function PaymentRange() {

    const [dropDownDisplay, setDropDownDisplay] = useState("hidden")

    //Dropdown_Controll_State
    const handleDropDownDisplay = () => {
        if (dropDownDisplay == "hidden") {
            setDropDownDisplay("")
        }else{
            setDropDownDisplay("hidden")
        }
    }

    return (
        <>
            <div>
                <input onClick={handleDropDownDisplay} type="text" placeholder='Ödeme aralığı' className='border h-12 p-2  w-28   focus:outline-none lg:ml-4 mt-6 ' />
                <ul className={`top-[400px] left-[43px] sm:left-[360px] absolute bg-slate-100  ${dropDownDisplay}`}>
                    <li  className='cursor-pointer hover:bg-slate-200 px-6 py-1' >deneme</li>
                    <li  className='cursor-pointer hover:bg-slate-200 px-6 py-1'>deneme</li>
                    <li  className='cursor-pointer hover:bg-slate-200 px-6 py-1'>deneme</li>
                </ul>            
            </div>

        </>
    )
}

export default PaymentRange