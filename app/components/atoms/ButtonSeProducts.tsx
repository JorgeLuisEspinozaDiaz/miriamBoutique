import { useGeneralStore } from '@/store'
import Link from 'next/link'
import React from 'react'

interface ButtonSeProductsProps {
   href: string
}
const ButtonSeProducts = ({ href = '' }: ButtonSeProductsProps) => {
   const { generals, multilanguage } = useGeneralStore()
   return (
      <Link href={href}>
         <button className="ButtonSeProducts-btn">
            <span className="ButtonSeProducts-span">{multilanguage.lbl_see_more}</span>
         </button>
      </Link>
   )
}

export default ButtonSeProducts
