import AboutUs from "@/components/AboutUS";
import Navbar from "@/components/navbar/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {/* <FloatingNav navItems={name}/> */}
    <Navbar/>
    <TracingBeam children />

      hello mukti
      <Spotlight/>

    </main>
  );
}
