import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "../ui/moving-border";
import Image from "next/image";
import { DialogDemo } from "../ui/registerForm";

function Hero() {
  return (
    <>
      <BackgroundGradientAnimation
        gradientBackgroundStart="#000000"
        gradientBackgroundEnd="#000000"
        pointerColor="white"
        firstColor="174, 68, 90"
        secondColor="69, 25, 82"
        thirdColor="69, 25, 82"
        fourthColor="174, 68, 90"
        fifthColor="174, 68, 90"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/images/Ellipse5.png"
            alt="."
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col text-center lg:text-left lg:flex-row lg:justify-between items-center mx-auto max-w-[80%] h-screen overflow-hidden">
          <Image src={"/images/mukti.svg"} alt="Mukti logo" width={600} height={600} className="hidden xl:block"/>
          <Image src={"/images/mukti.svg"} alt="Mukti logo" width={200} height={200} className="xl:hidden mt-24"/>
          {/* <Image src={"/images/mukti.svg"} alt="Mukti logo" width={300} height={300} className="xl:hidden md:block mt-24 "/> */}
          {/* <div className="bg-clip-text absolute top-60 right-10 lg:top-28 text-7xl lg:text-hero-font text-transparent drop-shadow-2xl tracking-widest font-bold bg-gradient-to-b from-white/40 to-white/10 opacity-70">
            MUKTI
          </div> */}
          <div className="z-10 flex flex-col gap-6 lg:gap-8 mt-6 lg:mt-32 items-center lg:items-left">
          <h1 className="uppercase z-10 text-4xl lg:text-8xl font-bold text-gray-300   ">
            Mukti
          </h1>
          <p className="lg:max-w-3xl z-10 font-light lg:text-xl opacity-80">
          NIT Durgapur&apos;s official FOSS conference MUKTI, a celebration of Free and Open Source Software (FOSS)!
Dive into a vibrant environment where top FOSS innovators share real-world insights. Connect with like-minded enthusiasts and speakers, exploring the transformative potential of open-source software.
          </p>
          {/* <Button
            borderRadius="2.25rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Register Yourself
          </Button> */}
          <DialogDemo/>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </>
  );
}

export default Hero;