import React from 'react'
import HumbaurIcon from '../../assets/Humbaur_Claim-positiv_4c.png'

const Brands = () => {
  return (
    <div name="services" className='w-full h-full mt-4 sm:mt-12 mb-20'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='max-w-[1200px] pb-4 px-4'>
        <h4 className='font-bold text-3xl sm:text-4xl '>Våra varumärken</h4>
        <div className="grid grid-cols-4 gap-4">
        <div className="brand">
            <img src={HumbaurIcon} className="w-64" alt="" />
        </div>
        <div className="brand">
            <img src={HumbaurIcon} className="w-64" alt="" />
        </div>
        <div className="brand">
            <img src={HumbaurIcon} className="w-64" alt="" />
        </div>
        <div className="brand">
            <img src={HumbaurIcon} className="w-64" alt="" />
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Brands