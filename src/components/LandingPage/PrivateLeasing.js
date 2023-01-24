import React from 'react'
import Horses from '../../assets/springandehästar.jpg'

const PrivateLeasing = () => {
  return (
        <div name="contact" className='w-full h-full my-16'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1200px] relative w-full grid sm:grid-cols-2'>
                <div className='sm:pb-8 sm:pl-4'>
                <div className='sm:max-w-[1200px] relative'>
                <img src={Horses} />
                    
                    
                </div>
                </div>
                <div className='pb-8 sm:px-4 sm:pl-4 relative'>
                <div className='sm:absolute bottom-[50px] sm:-left-[80px] sm:rounded-md bg-white py-12 px-4 sm:px-16 shadow-xl'>
                    <h3 className='text-3xl font-bold sm:text-4xl'>Privatleasing</h3>
                    <p className='py-4 font-bold text-black'>Hos oss har ni möjlighet att privatleasa samtliga släp enkelt och smidigt till låg kontantinsats och månadskostnad. Kontakta oss för att höra mer om privatleasing på våra släp.</p>
                    <div className="text-center sm:text-left ">
                    <a href="">
                        <button className='uppercase rounded-md font-bold text-white bg-[#AD343E] px-12 py-4'>
                            Kontakta oss
                        </button>
                        </a>
                        </div>
                        </div>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default PrivateLeasing