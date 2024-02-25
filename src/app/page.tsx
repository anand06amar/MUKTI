import Hero from "@/components/hero/Hero";
import AboutUs from "@/components/footer/AboutUS";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import  {NavbarFloat}  from "@/components/navbar/Navbar";
import Sponsors from "@/components/footer/Sponsors";
import { ThreeDCardDemo } from "@/components/speakers/3Dcard";
import Counter from "@/components/countdown/counter";
import TimeLine from "@/components/timeline/TimeLine";

export default function Home() {
  return (
    <>
    <NavbarFloat/>
    <Hero />
    <Counter/>
    <ThreeDCardDemo />
    <TimeLine/>
    <Sponsors />
    <AboutUs />
    </>
  );
}
