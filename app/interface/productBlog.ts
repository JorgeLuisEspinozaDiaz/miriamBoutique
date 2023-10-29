import { MetaSEO } from './shared'

export interface ProductBlog {
   data: ProductBlogData
   meta: ProductBlogMeta
}

export interface ProductBlogData {
   id: 1
   title: string
   subtitle: string
   createdAt: string
   updatedAt: string
   publishedAt: string
   seo: MetaSEO
}

export interface ProductBlogMeta {}
