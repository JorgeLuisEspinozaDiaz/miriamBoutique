import { useGeneralStore } from '@/store'
import React from 'react'

const LineEng = () => {
   const { generals, multilanguage } = useGeneralStore()
   return (
      <div className="LineEng">
         <div className="LineEng-icon">
            <i className="icon-telll"></i>
         </div>
         <div className="LineEngtext">ENG: {generals.cell_phone}</div>
      </div>
   )
}

export default LineEng
