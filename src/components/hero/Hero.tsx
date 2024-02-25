import React from 'react'
import { Spotlight } from './Spotlight'

function Hero() {
  return (
    <>
        <div className='flex flex-col gap-4 justify-center items-center mx-auto max-w-[80%] h-screen'>
            <Spotlight fill='#AE445A' className='top-0 left-30'/>
            <h1 className='uppercase text-7xl font-bold text-white ml-60 mr-auto'>Mukti</h1>
            <p className='max-w-3xl font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quis quia iure necessitatibus corrupti facere recusandae laudantium ullam minus quaerat?</p>
        </div>
    </>
  )
}

export default Hero