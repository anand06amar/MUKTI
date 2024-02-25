import Hero from "@/components/hero/Hero";
import AboutUs from "@/components/footer/AboutUS";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero />
    <AboutUs />
    </>
  );
}
