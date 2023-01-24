import React from 'react'
import HittaHit from '../../assets/hitta.png'

const FindUs = () => {
  return (
    <div name="contact" className='w-full h-full my-16'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
                   <div className='flex items-start max-w-[1200px] w-full pl-4 sm:pl-0'> <h4 className='font-bold text-left text-3xl sm:text-4xl'>Hitta hit</h4></div>
            <div className='max-w-[1200px] w-full grid sm:grid-cols-2'>
                <div className=''>
                <div className='relative w-full sm:px-0'>
                   <a href='https://www.google.com/maps/place/%C3%96sterlens+H%C3%A4sttransportcenter+AB/@55.4209363,14.1044787,15z/data=!4m5!3m4!1s0x0:0xadaa5e7686b3a6b7!8m2!3d55.4203774!4d14.1089612' target="_blank"><img src={HittaHit} className="w-full" /> </a> 
                   </div>
                   </div>
                

                <div className='w-full sm:block items-center justify-center flex flex-col h-full sm:pr-4 sm:mx-0 bg-[#E0EDFF]'>
                        <div className="flex flex-col h-full text-center sm:text-left sm:flex-row items-center justify-center py-4">
                        <div className="">
                    <h4 className='font-bold sm:text-left text-3xl sm:text-5xl'>Kontakt</h4>
                        <p className='font-bold text-xl'>Adress</p>
                        <p className='text-xl'>Tjugovägen 196271 77</p>
                        <p className='text-xl'>Löderup</p>
                        <p className='font-bold text-xl pt-4'>Telefon</p>
                        <p className='text-xl'>Viktor: 073-68 10 287</p>
                        <p className='text-xl'>Per Göran: 070-528 24 06</p>
                    </div>
                    <div className="flex flex-col justify-center pt-4 sm:pt-0">
                        <p className='font-bold text-xl'>Email</p>
                        <p className='text-xl'>info@osterlenshtc.se</p>
                        <p className='text-xl'>viktor@osterlenshtc.se</p>
                        <p className='text-xl'>pg@osterlenshtc.se</p>
                  </div>    
                    
                    </div>
                </div>
                
                        
        </div>
    </div>
    </div>
  )
}

export default FindUs