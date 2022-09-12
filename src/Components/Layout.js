import React from 'react'
import EarningRate from './EarningRate'
import Header from './Header'
import Installment from './Installment '
import PaymentRange from './PaymentRange'
import Principal from './Principal'
import Tax from './Tax'



function Layout() {
  return (
    <div>
      <div className='max-w-5xl mx-auto max-h-full my-auto' >
        <div >
          <Header />
        </div>
        <div className='flex flex-col sm:flex-row justify-between items-center'>
          <Principal />
          <Installment />
        </div>
        <div className='flex  justify-around sm:justify-between mt-14'>
          <div className='sm:flex items-center gap-x-2'>
            <div><EarningRate /></div>
            <div><PaymentRange /></div>
          </div>
          <div>
            <div><Tax/></div>
          </div>
        </div>
        <div className='flex justify-center mt-6'>
          <button className=" w-40 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Hesapla
          </button>
        </div>
      </div>

    </div>

  )
}

export default Layout