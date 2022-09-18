import React from 'react'
import Select from 'react-select'
import { useContext } from 'react'
import DataContext from '../Context/DataContext'

function EarningType() {
    const { earningType, setEarningType } = useContext(DataContext)

    // this function chooses earning type
    const handleEarningType = (selectOption) => {
        if (selectOption.value === "Basit") {
            setEarningType("Basit")

        } else {
            setEarningType("Bilesik")
        }

        console.log(selectOption)
    }

    const options = [
        { value: 'Basit', label: 'Basit' },
        { value: 'Bileşik', label: 'Bileşik' }
    ]
    
    return (
        <>
            <div className='flex flex-col '>
                <h1 className='font-semibold'>Faiz Türü</h1>
                <div className='my-1 sm:mt-2'>
                    <Select onChange={handleEarningType} options={options} />
                </div>
            </div>
        </>
    )
}

export default EarningType