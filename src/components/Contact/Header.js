import React from 'react'
import Background from '../../assets/Hästar.jpg'

const Header = () => {
  return (        
        <div name="home" className='w-full h-screen'>
        <img src={Background} alt="" className="absolute object-cover h-[90%] w-full" />

        <div className='w-full absolute px-8 flex flex-col justify-center  h-full'>
            <h1 className='text-5xl sm:text-7xl font-bold text-white text-center'>Välkommen till Österlens Hästtransportcenter
            </h1>
        </div>

        <div className='h-[10%] w-full absolute bottom-0 lg:pl-24 flex items-center pl-8 bg-[#fff]'>
            
        </div>
    </div>
  )
}

export default Header