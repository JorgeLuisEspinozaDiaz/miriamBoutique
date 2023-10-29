import { useNavbarContext } from '@/context/navbar.context'
import { useForm } from '@/hooks'
import { Form } from '@/interface/contact'
import React, { useEffect, useRef } from 'react'
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHAType } from 'react-google-recaptcha'
import ButtonSend from '../atoms/ButtonSend'
import { Loader } from '../atoms/Loader'
import { CategoriesData } from '@/interface/categories'

interface FormProps {
   form: Form
   category: CategoriesData[]
}

const Form = ({ form, category }: FormProps) => {
   const captchaRef = useRef<ReCAPTCHAType>(null)
   const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string
   const { message, messages, name, phone, product, email } = form
   const { serviceSelected } = useNavbarContext()

   const {
      failure,
      sending,
      errors,
      formState,
      responseMessage,
      validateInput,
      validateSelect,
      handleInput,
      handleSubmit,
      setFormState,
      phoneRef,
      phoneNumberFormatter,
   } = useForm(form.messages, '/ezforms/submit', captchaRef)

   const onChangeRecaptcha = () => {
      if (captchaRef.current?.getValue()) {
         setFormState({
            ...formState,
            captcha: captchaRef.current?.getValue() as string,
         })
      }
   }

   useEffect(() => {
      setFormState((prevState) => {
         return { ...prevState, product: serviceSelected }
      })
   }, [setFormState, serviceSelected])

   return (
      <div>
         <form className="form" onSubmit={handleSubmit}>
            <div className="form-conta">
               <div className="container">
                  <input
                     className="formInput"
                     type="text"
                     value={formState.name}
                     onInput={validateInput}
                     name={name.name}
                     id={name.name}
                     placeholder={name.placeholder}
                  />
                  {errors.name && <span className="Form-error">{errors.name}</span>}
               </div>

               <div className="container">
                  <input
                     className="formInput"
                     type="text"
                     value={formState.email}
                     onInput={validateInput}
                     name={email.name}
                     id={email.name}
                     placeholder={email.placeholder}
                  />
                  {errors.email && <span className="Form-error">{errors.email}</span>}
               </div>
            </div>

            <div className="form-conta">
               <div className="container">
                  <input
                     className="formInput"
                     type="text"
                     value={formState.phone}
                     onInput={validateInput}
                     name={phone.name}
                     id={phone.name}
                     ref={phoneRef}
                     onKeyDown={phoneNumberFormatter}
                     placeholder={phone.placeholder}
                  />

                  {errors.phone && <span className="Form-error">{errors.phone}</span>}
               </div>

               <div className="container relative">
                  <i className="icon-bottom icons-select"></i>
                  <select
                     value={formState.product}
                     name="product"
                     onInput={validateSelect}
                     id={product.name}
                     className="formInput inputselect"
                  >
                     <option className="inputselect">{product.placeholder}</option>
                     {category.map((cat) => (
                        <option key={cat.id} className="text-slate-500">
                           {cat.title}
                        </option>
                     ))}
                  </select>
                  {errors.product && <span className="Form-error">{errors.product}</span>}
               </div>
            </div>

            <div className="containertextarea">
               <textarea
                  className="formInputarea"
                  value={formState.message}
                  name={message.name}
                  onInput={handleInput}
                  id={message.name}
                  placeholder={message.placeholder}
               />
            </div>
            <div className="Form-captcha">
               <ReCAPTCHA sitekey={captchaKey} ref={captchaRef} onChange={onChangeRecaptcha} />
               {errors.captcha && <p className="Form-error">{errors.captcha}</p>}
            </div>

            <div className="Form-buttom flex gap-[2rem] ">
               <ButtonSend />
               {sending && <Loader />}
            </div>
            <div className="messages">
               {responseMessage && (
                  <span className={`feedback-message init ${failure && 'failure'}`}>{responseMessage}</span>
               )}
            </div>
         </form>
      </div>
   )
}

export default Form
