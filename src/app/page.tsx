import Hero from "@/components/hero/Hero";
import AboutUs from "@/components/AboutUS";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {ThreeDCardDemo} from "@/components/speakers/3Dcard";
import Image from "next/image";
import { NavbarFloat } from "@/components/navbar/Navbar";
import TimeLine from "@/components/timeline/TimeLine";

export default function Home() {
  return (
    <>
    {/* <TracingBeam className=""> */}
    <NavbarFloat/>
    <Hero />
    <TimeLine/>
    <AboutUs />
    </>
  );
}
