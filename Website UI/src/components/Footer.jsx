import React from 'react'

import {
    FaDiscord,
    FaGithub,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-slate-900 text-gray-300 py-4 px-2' id='contact'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Blockchain</li>
                    <li className='py-1'>DAOs</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Documentation</li>
                    <li className='py-1'>Guides</li>
                    <li className='py-1'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Press</li>
                    <li className='py-1'>Partners</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2023  <span className='font-bold text-lg mr-5  text-[#f9004d]'>Fucha-Bins</span>All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
        <a href="https://discord.gg/nUKaH5fz"><FaDiscord /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://twitter.com/chatafisha?t=Wgh3Tm_k60D5VqV9GxcONQ&s=09"><FaTwitter /></a>
        <a href="https://github.com/Rasta669/Fucha-on-FVM"><FaGithub /></a>
        </div>
        </div>
    </div>
  )
}

export default Footer