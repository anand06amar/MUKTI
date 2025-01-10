"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function NavbarFloat() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-4" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 max-w-2xl mx-auto z-50 py-4 px-4",
        "bg-white/10 backdrop-blur-md rounded-full",
        "border border-white/20 shadow-lg",
        className
      )}
    >
      <ul className="flex justify-center items-center space-x-8">
        <NavItem href="#speakers" label="Speakers" hovered={hovered} setHovered={setHovered} />
        <NavItem href="#sponsors" label="Sponsors" hovered={hovered} setHovered={setHovered} />
        <NavItem href="#about" label="About Us" hovered={hovered} setHovered={setHovered} />
      </ul>
    </nav>
  );
}

interface NavItemProps {
  href: string;
  label: string;
  hovered: string | null;
  setHovered: (value: string | null) => void;
}

function NavItem({ href, label, hovered, setHovered }: NavItemProps) {
  return (
    <motion.li
      onHoverStart={() => setHovered(label)}
      onHoverEnd={() => setHovered(null)}
      className="relative"
    >
      <Link href={href} className="text-white font-medium text-lg">
        {label}
      </Link>
      {hovered === label && (
        <motion.div
          layoutId="navbar-hover"
          className="absolute inset-0 -z-10 rounded-md bg-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.li>
  );
}

export default Navbar;

