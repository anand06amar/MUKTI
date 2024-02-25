import Hero from "@/components/hero/Hero";
import AboutUs from "@/components/AboutUS";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import { NavbarFloat } from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
    <NavbarFloat/>
    <Hero />
    <AboutUs />
    </>
  );
}
