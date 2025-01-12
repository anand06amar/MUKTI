"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CyberpunkCard from "./CyberPunkCard";

const day1 = [
  {
    title: "Opening Ceremony",
    time: "06:00 PM - 06:30 PM",
    venue: "To be released",
    description: "MUKTI 2.0 Opening Ceremony + Opening Speech by Convenor",
  },
  {
    title: "FOSS Talk",
    time: "06:30 PM - 07:30 PM",
    venue: "To be released",
    description: "Unlocking the Future with Ali Solanki on Open Source, Modern Blockchain, and the Path Ahead!",
  },
  {
    title: "Podcast Session",
    time: "07:30 PM - 08:00 PM",
    venue: "To be released",
    description: "QnA + Podcast with Ali Solanki",
  },
];

const day2 = [
  {
    title: "Hackathon Briefings",
    time: "08:00 AM - 08:30 AM",
    venue: "To be released",
    description: " Reporting at the Hackathon Venue by Teams + Hackathon Briefings",
  },
  {
    title: "Hackathon Begins",
    time: "08:00 AM",
    venue: "To be released",
    description: "The hackathon kicks off with participants diving into innovative problem-solving and creative project development. Let the brainstorming begin!",
  },
  {
    title: "Lunch",
    time: "12:30 PM",
    venue: "To be released",
    description: "Take a break and refuel with a delicious lunch. Enjoy some time to relax and recharge for the next sessions!",
  },
  {
    title: "Hackathon Ends",
    time: "08:30 PM",
    venue: "To be released",
    description: "The hackathon concludes as participants wrap up their projects and prepare for presentations",
  },
];

const day3 = [
  {
    title: "Thanksgiving",
    time: "09:00 AM - 09:30 AM",
    venue: "To be released",
    description: "Thanksgiving to all the Teams for participating in Showdownn at MUKTI 2.0",
  },
  {
    title: "Director/Faculty Advisor speech",
    time: "09:30 AM - 10:30 AM",
    venue: "To be released",
    description: "The Director/Faculty Advisor shares insights and words of encouragement to inspire participants.",
  },
  {
    title: "FOSS Talk",
    time: "10:30 AM - 11:30 AM",
    venue: "To be released",
    description: "Shaping the Future with Riti Kumari on Career Opportunities for Engineers and the Transformative Impact of AI!",
  },
  {
    title: "Podcast Session",
    time: "11:30 AM - 12:00 PM",
    venue: "To be released",
    description: "QnA + Podcast with Riti Kumari",
  },
  {
    title: "MuC Performance",
    time: "12:00 PM - 12:30 PM",
    venue: "To be released",
    description: "Enjoy a live performance by MuC, the music club of NIT Durgapur, showcasing talented artists and vibrant melodies.",
  },
  {
    title: "Results & Prize Distribution",
    time: "12:30 PM - 01:00 PM",
    venue: "To be released",
    description: "Results Announcement with Prize Distribution",
  },
  {
    title: "MUKTI 2.0 Closing Address",
    time: "12:00 PM - 12:30 PM",
    venue: "To be released",
    description: "Closing of MUKTI 2.0 by President/Convenor",
  },

]

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
            {[1, 2, 3].map((day) => (
              <motion.button
                key={day}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300 ${activeDay === day
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
            {(activeDay === 1 ? day1 : activeDay == 2 ? day2 : day3).map((item, index) => (
              <CyberpunkCard key={index} {...item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Timeline;

