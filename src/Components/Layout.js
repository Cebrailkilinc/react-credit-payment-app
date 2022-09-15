import { useContext } from 'react'
import EarningRate from './EarningRate'
import Header from './Header'
import Installment from './Installment '
import PaymentRange from './PaymentRange'
import Principal from './Principal'
import Table from './Table'
import Tax from './Tax'

import DataContext from '../Context/DataContext'
import { useEffect } from 'react'



function Layout() {

  const {
    karOranı, setKarOranı, vadeSayisi, setVadeSayisi, setgetAnaPara,
    getAnaPara, bsmv, setBsmv, kkdf, setKkdf, tableData, setTableData,odemeAraligi, setOdemeAraligi
  } = useContext(DataContext)

  const karYuzdesi = karOranı*(odemeAraligi/30) / 100;
  const bsmvYuzdesi = bsmv / 100;
  const kkdfYuzdesi = kkdf / 100;
  const i = karYuzdesi * (1 + kkdfYuzdesi + bsmvYuzdesi)
  const aylikTaksit = (getAnaPara * ((Math.pow(1 + i, vadeSayisi) * i) / (Math.pow(1 + i, vadeSayisi) - 1)));


  const table = []
  const calculate = () => {   

    let anaPara = getAnaPara

    for (let index = 1; index < Number(vadeSayisi) + Number(1); index++) {

      let karTutari = anaPara * karYuzdesi

      let kkdfTutari = karTutari * kkdfYuzdesi;

      let bsmvTutari = karTutari * bsmvYuzdesi;

      let aylikAnaPara = aylikTaksit - (karTutari + kkdfTutari + bsmvTutari);
      anaPara -= aylikAnaPara
    
     table.push({ taksitNo: index, aylikTaksit:aylikTaksit, karTutari, aylikAnaPara: aylikAnaPara, anaPara: anaPara, karTutari: karTutari, kkdfTutari: kkdfTutari, bsmvTutari: bsmvTutari })

     
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
        <div className='flex  justify-around  sm:justify-between mt-10'>
          <div className='sm:flex items-center gap-x-2'>
            <EarningRate />
            <PaymentRange />
          </div>
          <div>
            <Tax />
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