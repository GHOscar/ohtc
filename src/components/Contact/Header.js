import React from 'react'
import Background from '../../assets/Hästar.jpg'

const Header = () => {
  return (        
        <div name="home" className='w-full h-[70vh]'>
        <img src={Background} alt="Häst i hage" className="absolute object-cover h-[70%] w-full" />

        <div className='w-full absolute px-8 flex flex-col justify-center  h-[70%]'>
            <h1 className='text-5xl sm:text-7xl font-bold text-white text-center'>Välkommen till Österlens Hästtransportcenter
            </h1>
        </div>
    </div>
  )
}

export default Header