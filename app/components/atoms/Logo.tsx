import { useGeneralStore } from '@/store/generalStore'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect } from 'react'

interface LogoProps {
   className?: string
   menuActive?: boolean
}

export const Logo: FC<LogoProps> = ({ className, menuActive }) => {
   const { generals, getGenerals } = useGeneralStore()

   return (
      <Link href={'/'} legacyBehavior>
         <a className={className}>
            <picture className="logoCont">
               {generals.Logo.url && (
                  <Image
                     priority
                     src={!menuActive ? generals.Logo.url : generals.logo_mobile.url}
                     width={1000}
                     className="w-full h-full object-contain"
                     height={1000}
                     alt="ABCD"
                  />
               )}
            </picture>
         </a>
      </Link>
   )
}
