import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Horses from '../../assets/häst.jpg'

const Home = () => {
  return (
   <div name="services" className='w-full h-full mt-4 sm:mt-12 mb-8'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1200px] w-full grid items-center justify-items-center sm:grid-cols-2'>
                <div className='pb-8 px-4 sm:pr-16'>
                <div className='max-w-[1000px] w-full grid gap-4 text-start'>
                    <h4 className='text-3xl sm:text-4xl text-black font-bold'>Om oss</h4>
                    <p className='text-[#AD343E] text-xl font-bold'>Familjeföretaget som brinner för vår försäljning</p>
                    <p>
                        Vårt familjeföretag Österlens Hästtransportcenter AB startade 1992 på gården i Löderup. Företaget består av Viktor som jobbar med försäljning och kundkontakter runt om i Sverige, Per-Göran som servar och bokför, Carina lite av varje och Charlotte kommer ni träffa på mässor vi besöker. Vår huvudsakliga inriktning är försäljning av hästtransporter och släpvagnar. Vi satsar på Europas absolut bästa vagnar: Cheval Liberté, Humbaur och Debon.B-kortslastbilar finns för försäljning av märket Nuyts.

                    Varmt välkomna till oss på Österlens Hästtransportcenter, här hittar du mycket att välja mellan.
                    </p>
                </div>
            </div>
            
            <div className="img-container">
                <img src={Horses} className="sm:rounded-md" alt="" />
            </div>
          
        </div>
    </div>
    </div>
  )
}

export default Home