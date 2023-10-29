import { motion, AnimatePresence } from 'framer-motion'
import { CategoriesData } from '@/interface/categories'
import React, { useEffect, useState } from 'react'
import { Container } from '../globals/Container'
import CardProducts from '../molecules/CardProducts'

import { ProductsData } from '@/interface/products'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface HomeCategorieProps {
   title: string
   categories: CategoriesData[]
   product: ProductsData[]
}

const HomeCategorie = ({ title, categories, product }: HomeCategorieProps) => {
   const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('all')
   const [productos, setProductos] = useState(product)

   const { locale } = useRouter()
   useEffect(() => {
      setProductos(product)
   }, [locale, product])

   const mostrarProductos = () => {
      if (categoriaSeleccionada === 'all') {
         return product
      } else {
         return product.filter((producto) => producto.category.title === categoriaSeleccionada)
      }
   }

   const cambiarCategoria = (categoria: any) => {
      setCategoriaSeleccionada(categoria)
   }

   return (
      <div className="HomeCategorie bg-[#FFF] relative" data-section={'/products'}>
         <div className="HomeCategorie-containers">
            <div className=" HomeCategorie-conta">
               <h1 className="HomeCategorie-title">{title}</h1>
               <div className="HomeCategorie-line"></div>
            </div>
            <div className="HomeCategorie-btncontainer">
               <button
                  className={`HomeCategorie-btnAll ${categoriaSeleccionada === 'all' ? 'active' : ''}`}
                  onClick={() => cambiarCategoria('all')}
               >
                  {locale === 'es' ? 'Todos los productos' : 'All productos'}
               </button>
               {categories.map((categorie, index) => (
                  <button
                     key={index}
                     className={`HomeCategorie-btn ${categoriaSeleccionada === categorie.title ? 'active' : ''}`}
                     onClick={() => cambiarCategoria(categorie.title)}
                  >
                     {categorie.title}
                  </button>
               ))}
            </div>

            <motion.div
               layout
               className={`${
                  mostrarProductos().length > 0 ? 'HomeCategorie-container ' : 'HomeCategorie-container col1'
               }`}
            >
               {locale === 'en' ? (
                  mostrarProductos().length > 0 ? (
                     mostrarProductos()
                        .slice(0, 8)
                        .map((producto, index) => (
                           <CardProducts key={`${producto.id}-${index}`} product={producto} productos={productos} />
                        ))
                  ) : (
                     <div className="HomeCategorie-imageEN">
                        <Image
                           src={'/en.jpg'}
                           width={10000}
                           height={10000}
                           alt=""
                           className="w-full h-full object-cover"
                        />
                     </div>
                  )
               ) : mostrarProductos().length > 0 ? (
                  mostrarProductos()
                     .slice(0, 8)
                     .map((producto, index) => (
                        <CardProducts key={`${producto.id}-${index}`} product={producto} productos={productos} />
                     ))
               ) : (
                  <div className="HomeCategorie-imageEN">
                     <Image
                        src={'/es.jpg'}
                        width={10000}
                        height={10000}
                        alt=""
                        className="w-full h-full  object-cover"
                     />
                  </div>
               )}
            </motion.div>

            {mostrarProductos().length > 0 && (
               <div className="flex justify-center">
                  <Link href={'/product'}>
                     <div className="HomeCategorie-btnProducts">
                        <span className="HomeCategorie-btnProductspan">
                           {locale === 'es' ? 'Ver Más Productos' : 'See More Products'}
                        </span>
                     </div>
                  </Link>
               </div>
            )}
         </div>

         <div className="HomeCategorie-mari1">
            <Image src={'/mari1.png'} alt="" width={1000} height={1000} className="w-full h-full" />
         </div>
         <div className="HomeCategorie-mari2">
            <Image src={'/mari2.png'} alt="" width={1000} height={1000} className="w-full h-full" />
         </div>
      </div>
   )
}

export default HomeCategorie
