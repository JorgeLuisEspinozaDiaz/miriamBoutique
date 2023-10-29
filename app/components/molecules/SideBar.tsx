import { CategoriesData } from '@/interface/categories'
import React, { useState } from 'react'
import Acordeon from './Acordeon'
import { useGeneralStore } from '@/store'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Products, ProductsData } from '@/interface/products'
import { motion, AnimatePresence } from 'framer-motion'

interface SideBarProps {
   categories: CategoriesData[]
   className?: string
   categoriaSeleccionada: string
   setCategoriaSeleccionada: React.Dispatch<React.SetStateAction<string>>
   mostrarProductos: () => ProductsData[]
   cambiarCategoria: (categoria: any) => void
   handleOpenSideBar: () => void
}

const SideBar = ({
   categories,
   className,
   categoriaSeleccionada,
   setCategoriaSeleccionada,
   mostrarProductos,
   cambiarCategoria,
   handleOpenSideBar,
}: SideBarProps) => {
   const { multilanguage } = useGeneralStore()
   return (
      <motion.div
         className={`SideBar ${className}`}
         onClick={(e) => e.stopPropagation()}
         initial={{ x: -100, opacity: 0 }}
         animate={{ x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }}
         exit={{ x: -100, opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } }}
      >
         <div className="Sidebar-icon" onClick={handleOpenSideBar}>
            <i className="icon-xx"></i>
         </div>

         <div className="SideBar-acordeon">
            <Acordeon
               categories={categories}
               categoriaSeleccionada={categoriaSeleccionada}
               setCategoriaSeleccionada={setCategoriaSeleccionada}
               mostrarProductos={mostrarProductos}
               cambiarCategoria={cambiarCategoria}
            />
            <div className="SideBar-send ">
               <i className="icon-check"></i>
               <ReactMarkdown>{multilanguage.lbl_quality}</ReactMarkdown>
            </div>
            <div className="SideBar-send">
               <i className="icon-truck"></i>
               <ReactMarkdown>{multilanguage.lbl_sends}</ReactMarkdown>
            </div>
         </div>
      </motion.div>
   )
}

export default SideBar
