import React from 'react'
import Horses from '../../assets/springandehästar.jpg'

const Profile = () => {
  return (
   <div name="services" className='w-full h-full mt-4 sm:mt-12 mb-8'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <h4 className='font-bold text-3xl sm:text-4xl mb-4'>Profilryttare</h4>
            <div className='max-w-[1200px] w-full grid items-center justify-items-center sm:grid-cols-2'>
                <div className='pb-8 px-4 pr-16'>
                <div className='max-w-[1000px] w-full grid gap-4 text-start'>
                    <h4 className='text-3xl sm:text-4xl text-black font-bold'>Österlens Hästtransportcenters profilryttare</h4>
                        <p><span className='font-bold'>Hoppryttare:</span> Alexandra Eriksson<br />
                        <span className='font-bold'>Dressyrryttare:</span> Ellinor Gasslander<br />
                        <span className='font-bold'>Juniorryttare dressyr:</span> Nellie Nilsson <br />
                        <span className='font-bold'>Islandshästridning:</span> Magnús Skúlason (Brösarpsgården)<br />
                        <span className='font-bold'>Körning:</span> Axel Ollin <br />
                        Vi sponsrar även <span className='font-bold'><a href="https://www.facebook.com/hashtag/%C3%B6sterlensh%C3%A4sttransportcenterpowerpinglor/" target="_blank">#Österlenshästtransportcenterpowerpinglor</a></span><br />
                        I laget rider: Jennie Seyfried, Ingela Olsson, Petra Ekstrand och Mocke Linder</p>
                     </div>
                
            </div>
            
            <div className="img-container">
                <img src={Horses} className="sm:rounded-md" alt="Springande hästar i en hage en sommarkväll" />
            </div>
          
        </div>
    </div>
    </div>
  )
}

export default Profile