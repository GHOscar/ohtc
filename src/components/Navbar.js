import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/ohtc.jpeg'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'

const Navbar = () => {
    // Makes the state true if set to false on click and false if it's set to true 
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const [drop, setDrop] = useState(false)
    const handleDrop = () => setDrop(!drop)

  return (
    <div className='fixed z-10 shadow-md w-full h-[80px] flex justify-between items-center px-8 bg-white'>
        <div>
            <a href="/">
            <img src={Logo} alt="Logo image" style={{ width: '100px' }} />
            </a>
        </div>

        
            <ul className='hidden md:flex items-center text-black uppercase font-bold'>
                <li className='px-4'>

                    {/* handleDrop looks for a click on the dropdown menu */}
                    <div onClick={handleDrop} className="cursor-pointer">
                    
                    Våra produkter {!drop ? <RiArrowDropDownLine className='inline-block h-8 w-8' /> : <RiArrowDropUpLine className='inline-block h-8 w-8' />}
                   
                    <div className="">
                    <ul className={!drop ? 'hidden' : 'font-bold absolute flex-row w-full left-0 cursor-pointer text-lg  text-[#AD343E]  bg-white flex justify-evenly items-left pl-4 pt-8'}>
                        <ul className='hasttransporter'><a href="/slapvagnar">Släpvagnar</a>
                        <li>Humbaur Tippsläp</li>
                        <li>Humbaur flaksläp</li>
                        <li>Humbaur skåpsläp</li>
                        <li>Humbaur maskinsläp</li>
                        <li>Debon skåpsläp</li>
                        <li>Debon Tippsläp</li>
                        <li>Debon Flaksläp </li>
                        <li>Tiki trailer</li>
                        </ul>
                        <li className='hasttransporter'><a href="">Hästtransporter</a>
                        <li>Cheval Libertép</li>
                        <li>Humbaur</li>
                        <li>Equi Trek</li></li>
                        <li className='hasttransporter'><a href="">Däck</a>
                        <li>Däckmärke 1</li>
                        <li>Däckmärke 2</li>
                        <li>Däckmärke 3</li>
                        </li>
                    </ul>
                    </div>
                    </div>
                </li>
                <li className='px-4'>
                     <a href="">
                    Finansiering
                    </a>
                </li>
                <li className='px-4'>
                    <a href="">
                    Begagnat
                    </a>
                </li>
                <li className='px-4'>
                    <a href="/kontakt">
                    Kontakt
                    </a>
                </li>
            </ul>
        
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer text-black'>
            {!nav ? <FaBars /> : <FaTimes />} 
        </div>

        {/* Mobile menu */}
        
            <ul className={!nav ? 'hidden' : 'absolute cursor-pointer text-lg top-[80px] left-0 w-[70%] text-black h-[90vh] bg-[#F8F8F8] flex flex-col items-left pl-4 pt-8'}>
                <li className='py-4'>
                <div onClick={handleDrop}>
                     
                    Våra produkter {!drop ? <RiArrowDropDownLine className='inline-block ml-4 h-8 w-8' /> : <RiArrowDropUpLine className='inline-block ml-4 h-8 w-8' />}
                    <ul className={!drop ? 'hidden' : 'font-bold relative left-0 flex-row  cursor-pointer text-lg  text-[#AD343E]  bg-[#F8F8F8]  items-left pl-2 pt-4'}>
                        <li className='nav-drop'><a href="">Hästtransporter</a></li>
                        <li className='nav-drop'><a href="/slapvagnar">Släpvagnar</a></li>
                        <li className='nav-drop'><a href="">Däck</a></li>
                        </ul>
                    </div>
                    </li>
                <li className='py-6 uppercase'>
                     <a href="">
                    Finansiering
                    </a>
                    </li>
                <li className='py-6 uppercase'>
                     <a href="">
                    Begagnat
                    </a>
                   </li>
                <li className='py-6 uppercase'>
                     <a href="">
                    Kontakt
                    </a>
                   </li>
            </ul>
    </div>
  )
}

export default Navbar