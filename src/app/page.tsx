import Hero from "@/components/hero/Hero";
import AboutUs from "@/components/AboutUS";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {ThreeDCardDemo} from "@/components/speakers/3Dcard";
import Image from "next/image";
import { NavbarFloat } from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
    <NavbarFloat/>
    <Hero />
    <AboutUs />
      <ThreeDCardDemo>
        <Image
          src="/images/speaker_3.png"
          // height="1000"
          // width="1000"
          className=" object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </ThreeDCardDemo>
      <ThreeDCardDemo>
        <Image
          src="/images/speaker_3.png"
          // height="1000"
          // width="1000"
          className=" object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </ThreeDCardDemo>
      <ThreeDCardDemo>
        <Image
          src="/images/speaker_3.png"
          // height="1000"
          // width="1000"
          className=" object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </ThreeDCardDemo>
    </>
  );
}
