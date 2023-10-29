export interface TYPE_FIELD_PROPS {
   name: RegExp
   phone: RegExp
   email: RegExp
   product: RegExp
   captcha: RegExp
}

// Expresiones regulares para validaciones de formulario

export const TYPE_FIELD: TYPE_FIELD_PROPS = {
   name: /[a-z]{3,30}[\s]{0,1}[a-z]{0,30}[\s]{0,1}[a-z]{0,30}/i,
   phone: /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/i,
   email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
   product: /[\w]+/i,
   captcha: /[\w]+/i,
}

export interface InitialFormState {
   name: string
   phone: string
   email: string
   product: string
   message: string
   captcha: string
}

export interface InitialFormErrors {
   name: string
   phone: string
   email: string
   product: string
   message: string
   captcha: string
}

// Estado inicial del formulario

export const initialFormState: InitialFormState = {
   name: '',
   phone: '',
   email: '',
   product: '',
   message: '',
   captcha: '',
}

// Campos del formulario que no pueden estar vacios

export const initialFormErrors: InitialFormErrors = {
   name: '',
   phone: '',
   email: '',
   product: '',
   message: '',
   captcha: '',
}
