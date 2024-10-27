import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='pt-20 pb-12 bg-black'>
            <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
                <div>
                    <div className='flex items-center space-x-2'>
                        <div className='md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col'>
                            <FaHouse />
                        </div>
                        <h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>HomeHub</h1>
                    </div>
                    <p className='text-gray-300 mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p className='text-gray-300 mt-4 font-semibold'>example@gmail.com</p>
                    <p className='text-gray-300 mt-4 font-semibold'>+1234567899</p>
                    <div className="flex items-center space-x-4 mt-6">
                        <FaFacebook className='w-6 h-6 text-blue-600' />
                        <FaTwitter className='w-6 h-6 text-sky-500' />
                        <FaYoutube className='w-6 h-6 text-red-700' />
                        <FaInstagram className='w-6 h-6 text-pink-600' />
                    </div>
                </div>
                <div className="md:mx-auto">
                    <h1 className='footer_heading'>Popular Search</h1>
                    <p className='footer_links'>Apartment For Rent</p>
                    <p className='footer_links'>Apartment Low To High</p>
                    <p className='footer_links'>Offices For Buy</p>
                    <p className='footer_links'>Offices For Rent</p>
                </div>
                <div className="lg:mx-auto">
                    <h1 className='footer_heading'>Quick Links</h1>
                    <p className='footer_links'>Terms pf use</p>
                    <p className='footer_links'>Privacy Policy</p>
                    <p className='footer_links'>Pricing Plans</p>
                    <p className='footer_links'>Our Services</p>
                    <p className='footer_links'>Contact Support</p>
                    <p className='footer_links'>Careers</p>
                    <p className='footer_links'>FAQs</p>
                </div>
                <div className="md:mx-auto">
                    <h1 className='footer_heading'>Discover</h1>
                    <p className='footer_links'>Miami</p>
                    <p className='footer_links'>Los Angeles</p>
                    <p className='footer_links'>Chicago</p>
                    <p className='footer_links'>New York</p>
                    <p className='footer_links'>London</p>
                </div>
            </div>
            <p className="text-center pt-4 text-base text-white opacity-70">
                @copyright 2024 || All Right Reserved
            </p>
        </div>
    )
}

export default Footer