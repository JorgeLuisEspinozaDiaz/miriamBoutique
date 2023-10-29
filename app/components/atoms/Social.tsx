import { useGeneralStore } from '@/store'
import { FC } from 'react'

interface SocialsProps {
   className?: string
   rsp?: boolean
}

export const Socials: FC<SocialsProps> = ({ className, rsp }) => {
   const { generals } = useGeneralStore()
   return (
      <div className={`socials flex items-start justify-start laptop:items-center  gap-[1rem] ${className}`}>
         {generals.social_networks.map(({ type, url }, i: number) => (
            <div
               key={i}
               title={`${!url ? 'Coming soon' : type}`}
               className="item-socials flex items-center justify-center"
            >
               <a
                  className={`socials__link flex items-center justify-center ${!url ? 'pointer-events-none' : ''}`}
                  href={url ? url : '#'}
                  target="_blank"
                  rel="noreferrer"
               >
                  <i className={`socials__icon  icon-${type}`} />
               </a>
            </div>
         ))}
      </div>
   )
}
