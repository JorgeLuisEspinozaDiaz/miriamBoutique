import { Picture } from './shared'

export interface Categories {
   data: CategoriesData
   meta: CategoriesMeta
}

export interface CategoriesData {
   id: number
   title: string
   createdAt: string
   updatedAt: string
   publishedAt: string
   products: Products[]
}

export interface Products {
   id: number
   name: string
   createdAt: string
   updatedAt: string
   publishedAt: string
   selectedcolor: string
   outstanding: boolean
   colors: Colors[]
}

export interface Colors {
   id: number
   color: string
   name_product: string
   image: Picture
}

export interface CategoriesMeta {}
