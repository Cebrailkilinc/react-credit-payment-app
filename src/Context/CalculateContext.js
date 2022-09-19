import { createContext, useState } from "react";

const CalculateContext = createContext()

export const CalculateProvider = ({children})=>{
    const [dataOfTable, setDataOfTable] = useState([])

    const values = {
      dataOfTable, setDataOfTable
       
    }
    
    return <CalculateContext.Provider value={values}  >{children}</CalculateContext.Provider>


}


export default CalculateContext; 