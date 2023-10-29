import { MetaSEO, Picture } from './shared'

export interface Home {
   data: HomeData
   meta: MetaData
}

export interface HomeData {
   id: number
   createdAt: string
   updatedAt: string
   publishedAt: string
   Home_banner: Home_banner
   Home_outstanding: Home_outstanding
   Home_products: Home_products
   Home_midle: Home_midle
   Home_about: Home_about
   Home_comments: Home_comments
   Home_map: Home_map
   seo: MetaSEO
}
export interface Home_banner {
   id: number
   image: Picture[]
   image_full: Picture[]
   image_telone: Picture
   image_teltwo: Picture
   image_tablet: Picture[]
}
export interface Home_outstanding {
   id: number
   title: string
}
export interface Home_products {
   id: number
   title: string
}
export interface Home_midle {
   id: number
   title: string
   subtitle: string
   text: string
   image: Picture
}

export interface Home_about {
   id: number
   title: string
   text: string
   textone: string
   imageone: Picture
   imagetwo: Picture
   imagemob: Picture
}
export interface Home_comments {
   id: number
   title: string
}
export interface Home_map {
   id: number
   url_map: string
   title: string
   text: string
   icon: Picture
}

export interface MetaData {}
