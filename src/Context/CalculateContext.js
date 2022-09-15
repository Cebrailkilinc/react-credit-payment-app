import { createContext, useState } from "react";

const CalculateContext = createContext()

export const CalculateProvider = ({children})=>{
    
    //Installment_Amount
    const [installmentAmount, setInstallmentAmount] = useState("")

    //calculated profit rate
    const [calculatedProfitRate, setCalculatedProfitRate ] = useState("")

    //remaining principal
    const [remainingPrincipal, setRemainingPrincipal] = useState("")

    const values = {
        installmentAmount,
        setInstallmentAmount,
        calculatedProfitRate, 
        setCalculatedProfitRate,
        remainingPrincipal, 
        setRemainingPrincipal,    
       
    }
    return <CalculateContext.Provider value={values}  >{children}</CalculateContext.Provider>


}


export default CalculateContext; 