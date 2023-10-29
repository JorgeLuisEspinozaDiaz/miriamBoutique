import { ProductsData } from '@/interface/products'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

interface ModalProps {
   product: ProductsData
   productos: ProductsData[]
   closeModal: () => void
}
const Modal = ({ product, productos, closeModal }: ModalProps) => {
   const [selectedColor, setSelectedColor] = useState<string>(product.colors[0].color)

   const handleColorChange = (color: string): void => {
      setSelectedColor(color)
   }

   const currentImage = product.colors.find((colorItem) => colorItem.color === selectedColor)?.image.url

   const { locale } = useRouter()
   useEffect(() => {
      setSelectedColor(product.colors[0].color)
   }, [locale, product])

   return (
      <div
         // initial={{ opacity: 0 }}
         // animate={{ opacity: 1 }}
         // exit={{ opacity: 0 }}
         className="modal-overlay"
         onClick={closeModal}
      >
         <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }}
            exit={{ y: -100, opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } }}
            className="Modal"
            onClick={(e) => e.stopPropagation()}
         >
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.5 } }}
               className="Modal-image relative"
            >
               {currentImage && (
                  <Image
                     src={currentImage}
                     alt={'m'}
                     width={10000}
                     height={10000}
                     className="w-full h-full object-cover overflow-hidden"
                  />
               )}

               <div className="Modal-icon" onClick={closeModal}>
                  <i className="icon-xx"></i>
               </div>
            </motion.div>

            <div className="Modal-container">
               <span className="Modal-text"> {locale === 'es' ? 'Colores:' : 'Colors: '} </span>
               <div className="Modal-containerButtom">
                  {product.colors.map((colorItem) => (
                     <div key={colorItem.id} className="flex">
                        <motion.button
                           onClick={() => handleColorChange(colorItem.color)}
                           className={`CardProducts-btn ${selectedColor === colorItem.color ? 'activess' : ''}`}
                           style={{ background: colorItem.color }}
                           whileHover={{ scale: 1.1 }}
                           whileTap={{ scale: 0.9 }}
                        ></motion.button>
                     </div>
                  ))}
               </div>
            </div>
         </motion.div>
      </div>
   )
}

export default Modal
