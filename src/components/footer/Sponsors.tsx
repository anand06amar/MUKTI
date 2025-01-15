"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Sponsor {
  name: string;
  logo: string;
  description: string;
  website: string;
}

const sponsors: Sponsor[] = [
  {
    name: "GeeksforGeeks",
    logo: "/images/gfg-logo.svg",
    description: "Coding tutorials, interview prep, and tech resources.",
    website: "https://www.geeksforgeeks.org/"
  },
  {
    name: "Unstop",
    logo: "/images/unstop-logo.svg",
    description: "Opportunities, competitions, and challenges for students & professionals.",
    website: "https://unstop.com/"
  },
];

function Sponsors() {
  return (
    <section id='sponsors' className="w-full py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/circuit-board.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 lg:p-12">
            <motion.h2 
              className="text-4xl lg:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Sponsors
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:w-60vw lg:flex lg:items-center lg:justify-evenly gap-8">
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  className="lg:w-[40%] h-[250px] bg-black bg-opacity-70 rounded-lg p-6 border border-cyan-500 flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={150}
                    height={150}
                    className="mb-4"
                  />
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">{sponsor.name}</h3>
                  <p className="max-h-[50px] text-gray-300 text-center mb-4 md:text-sm text-xs xl:text-base">{sponsor.description}</p>
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
                  >
                    Visit Website
                  </a>
                </motion.div>
              ))}
             
              {/* <motion.div
                className="col-span-full text-center text-2xl text-cyan-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Sponsors to be announced soon...
              </motion.div> */}
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>
    </section>
  )
}

export default Sponsors

