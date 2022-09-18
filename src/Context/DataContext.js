import { createContext, useState } from "react";

const DataContext = createContext()

export const DataProvider = ({children})=>{


    //Ana_Para
    const [getPrincipal, setgetPrincipal] = useState("")

    //Kar_Oranı
    const [earningRate, setEarningRate] = useState("")

    //Vade_Sayısı
    const [numberOfMaturity, setNumberOfMaturity] = useState("")

    //Vergi_Oranı
    const [bsmv, setBsmv] = useState("")
    const [kkdf, setKkdf] = useState("")

    //Ödeme_Aralığı
    const [paymentRange, setPaymentRange] = useState("")

    //Earning type
    const [earningType, setEarningType] = useState("")

   

    const values = {
        setgetPrincipal,
        getPrincipal,
        earningRate, 
        setEarningRate,
        numberOfMaturity, 
        setNumberOfMaturity,
        bsmv, 
        setBsmv,
        kkdf, 
        setKkdf,      
        paymentRange,
        setPaymentRange,
        earningType, 
        setEarningType       

    }

    return <DataContext.Provider value={values}  >{children}</DataContext.Provider>


}


export default DataContext;