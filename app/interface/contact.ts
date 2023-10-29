import { InputForm, MetaSEO, Picture } from './shared'

export interface Contact {
   data: ContactData
   meta: ContactMeta
}

export interface ContactData {
   id: number
   title: string
   text: string
   createdAt: string
   updatedAt: string
   publishedAt: string
   lbl_tel: string
   lbl_store: string
   form: Form
   icon_tel: Picture
   icon_map: Picture
   seo: MetaSEO
}

export interface Form {
   id: number
   messages: Messages
   name: InputForm
   email: InputForm
   phone: InputForm
   product: InputForm
   message: InputForm
}

export interface Messages {
   spam: string
   invalid_tel: string
   invalid_url: string
   accept_terms: string
   invalid_date: string
   mail_sent_ng: string
   mail_sent_ok: string
   date_too_late: string
   invalid_email: string
   upload_failed: string
   date_too_early: string
   invalid_name: string
   invalid_number: string
   invalid_recaptcha: string
   invalid_required: string
   invalid_too_long: string
   number_too_large: string
   number_too_small: string
   validation_error: string
   invalid_too_short: string
   upload_file_too_large: string
   quiz_answer_not_correct: string
   upload_failed_php_error: string
   upload_file_type_invalid: string
}

export interface ContactMeta {}
