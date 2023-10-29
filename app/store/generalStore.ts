import { GeneralsData } from '@/interface/general'
import { MultilanguageData } from '@/interface/multilanguage'
import { baseApi } from '@/lib/baseApi'
import { create } from 'zustand'

interface GeneralState {
   generals: GeneralsData
   multilanguage: MultilanguageData
   getGenerals: (locale: string | undefined) => Promise<void>
}

export const useGeneralStore = create<GeneralState>((set) => ({
   generals: {
      id: 1,
      createdAt: '',
      updatedAt: '',
      publishedAt: '',
      address: '',
      attention: '',
      email: '',
      phone: '',
      cell_phone: '',
      pixel_facebook: '',
      facebook_id: '',
      tag_manager: '',
      Logo: {
         id: 10,
         name: '',
         alternativeText: '',
         caption: '',
         width: 0,
         height: 0,
         formats: null,
         hash: '',
         ext: '',
         mime: '',
         size: 0,
         url: '',
         previewUrl: null,
         provider: '',
         provider_metadata: null,
         createdAt: '',
         updatedAt: '',
      },
      social_networks: [],
      logo_mobile: {
         id: 10,
         name: '',
         alternativeText: '',
         caption: '',
         width: 0,
         height: 0,
         formats: null,
         hash: '',
         ext: '',
         mime: '',
         size: 0,
         url: '',
         previewUrl: null,
         provider: '',
         provider_metadata: null,
         createdAt: '',
         updatedAt: '',
      },
   },
   multilanguage: {
      id: 1,
      createdAt: '',
      updatedAt: '',
      publishedAt: '',
      lbl_see_products: '',
      lbl_contact: '',
      lbl_contactone: '',
      lbl_see_more: '',
      lbl_send: '',
      lbl_quality: '',
      lbl_sends: '',
      menu: [],
      lbl_language: '',
      lbl_address: '',
   },

   getGenerals: async (locale: string | undefined) => {
      try {
         const [{ data: general }, { data: multilanguage }] = await Promise.all([
            baseApi.get(`/general?populate=deep`),
            baseApi.get(`/multilanguage?locale=${locale}&populate=deep`),
         ])

         set((state) => ({
            ...state,
            generals: general.data,
            multilanguage: multilanguage.data,
         }))
      } catch (error) {
         console.error('Error fetching generals:', error)
      }
   },
}))
