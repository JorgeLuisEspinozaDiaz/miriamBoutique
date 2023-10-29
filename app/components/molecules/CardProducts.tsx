import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ButtonContact from '../atoms/ButtonContact'
import { ProductsData } from '@/interface/products'
import Modal from './Modal'
import { motion, Variants } from 'framer-motion'
import { useNavbarContext } from '@/context/navbar.context'
import ButtonContactOne from '../atoms/ButtonContactOne'
import { useRouter } from 'next/router'

interface CardProductsProps {
   product: ProductsData
   productos: ProductsData[]
}
const CardProducts = ({ product, productos }: CardProductsProps) => {
   const [open, setopen] = useState(false)
   const { setServiceSelected } = useNavbarContext()
   const handleCategoryClick = (service: string) => {
      setServiceSelected(service)
      console.log(service)
   }

   const openModal = () => {
      setopen(true)
      document.body.style.overflow = 'hidden' // Desactivar el desplazamiento de la página
   }

   const closeModal = () => {
      setopen(false)
      document.body.style.overflow = '' // Restaurar el desplazamiento de la página
   }

   const [selectedColor, setSelectedColor] = useState<string>(product.colors[0].color)

   const handleColorChange = (color: string): void => {
      setSelectedColor(color)
   }
   const { locale } = useRouter()
   useEffect(() => {
      setSelectedColor(product.colors[0].color)
   }, [locale, product])

   const currentImage = product.colors.find((colorItem) => colorItem.color === selectedColor)?.image.url
   const imageVariants = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
   }

   const imageTransition = {
      duration: 0.5,
   }

   return (
      <motion.div
         layout
         initial={{ opacity: 0, scale: 0 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.8 }}
         className="CardProducts"
      >
         <div className="CardProducts-image">
            {currentImage && (
               <motion.div layout onClick={openModal} className={`w-full h-full object-contain cursor-pointer`}>
                  <motion.div initial="initial" animate="animate" variants={imageVariants} transition={imageTransition}>
                     <Image
                        src={currentImage}
                        alt=""
                        width={10000}
                        height={1000}
                        className="w-full h-full CardProducts-img"
                     />
                  </motion.div>
               </motion.div>
            )}

            <div className="CardProducts-icons" onClick={openModal}>
               <i className="icon-lupma"></i>
            </div>
            {open && <Modal productos={productos} product={product} closeModal={closeModal} />}
         </div>

         <div className="CardProducts-conta">
            <span className="CardProducts-categorie">{product.category.title}</span>
            <h1 className="CardProducts-name">{product.name}</h1>

            <div className="CardProducts-containerbuttom">
               <div className="flex gap-[1rem]  flex-wrap ">
                  {product.colors.map((colorItem) => (
                     <motion.button
                        key={colorItem.id}
                        onClick={() => handleColorChange(colorItem.color)}
                        className={`CardProducts-btn   ${selectedColor === colorItem.color ? 'activess' : ''}`}
                        style={{ background: colorItem.color }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                     ></motion.button>
                  ))}
               </div>
            </div>

            <div className="CardProducts-btncontact" onClick={() => handleCategoryClick(product.category.title)}>
               <ButtonContactOne href="/contact" />
            </div>
         </div>
      </motion.div>
   )
}

export default CardProducts
