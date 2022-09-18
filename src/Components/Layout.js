import { useContext } from 'react'
import EarningRate from './EarningRate'
import Header from './Header'
import Installment from './Installment '
import PaymentRange from './PaymentRange'
import Principal from './Principal'
import Table from './Table'
import Tax from './Tax'

import DataContext from '../Context/DataContext'
import CalculateContext from '../Context/CalculateContext'
import { useEffect } from 'react'
import EarningType from './EarningType'



function Layout() {

  const {
    earningRate, setEarningRate, numberOfMaturity, setNumberOfMaturity, setgetPrincipal,
    getPrincipal, bsmv, setBsmv, kkdf, setKkdf,paymentRange, setPaymentRange,earningType, setEarningType
  } = useContext(DataContext)
  const { tableData, setTableData} = useContext(CalculateContext)

  // Calculate some value
  const earningPercentage = earningRate*(paymentRange/30) / 100;
  const bsmvPercentage = bsmv / 100;
  const kkdfPercentage = kkdf / 100;
  const i = earningPercentage * (1 + kkdfPercentage+ bsmvPercentage)

  const montlyInstallment = (getPrincipal * ((Math.pow(1 + i, numberOfMaturity) * i) / (Math.pow(1 + i, numberOfMaturity) - 1)));

 
  
  const table = []

  const calculate = () => {   

    let principal = getPrincipal

    for (let index = 1; index < Number(numberOfMaturity) + Number(1); index++) {

      let earningAmount = principal * earningPercentage   
      console.log(earningPercentage)  
      
      if (earningType == "Bilesik") {
       earningAmount = (principal*(Math.pow((1 + earningPercentage),(numberOfMaturity)))) - principal       
      }


      let kkdfAmount = earningAmount * kkdfPercentage;

      let bsmvAmount = earningAmount * bsmvPercentage;

      let montlyPrincipal = montlyInstallment - (earningAmount + kkdfAmount + bsmvAmount);
      principal -= montlyPrincipal
    
     table.push({ installmentNo: index, montlyInstallment:montlyInstallment, earningAmount, montlyPrincipal: montlyPrincipal, principal: principal, earningAmount: earningAmount, kkdfAmount: kkdfAmount, bsmvAmount: bsmvAmount })
    }  
    setTableData(table)
   
  }

  return (
    <div>
      <div className='max-w-5xl mx-auto max-h-full my-auto ' >
        <Header />
        <div className='flex flex-col sm:flex-row justify-between items-center'>
          <Principal />
          <Installment />
        </div>
        <div className='flex  items-center justify-around  sm:justify-between mt-5 '>
          <div className='sm:flex items-center gap-x-2'>
            <EarningRate />
            <EarningType/>                

          </div>
          <div className='sm:flex items-center justify-around'>
            <Tax />
            <PaymentRange />
          </div>
        </div>
        <div className='flex justify-center mt-6'>
          <button onClick={calculate} className=" w-40 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Hesapla
          </button>
        </div>     
        <div>
          <Table/>
        </div>    
       </div>
    </div>

  )
}

export default Layout