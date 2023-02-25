import React, { useState } from 'react'
import {BiMenuAltLeft} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"

const Navbar = () => {

    const[nav , setNav] = useState(false)

    const HandleNav = () =>{
        setNav(!nav)
    }

  return (
    // desktop
    <div className='w-screen h-[80px] z-10 bg-black/95 sticky top-0 drop-shadow-lg'>
        <div className='px-5 w-full h-full flex justify-between items-center'>
            <div className='flex items-center'>
                <h1 className='font-bold text-xl text-white mr-5 sm:text-4xl '>Fucha<span className='font-bold text-xl mr-5 sm:text-4xl text-[#f9004d]'>-Bins</span></h1>
                <ul className='hidden md:flex text-white'>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="#whoweare">Who We are</a>
                        </li>
                        <li>
                            <a href="#impact">Impact</a>
                        </li> 
                      
                         <li>
                            <a href="#marketplace">Marketplace</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                    <button className='px-8 py-3 text-white bg-[#f9004d]  rounded-md font-semibold'>Mint</button>
            </div>

            {/* hamburger menu */}
            <div className='md:hidden' onClick={HandleNav}>
                {
                    !nav? <BiMenuAltLeft size={30} className="cursor-pointer text-white"/> : <AiOutlineClose size={30} className="cursor-pointer text-white"/>
                }
            </div>
        </div>

        {/* mobile navbar */}
  
                <ul className= {!nav ? "hidden " : 'w-full absolute px-8 bg-black/95'}>
                         <li className='border-b-1 w-full text-white'>
                            <a href="/">Home</a>
                        </li>
                        <li className='border-b-1 w-full text-white'>
                            <a href="#whoweare">Who we are</a>
                        </li>
                        <li className='border-b-1 w-full text-white'>
                            <a href="#impact">Impact</a>
                        </li>
                        <li className='border-b-1 w-full text-white'>
                            <a href="#market">MarketPlace</a>
                        </li>
                        <li className='border-b-1 w-full text-white'>
                            <a href="#contact">Contact</a>
                        </li>
                        <div className='flex flex-col my-4 gap-4'>
                        <button className='px-8 py-3 text-white bg-[#f9004d]  rounded-md font-semibold'>Mint</button>
                        </div>
                </ul>
    </div>
  )
}

export default Navbar