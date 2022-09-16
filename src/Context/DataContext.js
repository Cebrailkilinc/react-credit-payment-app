import { createContext, useState } from "react";

const DataContext = createContext()

export const DataProvider = ({children})=>{


    //Ana_Para
    const [getAnaPara, setgetAnaPara] = useState("")

    //Kar_Oranı
    const [karOranı, setKarOranı] = useState("")

    //Vade_Sayısı
    const [vadeSayisi, setVadeSayisi] = useState("")

    //Vergi_Oranı
    const [bsmv, setBsmv] = useState("")
    const [kkdf, setKkdf] = useState("")

    //Ödeme_Aralığı
    const [odemeAraligi, setOdemeAraligi] = useState("")

    //Earning type
    const [earningType, setEarningType] = useState("")

    const [tableData, setTableData] = useState([])

    const values = {
        setgetAnaPara,
        getAnaPara,
        karOranı,
        setKarOranı,
        vadeSayisi,
        setVadeSayisi,
        bsmv, setBsmv,
        kkdf, setKkdf,
        tableData, setTableData,
        odemeAraligi, setOdemeAraligi,earningType, setEarningType
        

    }

    return <DataContext.Provider value={values}  >{children}</DataContext.Provider>


}


export default DataContext;