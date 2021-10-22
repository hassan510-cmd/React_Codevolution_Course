import React from 'react'
import Columns from './Columns'

export default function Table() {
    return (
     <table style={{border:'1px'}}>
         <tbody>
             <tr>
                 <Columns/>
             </tr>
         </tbody>
     </table>
    )
}
