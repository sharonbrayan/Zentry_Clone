import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';


const navItems = ['Nexus', 'Vault', 'Prologue', 'about', 'Contact'];
const Navbar = () => {

    const [isAudioPlaying, setisAudioPlaying] = useState(false);
    const [isIndicatorActive, setisIndicatorActive] = useState(false);
    const [lastScrollY, setlastScrollY] = useState(0);
    const [isNavVisible, setisNavVisible] = useState(true);
    const navContainerRef = useRef(null);
    const audioElementRef = useRef(null);
    

    const {y:currenScrollY}=useWindowScroll();

    useEffect(() => {
        if(currenScrollY===0){
            setisNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
        } else if(currenScrollY>lastScrollY){
             setisNavVisible(false);
            navContainerRef.current.classList.add('floating-nav')
        }else if(currenScrollY<lastScrollY){
            setisNavVisible(true);
            navContainerRef.current.classList.add('floating-nav')
        }
            setlastScrollY(currenScrollY);
    }, [currenScrollY,lastScrollY])
    
    useEffect(() => {
        gsap.to(navContainerRef.current,{
            y:isNavVisible?0:-100,
            opacity:isNavVisible?1:0,
            duration:0.2
        })
    }, [isNavVisible])
    

    const toggleaudioInicator = () => {
        setisAudioPlaying((prev) => !prev);
        isIndicatorActive((prev) => !prev);
    }

    useEffect(() => {
      if(isAudioPlaying){
        audioElementRef.current.play();
      }else{
        audioElementRef.current.pause();
      }
    }, [isAudioPlaying])
    

    return (
        <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 transition-all border-none duration-700 sm:inset-x-6'>
            <header className='absolute top-1/2 w-full -translate-y-1/2'>
                <nav className='flex size-full items-center justify-between p-4'>
                    <div className='flex items-center gap-7'>
                        <img src="/img/logo.png" alt="logo" className='w-10' />
                        <Button id="product-button" title="Products" rightIcon={<TiLocationArrow />} containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1" />
                    </div>
                    <div className='flex h-full items-center'>
                        <div className='hidden md:block'>
                            {navItems.map((item) => (
                                <a key={item} href={`#${item.toLocaleLowerCase()}`} className='nav-hover-btn'>{item}</a>
                            ))}
                        </div>
                        <button onClick={toggleaudioInicator} className='ml-10 flex items-center space-x-0.5'>
                            <audio src="/audio/loop.mp3" loop ref={audioElementRef} className='hidden' />
                                {[1, 2, 3, 4].map((bar) => (
                                    <div key={bar} className={`indicator-line h-1 w-px rounded-full bg-white transition-all duration-200 ease-in-out ${isIndicatorActive ? 'active' : ''} `} style={{ '--animation-order': bar }}></div>
                                ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar