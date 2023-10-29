import { useGeneralStore } from '@/store'
import React, { useState } from 'react'
import { SwitchLanguage } from '../atoms/SwitchLanguage'
import { Socials } from '../atoms/Social'
import { Container } from '../globals/Container'

const InfoHeader = () => {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
   const { generals, multilanguage } = useGeneralStore()

   return (
      <>
         <div className="InfoHeader-container">
            <div className="InfoHeader-con">
               <ul className="InfoHeader-ul">
                  <li className={`InfoHeader-li InfoHeader-phone `}>
                     <a href={`tel:${generals.cell_phone}`} className="InfoHeader-a">
                        <i className="icon-phone"></i>
                        ENG: {generals.cell_phone}
                     </a>
                     <a href={`tel:${generals.phone}`} className="InfoHeader-a">
                        / ESP: {generals.phone}
                     </a>
                  </li>
                  <li className={`InfoHeader-li`}>
                     <a href={`${generals.address}`} target="_blank" className="InfoHeader-a">
                        <i className="icon-location"></i>
                        {multilanguage.lbl_address}
                     </a>
                  </li>

                  <li className={`InfoHeader-li`}>
                     <a className="InfoHeader-a">
                        <i className="icon-calendary"></i>
                        {generals.attention}
                     </a>
                  </li>
                  <li className={`InfoHeader-li`}>
                     <a href={`mailto:${generals.email}`} className="InfoHeader-a">
                        <i className="icon-message"></i>
                        {generals.email}
                     </a>
                  </li>
               </ul>

               <div className="InfoHeader-social">
                  <SwitchLanguage className={`${isMenuOpen && 'isActive'}`} isMenuOpen={isMenuOpen} />
                  <Socials rsp={false} className="InfoHeader-socials" />
               </div>
            </div>
         </div>
      </>
   )
}

export default InfoHeader
