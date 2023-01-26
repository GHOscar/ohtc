import React from 'react'
import Background from '../../assets/hero.jpg'

const Home = () => {
  return (
    <div name="home" className='w-full h-[80vh]'>
        <img src={Background} alt="Mörk bild på häst" className="absolute object-cover h-[70%] w-full" />

        <div className='w-full absolute px-8 flex flex-col justify-center h-[70%]'>
            <h1 className='text-5xl sm:text-7xl font-bold text-white text-center'>Välkommen till Österlens Hästtransportcenter
            </h1>
        </div>
    </div>
  )
}

export default Home