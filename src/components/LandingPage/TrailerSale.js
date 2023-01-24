import React from 'react'
import Horses from '../../assets/Hästar.jpg'

const TrailerSale = () => {
  return (
      <div name="contact" className='w-full h-full my-16'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1200px] relative w-full grid sm:grid-cols-2'>
                
                <div className='pb-8 px-4 relative'>
                <div className=' py-12'>
                    <h3 className='text-3xl font-bold sm:text-4xl'>Letar du efter en släpvagn?</h3>
                    <p className='py-4 pb-12 font-bold text-black'>Vi har marknadens bästa från Humbaur och Debon. Allt inom tippsläp, maskinsläp, skåpsläp eller flaksläp finns i vårt sortiment.Vi kan även bygga ditt skåpsläp precis enligt dina önskemål.Välkomna till oss på Österlens Hästtransportcenter.
                    </p>
                    <div className="sm:text-left text-center">
                    <a href="/slapvagnar">
                        <button className='rounded-md uppercase font-bold text-white bg-[#AD343E] px-12 py-4'>
                            Släpvagnar till salu
                        </button>
                        </a>
                        </div>
                        </div>
            </div>
            <div className='sm:pb-8 sm:pl-4'>
                <div className='sm:max-w-[1200px] relative'>
                <img src={Horses} className="sm:rounded-md" />
                    
                    
                </div>
                </div>
        </div>
    </div>
    </div>
  )
}

export default TrailerSale