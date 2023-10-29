import React from 'react'
import { Container } from '../globals/Container'
import { useGeneralStore } from '@/store'
import { Socials } from '../atoms/Social'

const Footer = () => {
   const { generals, multilanguage } = useGeneralStore()
   return (
      <footer className="footer">
         <Container>
            <div className="footer-container">
               <div className="footer-content">
                  <i className="icon-phone"></i>
                  <div>
                     <a href={`tel:${generals.phone}`} className="footer-span">
                        <span>ENG: </span> {generals.phone} /
                     </a>
                     <a href={`tel:${generals.cell_phone}`} className="footer-span pl-[.3rem]">
                        <span>ESP: </span> {generals.phone}
                     </a>
                  </div>
               </div>

               <div className="footer-content">
                  <i className="icon-location"></i>
                  <a href={generals.address} target="_blank" className="footer-span">
                     {multilanguage.lbl_address}
                  </a>
               </div>

               <div className="footer-content">
                  <i className="icon-calendary"></i>
                  <a className="footer-span">{generals.attention}</a>
               </div>

               <div className="footer-content">
                  <i className="icon-message"></i>
                  <a href={`mailto:${generals.email}`} className="footer-span">
                     {generals.email}
                  </a>
               </div>

               <div className="footer-content footer-social">
                  <Socials />
               </div>
            </div>
         </Container>
      </footer>
   )
}

export default Footer
