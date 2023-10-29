import { Picture } from './shared'

export interface Outstanding {
   data: OutstandingsData[]
   meta: OutstandingsDataMetadata
}

export interface OutstandingsData {
   id: number
   title: string
   text: string
   createdAt: string
   updatedAt: string
   publishedAt: string
   image: Picture
}
export interface OutstandingsDataMetadata {}
