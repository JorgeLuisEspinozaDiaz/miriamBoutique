import { useGeneralStore } from '@/store'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface ButtomProps {
   href?: string
}
const ButtonContact = ({ href = '' }: ButtomProps) => {
   const { generals, multilanguage } = useGeneralStore()
   const { asPath } = useRouter()

   return (
      <Link href={href}>
         <button className={asPath === '/contact' ? ' ButtonContact-btn  ButtonContactactive' : 'ButtonContact-btn'}>
            <span className="ButtonContact-span">{multilanguage.lbl_contact}</span>
         </button>
      </Link>
   )
}

export default ButtonContact
