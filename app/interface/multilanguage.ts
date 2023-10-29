export interface Multilanguage {
   data: MultilanguageData
   meta: MultilanguageMeta
}

export interface MultilanguageData {
   id: number
   createdAt: string
   updatedAt: string
   publishedAt: string
   lbl_see_products: string
   lbl_contact: string
   lbl_contactone: string
   lbl_see_more: string
   lbl_send: string
   lbl_quality: string
   lbl_sends: string
   menu: Menu[]
   lbl_language: string
   lbl_address: string
}

export interface Menu {
   id: number
   label: string
   url: string
}

export interface MultilanguageMeta {}
