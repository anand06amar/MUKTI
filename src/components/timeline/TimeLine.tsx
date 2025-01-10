"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CyberpunkCard from "./CyberPunkCard";

const day1 = [
  {
    title: "Opening Ceremony",
    time: "10:00 AM - 11:00 AM",
    venue: "To be released",
    description: "Join us as we unveil the exciting world of FOSS at the opening ceremony of MUKTI.",
  },
  {
    title: "FOSS Talks by Abhas Abhinav",
    time: "11:00AM - 12:00 PM",
    venue: "To be released",
    description: "Join us for a workshop with Abhas Abhinav, founder & hacker-in-charge at DeepRoot GNU/Linux. Abhas is a skilled entrepreneur specializing in free software and hardware. Don't miss this chance to gain valuable insights from his expertise!",
  },
  {
    title: "Hands On Session by Abhas Abhinav",
    time: "2:00PM - 4:00PM",
    venue: "To be released",
    description: "Join us for a workshop with Abhas Abhinav, founder & hacker-in-charge at DeepRoot GNU/Linux. Abash is a skilled entrepreneur specializing in free software and hardware. Don't miss this chance to gain valuable insights from his expertise!",
  },
  {
    title: "Tech Mentorship",
    time: "6:00PM - 8:00PM",
    venue: "To be released",
    description: "Welcome back to our Tech Mentorship event! Dive back in as we continue guiding you through various tech stacks from scratch. Don't miss this chance to level up your skills and embark on your tech journey with us!",
  },
];

const day2 = [
  {
    title: "DevOps Workshop by Joban Singh",
    time: "10:00am - 11:00am",
    venue: "To be released",
    description: "Join us for a workshop with Joban Singh, a Microsoft developer specializing in cutting-edge web technologies. Don't miss this opportunity to learn from his expertise!",
  },
  {
    title: "Tech Mentorship",
    time: "2:00pm - 4:00pm",
    venue: "To be released",
    description: "We're excited to introduce our Tech Mentorship event. Join us as we guide you through various tech stacks from scratch, helping you gain clarity and confidence in your understanding. Don't miss this opportunity to level up your skills and embark on your tech journey with us!",
  },
  {
    title: "Closing Ceremony",
    time: "4:00 pm to 4:30 pm",
    venue: "To be released",
    description: "Join us as we conclude our exploration of the exciting world of FOSS at the closing ceremony of MUKTI.",
  },
];

const Timeline: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <div className="timeline bg-gradient-to-r from-purple-900 to-indigo-900 py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/circuit-board.svg')] opacity-10"></div>
      <Image src="/images/Ellipse 26.png" alt="background" layout="fill" objectFit="cover" className="opacity-30" />
      <div className="container mx-auto relative z-10">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          MUKTI Schedule
        </motion.h2>

        <div className="flex justify-center mb-12">
          <motion.div 
            className="bg-black bg-opacity-50 backdrop-blur-md rounded-full p-2 flex space-x-4 border border-cyan-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {[1, 2].map((day) => (
              <motion.button
                key={day}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300 ${
                  activeDay === day
                    ? "bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-black"
                    : "bg-transparent text-cyan-400 hover:bg-purple-800"
                }`}
                onClick={() => setActiveDay(day)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Day {day}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {(activeDay === 1 ? day1 : day2).map((item, index) => (
              <CyberpunkCard key={index} {...item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Timeline;

