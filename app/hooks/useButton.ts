import { useGeneralStore } from '@/store/generalStore'
import { useEffect } from 'react'
// import { useGenerals } from "../context/generals.context";
export const useButton = () => {
   // const { polylang } = useGenerals();
   const { generals } = useGeneralStore()
   useEffect(() => {
      const options = {
         sms: generals.cell_phone || '', // Sms phone number
         facebook: generals.facebook_id || '', // Facebook page ID
         call_to_action: '', // Call to action
         button_color: '#0058D0', // Color of button
         position: 'right', // Position may be 'right' or 'left'
         order: 'sms,facebook', // Order of buttons
      }
      const proto = document.location.protocol || 'https:',
         host = 'getbutton.io',
         url = proto + '//static.' + host
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.async = true
      s.src = url + '/widget-send-button/js/init.js'
      s.onload = function () {
         // @ts-ignore
         WhWidgetSendButton.init(host, proto, options)
      }
      const x = document.getElementsByTagName('script')[0]
      x.parentNode!.insertBefore(s, x)
   }, [generals])
   useEffect(() => {
      let buttonEl: any = null
      const interval = setInterval(() => {
         if (buttonEl) {
            clearInterval(interval)
            buttonEl.style.zIndex = 10
            return
         }
         buttonEl = document.querySelector('[id^="gb-widget-"]')
      }, 1000)
      return () => {
         clearInterval(interval)
      }
   }, [])
}
