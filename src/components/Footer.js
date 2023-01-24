import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-[#193E6A] sm:h-[300px] justify-items-center flex flex-col sm:items-start pt-16 w-full sm:grid sm:grid-cols-4 text-white'>
        <div className="flex flex-col py-4 sm:py-0 pl-8 font-bold sm:pl-0">
            <p className='pb-2'><a href="">Hästtransporter</a></p>
            <p className='pb-2'><a href="">Släpvagnar</a></p>
            <p className='pb-2'><a href="">Hästlastbilar</a></p>
            <p className='pb-2'><a href="">Begagnat</a></p>
            <p className='pb-2'><a href="">Kontakt</a></p>
        </div>
        <div className="flex flex-col pl-8">
            <p className='font-bold pb-2'>Adress</p>
            <p><a href="https://www.google.com/maps/place/Tjugov%C3%A4gen,+271+77+L%C3%B6derup/data=!4m2!3m1!1s0x46546075a5884783:0x9f4013e219ed4a26?sa=X&ved=2ahUKEwiZnOCTvNP8AhUNxosKHX9lCNMQ8gF6BAgJEAI" target="_blank">Tjugovägen 196271 77</a></p>
            <p><a href="https://www.google.com/maps/place/Tjugov%C3%A4gen,+271+77+L%C3%B6derup/data=!4m2!3m1!1s0x46546075a5884783:0x9f4013e219ed4a26?sa=X&ved=2ahUKEwiZnOCTvNP8AhUNxosKHX9lCNMQ8gF6BAgJEAI" target="_blank">Löderup</a></p>
            <p className='font-bold py-2'>Telefon</p>
            <p>Viktor: <a href="tel:073-68 10 287">073-68 10 287</a></p>
            <p>Per Göran: <a href="tel:070-528 24 06">070-528 24 06</a></p>
        </div>
        <div className="flex flex-col pl-8">
            <p className='font-bold pb-2'>E-mail</p>
            <p><a href="mailto:info@osterlenshtc.se">info@osterlenshtc.se</a></p>
            <p><a href="mailto:viktor@osterlenshtc.se">viktor@osterlenshtc.se</a></p>
            <p><a href="mailto:pg@osterlenshtc.se">pg@osterlenshtc.se</a></p>
        </div>
        <div className="flex flex-col pl-8">
            <div className="flex flex-row">
                <a href="https://www.facebook.com/people/%C3%96sterlens-H%C3%A4sttransportcenter-AB/100063670895719/" target="_blank">
                    <AiOutlineFacebook className='w-10 h-10 mb-2' />
                </a>
                {/* <a href="">
                    <AiOutlineInstagram className='w-10 h-10' />
                </a> */}
        </div>
        <p className='font-bold pb-4 sm:pr-16 sm:pb-0'>Följ oss på våra sociala medier och ta del av nyheter & erbjudanden.</p>
        </div>

    </div>
  )
}

export default Footer