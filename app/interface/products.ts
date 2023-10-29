import { MetaSEO, Picture } from './shared'

export interface Products {
   data: ProductsData[]
   meta: ProductsMeta
}

export interface ProductsData {
   id: number
   name: string
   createdAt: string
   updatedAt: string
   publishedAt: string
   selectedcolor: string
   outstanding: boolean
   colors: Colors[]
   category: Category
   seo: MetaSEO
}

export interface Colors {
   id: number
   color: string
   name_product: string
   image: Picture
}

export interface Category {
   id: number
   title: string
   createdAt: string
   updatedAt: string
   publishedAt: string
}

export interface ProductsMeta {}
