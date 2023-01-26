import React from 'react'
import TrailerOne from '../../assets/singlealu-3.jpeg'
import TrailerTwo from '../../assets/R6__2836.jpeg'
import { GrFormNextLink } from 'react-icons/gr'
import { BsSliders } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'


const TrailerGrid = () => {
  return (
    <div className=' flex flex-col items-center justify-center w-full h-full mb-20'>
        <div className="pb-4 px-4 mx-40 text-center mb-20">
        <h2 className='font-bold text-3xl sm:text-5xl'>Köp din nya hästtransport från oss på Österlens hästtransportcenter</h2>
        <p>i på Österlens Hästtransportcenter importerar själva våra hästtransporter. Humbaur är en tysk kvalitetsvagn och tillverkas i Gersthofen. Cheval Liberté är en populär fransk vagn som tillverkas i Polen.</p>
        </div>

        <div className="grid grid-cols-3 gap-8 sm:mx-4">
            <div className="filters pl-4">
                <div className="categories flex flex-col mb-8">
                    <p className="font-bold">Kategori</p>
                    <button className='border border-gray-300 rounded-sm w-[280px] pl-2 text-left py-2 my-2'>Släpvagnar</button>
                    <button className='border border-gray-300 rounded-sm w-[280px] pl-2 text-left py-2 my-2'>Hästtransporter</button>
                    <button className='border border-gray-300 rounded-sm w-[280px] pl-2 text-left py-2 my-2'>Däck</button>
                </div>
                <div className="brands flex flex-col mb-8">
                    <p className="font-bold">Varumärke</p>
                    <button className='border border-gray-300 rounded-sm w-[280px] pl-2 text-left py-2 my-2'>Hambaur</button>
                    <button className='border border-gray-300 rounded-sm w-[280px] pl-2 text-left py-2 my-2'>Debon</button>
                    <button className='border border-gray-300 rounded-sm w-[280px] pl-2 text-left py-2 my-2'>Tiki Trailer</button>
                    <button className='border border-gray-300 rounded-sm w-[280px] pl-2 text-left py-2 my-2'>Debon</button>
                </div>
                <div className="models mb-8">
                    <p className="font-bold">Modell</p>
                    <button className='border border-gray-300 rounded-sm w-[280px] pl-2 text-left py-2 my-2'>Tippsläp</button>
                    <button className='border border-gray-300 rounded-sm w-[280px] pl-2 text-left py-2 my-2'>Flaksläp</button>
                    <button className='border border-gray-300 rounded-sm w-[280px] pl-2 text-left py-2 my-2'>Skåpsläp</button>
                    <button className='border border-gray-300 rounded-sm w-[280px] pl-2 text-left py-2 my-2'>Maskinsläp</button>
                </div>
                <div className="filtering">
                    <div className="flex items-center mb-2">
                        <BsSliders className='inline-block mr-2' />
                    <p className="font-bold">Filtrera</p>
                    </div>
                    <p className="font-bold">Totalvikt</p>
                    <button className='border border-gray-300 rounded-sm 
                    w-[314px] pl-2 text-left py-2 my-2'>Totalvikt
                    <RiArrowDropDownLine className='inline-block float-right w-6 h-6' />
                    </button>
                    <p className="font-bold">Längd</p>
                    <button className='border border-gray-300 rounded-sm w-[314px] pl-2 text-left py-2 my-2'>Längd
                    <RiArrowDropDownLine className='inline-block float-right w-6 h-6' />
                    </button>
                </div>
                <div className="price">
                    <p className="font-bold mb-4">Pris</p>
                    <div className="price-bar h-2 mr-12 bg-[#AD343E]"></div>
                    <div className="flex justify-between mt-2">
                    <p className='text-[#7C7C7C]'>Min: 3 000 sek</p>
                    <p className='text-[#7C7C7C] mr-12'>Max: 80 000 sek</p>
                    </div>
                </div>
                <div className="filter-button flex mt-2 justify-between">
                    <button className='uppercase font-bold text-[#AD343E] bg-[#EFBEC2] px-8 py-2 rounded-md'>Filtrera</button>
                    <button className='uppercase font-bold mr-12 text-[#7C7C7C] bg-[#F9F9F9] px-8 py-2 rounded-md'>Rensa</button>
                </div>
            </div>



            <div className="trailer-col-one">
                <div className='mb-12 sm:mb-28 md:mb-0 relative bg-[#F9F9F9]'>
                  <img src={TrailerOne} alt="NPI service personal" />
                <div className='py-6 px-4 sm:mb-12 pb-12 sm:px-12 shadow-lg sm:rounded-xl'>
                    <h4 className='font-bold text-3xl sm:text-4xl'>HUK 2700 (El-Tipp standard)</h4>
                    <p className='h-fit pb-2'>Ett smidigt och lättkört tippsläp med perfekt storlek för den lilla entreprenaden firman!</p>
                    <p><span className="font-bold">Mått: </span>270x150</p>
                    <p><span className="font-bold">Totalvikt: </span>1 000-2 700 kg</p>
                    <p><span className="font-bold">Tjänstevikt: </span>550 kg</p>
                    <p><span className="font-bold">Färger: </span>Aluminium</p>
                    <p className='text-[#AD343E] float-right font-black'>PRIS: 48 000:-<br /><span className='font-light'>exkl. moms</span></p>
                </div>
                </div>
                <div className='md:mb-0 relative bg-[#F9F9F9]'>
                  <img src={TrailerOne} alt="NPI service personal" />
                <div className='py-6 px-4 sm:mb-12 pb-12 sm:px-12 shadow-lg sm:rounded-xl'>
                    <h4 className='font-bold text-3xl sm:text-4xl'>HUK 2700 (El-Tipp standard)</h4>
                    <p className='h-fit pb-2'>Ett smidigt och lättkört tippsläp med perfekt storlek för den lilla entreprenaden firman!</p>
                    <p><span className="font-bold">Mått: </span>270x150</p>
                    <p><span className="font-bold">Totalvikt: </span>1 000-2 700 kg</p>
                    <p><span className="font-bold">Tjänstevikt: </span>550 kg</p>
                    <p><span className="font-bold">Färger: </span>Aluminium</p>
                    <p className='text-[#AD343E] float-right font-black'>PRIS: 48 000:-<br /><span className='font-light'>exkl. moms</span></p>
                </div>
                </div>
            </div>



            
            <div className="trailer-col-two">
                <div className='md:mb-0 relative bg-[#F9F9F9]'>
                  <img src={TrailerOne} alt="NPI service personal" />
                <div className='py-6 px-4 mb-12 pb-12 sm:px-12 shadow-lg sm:rounded-xl'>
                    <h4 className='font-bold text-3xl sm:text-4xl'>HUK 2700 (El-Tipp standard)</h4>
                    <p className='h-fit pb-2'>Ett smidigt och lättkört tippsläp med perfekt storlek för den lilla entreprenaden firman!</p>
                    <p><span className="font-bold">Mått: </span>270x150</p>
                    <p><span className="font-bold">Totalvikt: </span>1 000-2 700 kg</p>
                    <p><span className="font-bold">Tjänstevikt: </span>550 kg</p>
                    <p><span className="font-bold">Färger: </span>Aluminium</p>
                    <p className='text-[#AD343E] float-right font-black'>PRIS: 48 000:-<br /><span className='font-light'>exkl. moms</span></p>
                </div>
                </div>
                <div className='md:mb-0 relative bg-[#F9F9F9]'>
                  <img src={TrailerOne} alt="NPI service personal" />
                <div className='py-6 px-4 mb-12 pb-12 sm:px-12 shadow-lg sm:rounded-xl'>
                    <h4 className='font-bold text-3xl sm:text-4xl'>HUK 2700 (El-Tipp standard)</h4>
                    <p className='h-fit pb-2'>Ett smidigt och lättkört tippsläp med perfekt storlek för den lilla entreprenaden firman!</p>
                    <p><span className="font-bold">Mått: </span>270x150</p>
                    <p><span className="font-bold">Totalvikt: </span>1 000-2 700 kg</p>
                    <p><span className="font-bold">Tjänstevikt: </span>550 kg</p>
                    <p><span className="font-bold">Färger: </span>Aluminium</p>
                    <p className='text-[#AD343E] float-right font-black'>PRIS: 48 000:-<br /><span className='font-light'>exkl. moms</span></p>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default TrailerGrid