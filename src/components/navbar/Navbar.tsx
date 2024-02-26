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
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
    >
      <Menu setActive={setActive}>
        <Link href="#speakers" >Speakers</Link>
        <Link href="#sponsors">Sponsors</Link>
        <Link href="#about">About Us</Link>
        {/* <MenuItem setActive={setActive} active={active} item="Speakers">
          <ProductItem
            title="Speakers"
            description="Meet the speakers"
            href="#speakers"
            src="/speakers.jpg"
          />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Sponsors">
        <ProductItem
            title="Sponsors"
            description="Our sponsors"
            href="#sponsors"
            src="/speakers.jpg"
          />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <ProductItem
            title="About Us"
            description="GNU/Linux User's Group"
            href="#about"
            src="/about-us.jpg"
          />
        </MenuItem> */}
      </Menu>
    </div>
  );
}