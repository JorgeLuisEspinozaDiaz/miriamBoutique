import { useGeneralStore } from '@/store'
import React from 'react'

const LineSpan = () => {
   const { generals, multilanguage } = useGeneralStore()
   return (
      <div className="LineSpan">
         <div className="LineSpan-icon">
            <i className="icon-telll"></i>
         </div>
         <div className="LineSpantext">SPA: {generals.phone}</div>
      </div>
   )
}

export default LineSpan
