import React from 'react';
import { FaDiscord, FaMedium, FaTwitter, FaYoutube } from 'react-icons/fa';

const links = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
        <div className="container mx-auto items-center flex flex-col md:flex-row justify-between gap-4 px-4 ">
            <p className='text-center text-sm md:text-left'>&copy; Nova 2024. All rights reserved</p>
            <div className="flex justify-center gap-4 md:justify-start">
                {links.map((link)=>(
                    <a href={link.href} key={link} target='_blank' rel='noopener noreferrer' className='text-black transition-colors duration-500 ease-in-out hover:text-white'>{link.icon}</a>
                ))}
            </div>
            <a href="#privacy-policy" className='text-center text-sm hover:underline md:text-right'>Privacy Policy</a>
        </div>
    </footer>
  )
}

export default Footer