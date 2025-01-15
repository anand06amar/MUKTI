import Hero from "@/components/hero/Hero";
import AboutUs from "@/components/footer/AboutUS";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import { NavbarFloat } from "@/components/navbar/Navbar";
import Sponsors from "@/components/footer/Sponsors";
import { ThreeDCardDemo } from "@/components/speakers/3Dcard";
import Counter from "@/components/countdown/counter";
import TimeLine from "@/components/timeline/TimeLine";
import { Card } from "@/components/speakers/Card";
import { Card2 } from "@/components/speakers/Card2";
import { SpeakerCards } from "@/components/speakers/speaker-cards";
import Timeline from "@/components/timeline/TimeLine";
import ComingSoon from "@/components/ComingSoon/ComingSoon";
import Showdown from '@/components/showdown/Showdown'
import Header from '@/components/header/Header'


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <NavbarFloat />
      <Hero />
      <Counter />
      <Showdown />
      <div className="flex relative justify-center text-3xl lg:text-5xl font-bold font-lalezar z-40 my-16">
        Our Speakers
      </div>
      <SpeakerCards/>
      <Timeline />
        {/* <ComingSoon/> */}
      {/* <div className="flex flex-col lg:flex-row justify-center gap-y-16 mb-16">
        <Card />
        <Card2 />
      </div> */}
      <Sponsors />
      <AboutUs />
    </div>
  );
}
