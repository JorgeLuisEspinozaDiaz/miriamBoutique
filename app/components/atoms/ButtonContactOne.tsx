import { useGeneralStore } from '@/store'
import Link from 'next/link'
import React from 'react'

interface ButtonContactOneProps {
   href: string
}
const ButtonContactOne = ({ href = '' }: ButtonContactOneProps) => {
   const { generals, multilanguage } = useGeneralStore()

   return (
      <Link href={href}>
         <button className="ButtonContactOne-btn">
            <span className="ButtonContactOne-span">{multilanguage.lbl_contactone}</span>
         </button>
      </Link>
   )
}

export default ButtonContactOne
