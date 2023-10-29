import { useGeneralStore } from '@/store'
import React from 'react'

const ButtonSend = () => {
   const { generals, multilanguage } = useGeneralStore()
   return (
      <button className="ButtonSend-btn">
         <span className="ButtonSend-span">{multilanguage.lbl_send}</span>
      </button>
   )
}

export default ButtonSend
