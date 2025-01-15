"use client"
import Image from 'next/image'
import React from 'react'

const Header = () => {

    return (
        <div className='hidden lg:block'>
            <div className='w-[150px] absolute top-2 left-5 flex items-center justify-between'>
                <a src="https://www.nitdgp.ac.in/" target='_black' className='z-10'>
                    <Image src={'/images/nit-dgp-logo.png'} alt={'NITDurgapur'} width={60} height={60} onClick={() => { window.open('https://www.nitdgp.ac.in/', '_blank', 'noopener,noreferrer') }} />
                </a>
                <a src="https://nitdgplug.org/" target='_black' className='z-10'>
                    <Image src={'/images/glug-logo.png'} alt={'GLUG'} width={70} height={70} onClick={() => { window.open('https://nitdgplug.org/', '_blank', 'noopener,noreferrer') }} />
                </a>
            </div>
            <div className='w-[150px] absolute top-2 right-5 flex items-center justify-between'>
                <Image src={'/images/mukti.svg'} alt={'MUKTI'} width={50} height={50} />
                <a src="https://showdownn.nitdgplug.org/" target='_black' className='z-10'>
                    <Image src={'/images/showdown.webp'} alt={'Showdown'} width={80} height={80} />
                </a>
            </div>
        </div>
    )
}

export default Header