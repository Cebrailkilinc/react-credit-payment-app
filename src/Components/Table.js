import { useContext, useState } from 'react'
import DataContext from "../Context/DataContext"


function Table() {

    const { tableData, setTableData } = useContext(DataContext)

    return (
        <div className="overflow-x-auto relative mt-20 ">

            <table className="w-full text-sm text-left text-gray-400 dark:text-white">
                {  tableData.length > 0 ?
                     <thead  className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-500 dark:text-white">
                         <tr>
                             <th scope="col" className="py-3 px-6">
                                 Taksit No
                             </th>
                             <th scope="col" className="py-3 px-6">
                                 Taksit Tutarı
                             </th>
                             <th scope="col" className="py-3 px-6">
                                 Anapara
                             </th>
                             <th scope="col" className="py-3 px-6">
                                 Kalan Anapara
                             </th>
                             <th scope="col" className="py-3 px-6">
                                 Kar Tutarı
                             </th>
                             <th scope="col" className="py-3 px-6">
                                 KKDF
                             </th>
                             <th scope="col" className="py-3 px-6">
                                 bsmv
                             </th>
                         </tr>
                     </thead>  : null
                }
                <tbody>

                    {
                        tableData.map((item, i) => {
                            return (
                                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 justify-center">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.taksitNo}
                                    </th>
                                    <td className="py-4 px-6">
                                        {item.aylikTaksit.toFixed(2)}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.aylikAnaPara.toFixed(2)}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.anaPara.toFixed(2)}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.karTutari.toFixed(2)}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.kkdfTutari.toFixed(2)}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.bsmvTutari.toFixed(2)}
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Table