import Hero from "@/components/hero/Hero";
import AboutUs from "@/components/AboutUS";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <FloatingNav navItems={[{name:'Register' , link:'Register'} , {name:'TimeLine' , link:'helo'}]}/>
      <AboutUs />
    </main>
  );
}
