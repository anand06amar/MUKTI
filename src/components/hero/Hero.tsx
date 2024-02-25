import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "../ui/moving-border";
import Image from "next/image";

function Hero() {
  return (
    <>
      <BackgroundGradientAnimation
        gradientBackgroundStart="#000000"
        gradientBackgroundEnd="#000000"
        pointerColor="white"
        firstColor="243, 159, 90"
        secondColor="243, 159, 90"
        thirdColor="243, 159, 90"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/images/Ellipse5.png"
            alt="."
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center mx-auto max-w-[80%] h-screen overflow-hidden">
          <div className="bg-clip-text absolute top-60 lg:top-28 text-7xl lg:text-hero-font text-transparent drop-shadow-2xl tracking-widest font-bold bg-gradient-to-b from-white/40 to-white/10 opacity-70">
            MUKTI
          </div>
          <h1 className="uppercase z-10 text-3xl lg:text-7xl font-bold text-white lg:ml-60 mr-auto">
            Mukti
          </h1>
          <p className="lg:max-w-3xl z-10 font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            quis quia iure necessitatibus corrupti facere recusandae laudantium
            ullam minus quaerat?
          </p>
          <Button
            borderRadius="2.25rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Register Yourself
          </Button>
        </div>
      </BackgroundGradientAnimation>
    </>
  );
}

export default Hero;
