"use client"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "../ui/moving-border";
import Image from "next/image";

const Showdown = () => {

    const handleClick = () => {
        console.log("Hello");
        window.open('https://showdownn.nitdgplug.org/', '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="relative">
            {/* <BackgroundGradientAnimation
        gradientBackgroundStart="#000000"
        gradientBackgroundEnd="#000000"
        pointerColor="white"
        firstColor="64, 158, 255"   
        secondColor="0, 44, 143"    
        thirdColor="0, 44, 143"     
        fourthColor="64, 158, 255"  
        fifthColor="64, 158, 255"   
              > */}
            <div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <Image
                        src="/images/purple.svg"
                        alt="."
                        layout="fill"
                        objectFit="cover"
                        className="-z-10"
                    />
                </div>
            </div>
            <div className="flex flex-col-reverse text-center lg:text-left lg:flex-row lg:justify-between items-center mx-auto max-w-[80%] h-screen overflow-hidden">
                <div className="z-10 flex flex-col gap-6 lg:gap-8 mt-6 lg:mt-32 items-center lg:items-left">
                    <h1 className="uppercase z-10 text-4xl lg:text-8xl font-bold text-gray-300   ">
                        Showdown
                    </h1>
                    <p className="lg:max-w-3xl z-10 font-light lg:text-xl opacity-80">
                        Showdownn is NIT Durgapur’s only-premier hackathon, uniting bright minds to tackle real-world challenges in Healthcare and Finance. Compete with top-talented individuals, innovate with purpose, and showcase your skills in an intense 12-hour offline hackathon. With two domains and six problem statements, this hackathon is designed to push boundaries.

                        Join us to code, create, and conquer!
                    </p>
                    <div onClick={handleClick} className="w-fit h-fit">
                        <Button
                            borderColor='blue-600'
                            borderRadius="2.25rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            Website
                        </Button>
                    </div>

                </div>
                <Image src={"/images/showdown.webp"} alt="Mukti logo" width={600} height={600} className="hidden xl:block" />
                <Image src={"/images/showdown.webp"} alt="Mukti logo" width={200} height={200} className="xl:hidden mt-24" />
                {/* <Image src={"/images/mukti.svg"} alt="Mukti logo" width={300} height={300} className="xl:hidden md:block mt-24 "/> */}
                {/* <div className="bg-clip-text absolute top-60 right-10 lg:top-28 text-7xl lg:text-hero-font text-transparent drop-shadow-2xl tracking-widest font-bold bg-gradient-to-b from-white/40 to-white/10 opacity-70">
            MUKTI
          </div> */}
            </div>
            {/* </BackgroundGradientAnimation> */}
        </div>
    )
}

export default Showdown