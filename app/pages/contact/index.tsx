import { SeoEngine } from '@/components/atoms/SeoEngine'
import { Container } from '@/components/globals/Container'
import Form from '@/components/molecules/Form'
import { Categories, CategoriesData } from '@/interface/categories'
import { Contact, ContactData } from '@/interface/contact'
import { baseApi } from '@/lib/baseApi'
import { useGeneralStore } from '@/store'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
interface ContactProps {
   contact: ContactData
   category: CategoriesData[]
}
const Index = ({ contact, category }: ContactProps) => {
   const { generals, multilanguage } = useGeneralStore()

   return (
      <div className="main-page">
         <div className="Contact">
            <div className="Contact-hojas">
               <Image src={'/hojas.png'} width={1000} height={1000} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="Contact-hoja2">
               <Image src={'/hoja2.png'} width={1000} height={1000} alt="" className="w-full h-full object-contain" />
            </div>
            <Container>
               <div className="Contact-container">
                  <div>
                     <h1 className="Contact-title">{contact.title}</h1>
                     <div className="Contact-line"></div>
                     <p className="Contact-text">{contact.text}</p>

                     <div className="container-icons">
                        <div className="Contact-contaonericon">
                           <div className="Contact-icons">
                              <div className="Contact-icon">
                                 <Image
                                    src={contact.icon_tel.url}
                                    alt=" "
                                    width={10000}
                                    height={10000}
                                    className="w-full h-full object-contain"
                                 />
                              </div>
                           </div>

                           <div className="Contact-contaspan">
                              <span className="span1">{contact.lbl_tel}</span>
                              <span className="span2">
                                 <a href={`tel:${generals.phone}`}> ENG: {generals.cell_phone} </a>/
                                 <a href={`tel:${generals.cell_phone}`}>
                                    ESP:
                                    {generals.phone}
                                 </a>
                              </span>
                           </div>
                        </div>

                        <div className="Contact-contaonericon">
                           <div className="Contact-icons">
                              <div className="Contact-icon">
                                 <Image
                                    src={contact.icon_map.url}
                                    alt=" "
                                    width={10000}
                                    height={10000}
                                    className="w-full h-full object-contain"
                                 />
                              </div>
                           </div>

                           <div className="Contact-contaspan">
                              <span className="span1">{contact.lbl_store}</span>
                              <span className="span2">
                                 <a href={generals.address} target="_blank">
                                    {multilanguage.lbl_address}
                                 </a>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="Contact-form">
                     <Form form={contact.form} category={category} />
                  </div>
               </div>
            </Container>
            <SeoEngine seo={contact.seo} />
         </div>
      </div>
   )
}

export default Index

export const getStaticProps: GetStaticProps = async ({ locale }) => {
   const [{ data: contact }, { data: category }] = await Promise.all([
      baseApi.get<Contact>(`/contact?locale=${locale}&populate=deep,3`),
      baseApi.get<Categories>(`/categories?locale=${locale}&populate=deep,3`),
   ])
   return {
      props: {
         contact: contact.data,
         category: category.data,
      },
      revalidate: 1,
   }
}
