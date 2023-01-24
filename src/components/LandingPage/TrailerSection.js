import React from 'react'
import TrailerOne from '../../assets/singlealu-3.jpeg'
import TrailerTwo from '../../assets/R6__2836.jpeg'
import { GrFormNextLink } from 'react-icons/gr'

const TrailerSection = () => {
  return (
    <div name="contact" className='w-full h-full my-24'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1200px] w-full items-center justify-center grid sm:grid-cols-2 sm:gap-8'>
                <div className='sm:pb-8 sm:px-4 h-full flex flex-col sm:gap-20'>
                    
                <div className='mb-12 md:mb-0 relative'>
                  <img src={TrailerOne} alt="NPI service personal" className="pt-4" />
                <div className=' bg-white py-6 px-4 sm:px-12 shadow-lg sm:rounded-xl'>
                    <h4 className='font-bold text-3xl sm:text-4xl'>Humbaur</h4>
                    <p className='h-fit'>Kvalité när den är som bäst! Vi har alltid ett stort lager av tyska Humbaurs hästtransporter med hög kvalité. Välkomna till oss för att hitta en modell som passar dig.</p>
                    <p className='text-[#AD343E] float-right '>Läs mer om Humbaur <span><GrFormNextLink className='text-[#AD343E] inline-block' /></span></p>
                </div>
                </div>
                 </div>
                <div className='sm:pb-8 flex h-full flex-col sm:gap-20'>
                <div className='relative'>
                  <img src={TrailerTwo} alt="NPI service personal" className="pt-4" />
                <div className=' bg-white py-6 px-4 sm:px-12 shadow-lg sm:rounded-xl'>
                    <h4 className='font-bold text-3xl sm:text-4xl'>Cheval Liberté</h4>
                    <p>För 10:e året i rad toppar Cheval Liberté som Sveriges mest sålda vagn (2010-2020). Har du svårt att välja vilken Cheval? Kom till oss så hjälper vi dig! Vi har de flesta modellerna hemma. Cheval Liberté är Sveriges prisvänligaste vagn med snygg design och bra kvalité!</p>
                    <p className='text-[#AD343E]  float-right'>Läs mer om Cheval Liberté<GrFormNextLink className='text-[#AD343E] inline-block' /></p>
                </div>
                </div>
                </div>
           
        </div>
    </div>
    </div>
  )
}

export default TrailerSection