import { useContext, useState, useRef } from 'react'
import Select from 'react-select'

//Context
import DataContext from "../Context/DataContext"

function PaymentRange() {
    const {odemeAraligi, setOdemeAraligi } = useContext(DataContext)

    const options = [
        { value: 'haftalık', label: 'haftalık' },
        { value: 'aylık', label: 'aylık' },
        { value: 'yıllık', label: 'yıllık' }
    ]

    const handleChange =(selectOption)=>{
        if (selectOption.value == "aylık") {
            setOdemeAraligi(30)
            
        } else if (selectOption.value == "yıllık") {
            setOdemeAraligi(365)
        }else{
            setOdemeAraligi(7)
        }     
     
    } 

    return (
        <>
            <div className='flex flex-col '>
                <h1 className='font-semibold'>Ödeme Aralığı</h1>
                <div className='my-1 sm:mt-1'>
                    <Select options={options}  onChange={handleChange}/>
                </div>
            </div>
        </>
    )
}

export default PaymentRange