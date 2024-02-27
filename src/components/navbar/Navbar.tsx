"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function NavbarFloat() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 w-[90%] lg:max-w-xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="#speakers" className="hover:text-[#f39f5a]" >Speakers</Link>
        <Link href="#sponsors" className="hover:text-[#f39f5a]">Sponsors</Link>
        <Link href="#about" className="hover:text-[#f39f5a]">About Us</Link>
      </Menu>
    </div>
  );
}