import { createContext, useState } from "react";

const DataContext = createContext()

export const DataProvider = ({children})=>{


    //Ana_Para
    const [getAnaPara, setgetAnaPara] = useState(null)

    //Kar_Oranı
    const [karOranı, setKarOranı] = useState(null)

    //Vade_Sayısı
    const [vadeSayisi, setVadeSayisi] = useState(null)

    //Vergi_Oranı
    const [bsmv, setBsmv] = useState(null)
    const [kkdf, setKkdf] = useState(null)

    //Ödeme_Aralığı
    const [odemeAraligi, setOdemeAraligi] = useState(null)

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
        odemeAraligi, setOdemeAraligi
        

    }

    return <DataContext.Provider value={values}  >{children}</DataContext.Provider>


}


export default DataContext;