import React from 'react'
import Horse from '../../assets/brunhäst.jpg'

const Contact = () => {
  return (
    <div name="services" className='w-full h-full mt-4 sm:mt-12 mb-8'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1200px] w-full grid items-center justify-items-center sm:grid-cols-2'>
                <div className='pb-8 px-4'>
                    <div className='sm:px-6 flex items-center justify-center px-0  sm:w-full flex-col rounded-xl bg-[#E0EDFF] shadow-custom sm:mx-4'>
                <div className='sm:px-4 py-4 h-full'>
                    <img src={Horse} className="hidden sm:block w-[290px]" alt="" />
                <h2 className='text-[#004A79] font-bold text-2xl pt-8'>Våra öppettider</h2>
                <ul className='py-4 font-bold  text-[#4A4A4A]'>
                    <li>
                        Måndag - Fredag: 9:00 - 17:00
                    </li>
                    <li>
                        Lördag: 9:00 - 15:00
                    </li>
                    <li>
                        Söndag: Stängt
                    </li>
                </ul>
            </div>
            </div>
            </div>
            <div className="pb-4 px-4">
                    <div className='max-w-[1200px] w-full grid gap-4 text-start'>
                        <h4 className='text-3xl sm:text-4xl text-black font-bold'>Kontakta oss</h4>
                        <p>
                            Varmt välkomna att kontakta oss vid frågor eller intresse av någon av våra produkter. Har du ett annat ärende går det också bra att kontakta oss via mail.

                        </p>
                        <div className="contact-wrapper sm:grid sm:grid-cols-2">
                            <div className="nr">
                            <p className="font-bold">Telefon</p>
                            <p>Viktor: <a href="tel:073-68 10 287">073-68 10 287</a></p>
                            <p>Per Göran: <a href="tel:070-528 24 06">070-528 24 06</a></p>
                            </div>
                            <div className="email">
                            <p className="font-bold">E-mail</p>
                            <p><a href="mailto:info@osterlenshtc.se">info@osterlenshtc.se</a></p>
                            <p><a href="mailto:viktor@osterlenshtc.se">viktor@osterlenshtc.se</a></p>
                            <p><a href="mailto:pg@osterlenshtc.se">pg@osterlenshtc.se</a></p>
                            </div>
                            <div className="address">
                            <p className="font-bold">Adress</p>
                            <p><a href="https://www.google.com/maps/place/Tjugov%C3%A4gen+196,+271+77+L%C3%B6derup/data=!4m2!3m1!1s0x46546070bbf52369:0x143a64baec0801d9?sa=X&ved=2ahUKEwjZsaGst938AhXySPEDHd7OAmIQ8gF6BAgLEAI" target="_blank">Tjugovägen 196</a></p>
                            <p><a href="https://www.google.com/maps/place/Tjugov%C3%A4gen+196,+271+77+L%C3%B6derup/data=!4m2!3m1!1s0x46546070bbf52369:0x143a64baec0801d9?sa=X&ved=2ahUKEwjZsaGst938AhXySPEDHd7OAmIQ8gF6BAgLEAI" target="_blank">271 77 Löderup</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                
            
            
          
        </div>
    </div>
    </div>
  )
}

export default Contact