import { Container } from '@/components/globals/Container'
import CardProducts from '@/components/molecules/CardProducts'
import SideBar from '@/components/molecules/SideBar'
import { Categories, CategoriesData } from '@/interface/categories'
import { ProductBlog, ProductBlogData } from '@/interface/productBlog'
import { Products, ProductsData } from '@/interface/products'
import { baseApi } from '@/lib/baseApi'
import { Console } from 'console'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SeoEngine } from '@/components/atoms/SeoEngine'
import { useRouter } from 'next/router'
import { useGeneralStore } from '@/store'

interface productblogProps {
   productblog: ProductBlogData
   categories: CategoriesData[]
   product: ProductsData[]
}
const Index = ({ productblog, categories, product }: productblogProps) => {
   const [openSideBar, setOpenSideBar] = useState(false)
   const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('all')
   const [productos, setProductos] = useState(product)
   const [showMore, setShowMore] = useState(false)
   const [showbottom, setShowbottom] = useState(true)

   const { multilanguage } = useGeneralStore()

   const handleOpenSideBar = () => {
      setOpenSideBar(!openSideBar)
   }

   const mostrarProductos = () => {
      if (categoriaSeleccionada === 'all') {
         return product
      } else {
         return product.filter((producto) => producto.category.title === categoriaSeleccionada)
      }
   }

   const cambiarCategoria = (categoria: any) => {
      setCategoriaSeleccionada(categoria)
      setOpenSideBar(false)
   }

   const seemore = () => {
      setShowMore(!showMore)
      setShowbottom(false)
   }
   const { locale } = useRouter()

   useEffect(() => {
      setProductos(product)
   }, [locale, product])

   return (
      <div className="main-page">
         <Container>
            <div className="blog-conteTitleContainer">
               <div className="blog-sidebar">
                  <SideBar
                     categories={categories}
                     categoriaSeleccionada={categoriaSeleccionada}
                     setCategoriaSeleccionada={setCategoriaSeleccionada}
                     mostrarProductos={mostrarProductos}
                     cambiarCategoria={cambiarCategoria}
                     handleOpenSideBar={handleOpenSideBar}
                  />
               </div>
               <div>
                  <div className="blog-conteTitle relative">
                     <h1 className="blog-subtitle">{productblog.subtitle}</h1>
                     <h2 className="blog-title">{productblog.title}</h2>

                     <div className="image-butterflyleft">
                        <Image src={'/butterflyleft.png'} alt="" width={1000} height={1000} className="w-full h-full" />
                     </div>
                     <div className="blog-butterflyright">
                        <Image
                           src={'/butterflyright.png'}
                           alt=""
                           width={1000}
                           height={1000}
                           className="w-full h-full"
                        />
                     </div>
                  </div>

                  {mostrarProductos().length > 0 && (
                     <h2 className="blog-titledesk">
                        {locale === 'es'
                           ? `Mostrando ${mostrarProductos().length} resultados de "${categoriaSeleccionada}"`
                           : `Showing ${mostrarProductos().length} results of "${categoriaSeleccionada}"`}
                     </h2>
                  )}

                  <div>
                     {locale === 'en' ? (
                        <motion.div
                           className={`${
                              mostrarProductos().length > 0
                                 ? 'logProduc-containerdesk '
                                 : 'logProduc-containerdesk col1'
                           }`}
                        >
                           {mostrarProductos().length > 0 ? (
                              mostrarProductos()
                                 .slice(0, showMore ? mostrarProductos().length : 12)
                                 .map((producto, index) => (
                                    <CardProducts key={producto.id} product={producto} productos={productos} />
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
                           )}
                        </motion.div>
                     ) : (
                        <motion.div
                           className={`${
                              mostrarProductos().length > 0
                                 ? 'logProduc-containerdesk '
                                 : 'logProduc-containerdesk col2'
                           }`}
                        >
                           {mostrarProductos().length > 0 ? (
                              mostrarProductos()
                                 .slice(0, showMore ? mostrarProductos().length : 12)
                                 .map((producto, index) => (
                                    <CardProducts key={producto.id} product={producto} productos={productos} />
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
                     )}

                     <div className="HomeCategorie-btns">
                        {mostrarProductos().length > 12 && showbottom && (
                           <div className="flex justify-center  " onClick={seemore}>
                              <div className="HomeCategorie-btnProducts cursor-pointer">
                                 <span className="HomeCategorie-btnProductspan">{multilanguage.lbl_see_products}</span>
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            </div>
            <div className="conta-filter" onClick={handleOpenSideBar}>
               <button className="blog-filter">
                  <i className="icon-filter"></i>
                  <span className="blog-titlefilter">{locale === 'en' ? 'Filter' : 'Filtrar'}</span>
               </button>
            </div>

            {mostrarProductos().length > 0 && (
               <h2 className="blog-titlemob">
                  {locale === 'es'
                     ? `Mostrando ${mostrarProductos().length} resultados de "${categoriaSeleccionada}"`
                     : `Showing ${mostrarProductos().length} results of "${categoriaSeleccionada}"`}
               </h2>
            )}

            <AnimatePresence>
               {openSideBar && (
                  <div className="SideBar-overlay" onClick={handleOpenSideBar}>
                     <SideBar
                        categories={categories}
                        categoriaSeleccionada={categoriaSeleccionada}
                        setCategoriaSeleccionada={setCategoriaSeleccionada}
                        mostrarProductos={mostrarProductos}
                        cambiarCategoria={cambiarCategoria}
                        className={`SideBar ${openSideBar ? 'open' : ''}`}
                        handleOpenSideBar={handleOpenSideBar}
                     />
                  </div>
               )}
            </AnimatePresence>

            {locale === 'en' ? (
               <motion.div
                  layout
                  className={`${
                     mostrarProductos().length > 0 ? 'blogProduc-containermobi ' : 'blogProduc-containermobi mob1'
                  }`}
               >
                  {mostrarProductos().length > 0 ? (
                     mostrarProductos()
                        .slice(0, showMore ? mostrarProductos().length : 12)
                        .map((producto, index) => (
                           <CardProducts key={producto.id} product={producto} productos={productos} />
                        ))
                  ) : (
                     <div className="HomeCategorie-imageEN">
                        <Image
                           src={'/en.jpg'}
                           width={10000}
                           height={10000}
                           alt=""
                           className="w-full h-full  object-cover"
                        />
                     </div>
                  )}
               </motion.div>
            ) : (
               <motion.div
                  layout
                  className={`${
                     mostrarProductos().length > 0 ? 'blogProduc-containermobi ' : 'blogProduc-containermobi mob2'
                  }`}
               >
                  {mostrarProductos().length > 0 ? (
                     mostrarProductos()
                        .slice(0, showMore ? mostrarProductos().length : 12)
                        .map((producto, index) => (
                           <CardProducts key={producto.id} product={producto} productos={productos} />
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
            )}

            <div className="HomeCategorie-btnmobile">
               {mostrarProductos().length > 12 && showbottom && (
                  <div className="flex justify-center" onClick={seemore}>
                     <div className="HomeCategorie-btnProducts cursor-pointer">
                        <span className="HomeCategorie-btnProductspan">{multilanguage.lbl_see_products}</span>
                     </div>
                  </div>
               )}
            </div>
         </Container>
         <SeoEngine seo={productblog.seo} />
      </div>
   )
}

export default Index

export const getStaticProps: GetStaticProps = async ({ locale }) => {
   const [{ data: productblog }, { data: categories }, { data: product }] = await Promise.all([
      baseApi.get<ProductBlog>(`/product-blog?locale=${locale}&populate=deep,3`),
      baseApi.get<Categories>(`/categories?locale=${locale}&populate=deep,3`),
      baseApi.get<Products>(`/products?locale=${locale}&populate=deep,3`),
   ])
   return {
      props: {
         productblog: productblog.data,
         categories: categories.data,
         product: product.data,
      },
      revalidate: 1,
   }
}
