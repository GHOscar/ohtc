import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Header = () => {
  return (
   <div name="services" className='w-full h-full mt-4 sm:mt-12 mb-8'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1200px] w-full grid items-center justify-items-center sm:grid-cols-2'>
                <div className='pb-8 px-4'>
                <div className='max-w-[1000px] w-full grid gap-4 text-start'>
                    <h4 className='text-3xl sm:text-4xl text-black font-bold'>Vi satsar på Europas absolut bästa hästtransporter</h4>
                    <p className='text-[#AD343E] text-xl font-bold'>Hambaur & Cheval Liberté</p>
                    <p>
                        Österlens Hästtransportcenter importerar vagnarna i egen regi utan mellanhänder. Verksamheten bedrivs från vår gård i Löderup, öster om Ystad. Vi har ett stort lager av nya och begagnade hästtransporter för snabb leverans. Vi säljer över hela Sverige och har goda möjligheter att hitta ett lämpligt leveranssätt. Vi har också försäljning av Nuyts B-körkortslastbil med hög kvalité Vi har ombud som bedriver korttidsuthyrning på flera olika ställen i södra Sverige.
</p>
                </div>
            </div>
            
            <div className='sm:px-6 flex items-center justify-center max-w-fit px-4 max-h-[70%] flex-col rounded-xl bg-[#E0EDFF] shadow-custom sm:ml-36 mx-4'>
                <div className='sm:px-4 py-4 h-full'>
                <h2 className='text-[#004A79] font-bold text-2xl pt-8'>Våra öppettider</h2>
                <ul className='py-4 font-bold  text-[#4A4A4A]'>
                    <li>
                        Måndag - Fredag: 9:00 - 17:00
                    </li>
                    <li>
                        Lördag: 9:00 - 15:00
                    </li>
                    <li>
                        Söndag: Stängt
                    </li>
                </ul>
            </div>
            </div>
          
        </div>
    </div>
    </div>
  )
}

export default Header