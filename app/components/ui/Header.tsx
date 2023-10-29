import { useNavbarContext } from '@/context/navbar.context'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { MenuIcon } from '../atoms/MenuIcon'
import { Logo } from '../atoms/Logo'

import { Navbar } from '../molecules/Navbar'
import { Socials } from '../atoms/Social'
import { SwitchLanguage } from '../atoms/SwitchLanguage'

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
   const { asPath } = useRouter()
   const { isTopZero } = useNavbarContext()

   const toggleMenu = () => {
      setIsMenuOpen((prevState) => !prevState)
      document.body.classList.toggle('no-scroll')
   }

   const closeMenu = () => {
      setIsMenuOpen(!isMenuOpen)
      document.body.classList.remove('no-scroll')
   }

   return (
      <div
         className={`Header 
    ${asPath !== '/' ? 'background-two' : 'background-one'}`}
      >
         <div className="Header-ctn">
            <Logo menuActive={isMenuOpen} />
            <div className="langSocial">
               <div className="laptop:hidden">
                  <SwitchLanguage className={`${isMenuOpen && 'isActive'}`} isMenuOpen={isMenuOpen} />
               </div>
               <Socials className={`${isMenuOpen && 'isActive'}`} rsp={true} />
            </div>
            <div className={`Header-menuIcon ${isMenuOpen && 'isActive'}`}>
               <MenuIcon setIsActive={toggleMenu} isActive={isMenuOpen} />
            </div>
            <Navbar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
            <div className={`Header-overlay ${isMenuOpen && 'isActive'}`} onClick={closeMenu} />
         </div>
      </div>
   )
}

export default Header
