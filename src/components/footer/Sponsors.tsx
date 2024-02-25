import React from 'react'

function Sponsors() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#AE445A] to-[#451952]">
            <h1 className="text-5xl mt-4 font-bold text-center">Our Sponsors</h1>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
            <img
                src="https://assets.aceternity.com/demos/1.png"
                alt="sponsor"
                className="h-20 w-20"
            />
            <img
                src="https://assets.aceternity.com/demos/2.png"
                alt="sponsor"
                className="h-20 w-20"
            />
            <img
                src="https://assets.aceternity.com/demos/3.png"
                alt="sponsor"
                className="h-20 w-20"
            />
            <img
                src="https://assets.aceternity.com/demos/4.png"
                alt="sponsor"
                className="h-20 w-20"
            />
            <img
                src="https://assets.aceternity.com/demos/5.png"
                alt="sponsor"
                className="h-20 w-20"
            />
            </div>

        </div>
    </div>
  )
}

export default Sponsors