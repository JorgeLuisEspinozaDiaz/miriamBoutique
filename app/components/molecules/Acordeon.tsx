import { CategoriesData } from '@/interface/categories'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { spawn } from 'child_process'
import { ProductsData } from '@/interface/products'
import { useRouter } from 'next/router'

interface SideBarProps {
   categories: CategoriesData[]
   categoriaSeleccionada: string
   setCategoriaSeleccionada: React.Dispatch<React.SetStateAction<string>>
   mostrarProductos: () => ProductsData[]
   cambiarCategoria: (categoria: any) => void
}

const Acordeon = ({
   categories,
   categoriaSeleccionada,
   setCategoriaSeleccionada,
   mostrarProductos,
   cambiarCategoria,
}: SideBarProps) => {
   const [isOpen, setIsOpen] = useState(true)
   const { locale } = useRouter()
   const toggleAccordion = () => {
      setIsOpen(!isOpen)
      // setIsOpen(true)
   }

   return (
      <div className="accordion">
         <div className="accordion-header" onClick={toggleAccordion}>
            <h3 className="accordion-title">{locale === 'en' ? 'Category' : 'Categoría'}</h3>
            <motion.span
               className="accordion-icon"
               initial={{ rotate: 0 }}
               animate={{ rotate: isOpen ? -180 : 0 }}
               transition={{ duration: 0.3 }}
            >
               <i className="icon-bottom"></i>
            </motion.span>
         </div>
         <AnimatePresence>
            {isOpen && (
               <div>
                  <motion.ul
                     className="accordion-content"
                     initial={{ height: 0 }}
                     animate={{ height: 'auto' }}
                     exit={{ height: 0 }}
                     transition={{ duration: 0.3 }}
                  >
                     {categories.map((category) => (
                        <li
                           key={category.id}
                           onClick={() => cambiarCategoria(category.title)}
                           className={`${categoriaSeleccionada === category.title ? 'acordeonactive' : ''}`}
                        >
                           {category.title}
                        </li>
                     ))}
                  </motion.ul>
               </div>
            )}
         </AnimatePresence>
      </div>
   )
}
export default Acordeon
