import React from 'react'
import Background from '../../assets/Hästar.jpg'
import { HiMagnifyingGlassCircle } from 'react-icons/hi2'

const Header = () => {
  return (        
        <div name="home" className='w-full h-[80vh]'>
        <img src={Background} alt="Häst i hage" className="absolute object-cover h-[70%] w-full" />

        <div className='w-full absolute px-8 flex flex-col items-center justify-center  h-[70%]'>
            <h1 className='text-5xl sm:text-7xl font-bold text-white text-center'>Våra hästtransporter
            </h1>
            <div className='rounded-full flex items-center justify-between w-[500px] bg-white text-[#7C7C7C] pl-4 py-2'>Sök efter en produkt eller artikel...    
            <HiMagnifyingGlassCircle className='text-[#AD343E] h-10 w-10' />
            </div>

        </div>
    </div>
  )
}

export default Header