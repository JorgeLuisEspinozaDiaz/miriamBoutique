import { useGeneralStore } from '@/store/generalStore'
import { Console } from 'console'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'

interface SwitchLanguageProps {
   className?: string
   isMenuOpen: boolean
}

export const SwitchLanguage: FC<SwitchLanguageProps> = ({ className, isMenuOpen }) => {
   const [selectedOption, setSelectedOption] = useState('en')
   const { locale, locales, asPath } = useRouter()

   const handleOptionChange = (item: string) => {
      setSelectedOption(item)
   }

   return (
      <div className={`switch-lang ${className}`}>
         {locales?.map((item, index) => (
            <Link key={index} href={asPath} locale={item}>
               <button
                  className={`switch-lang__btn ${locale === item && 'active'}`}
                  onClick={() => handleOptionChange(item)}
               >
                  <span>{item === 'en' ? 'Eng' : 'Esp'}</span>
               </button>
            </Link>
         ))}
      </div>
   )
}
