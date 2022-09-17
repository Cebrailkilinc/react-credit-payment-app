import { createContext, useState } from "react";

const CalculateContext = createContext()

export const CalculateProvider = ({children})=>{
    const [tableData, setTableData] = useState([])


    const values = {
      tableData, setTableData
       
    }
    return <CalculateContext.Provider value={values}  >{children}</CalculateContext.Provider>


}


export default CalculateContext; 