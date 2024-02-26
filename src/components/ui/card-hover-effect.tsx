"use client"

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { CiAlarmOn } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";


export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    time: string;
    venue: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 py-10 w-screen lg:-ml-[15%] md:-ml-[5%] sm:-ml-0",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group p-2 h-full w-[70vw]"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-cyan-400 dark:bg-cyan-300/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="w-full">
            <div className="flex items-center gap-3">
            <CiAlarmOn className="text-3xl"/>
            <CardTime>{item.time}</CardTime>

            </div>
          
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <div className="flex items-center gap-3 mt-5">
              <CiLocationOn className="text-3xl"/>
            <CardVenue>{item.venue}</CardVenue>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-gray-900 border border-transparent dark:border-white/[0.2] group-hover:border-[#AE445A] relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-50 text-3xl font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardTime = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-50 font-bold tracking-wide ", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-5 text-zinc-50 tracking-wide leading-relaxed text-1xl",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardVenue = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        " text-zinc-50 tracking-wide leading-relaxed text-1xl",
        className
      )}
    >
      {children}
    </p>
  );
};