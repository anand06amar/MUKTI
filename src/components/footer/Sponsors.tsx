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

const mockSponsors: Sponsor[] = [
  {
    name: "TechCorp",
    logo: "/images/techcorp-logo.png",
    description: "Leading innovator in AI and machine learning solutions.",
    website: "https://techcorp.example.com"
  },
  {
    name: "CyberSystems",
    logo: "/images/cybersystems-logo.png",
    description: "Cutting-edge cybersecurity and network infrastructure provider.",
    website: "https://cybersystems.example.com"
  },
  {
    name: "QuantumWare",
    logo: "/images/quantumware-logo.png",
    description: "Pioneering quantum computing technologies for the future.",
    website: "https://quantumware.example.com"
  },
  {
    name: "NeoSoft",
    logo: "/images/neosoft-logo.png",
    description: "Next-generation software development and cloud solutions.",
    website: "https://neosoft.example.com"
  },
  {
    name: "BioTech Innovations",
    logo: "/images/biotech-logo.png",
    description: "Revolutionizing healthcare with advanced biotechnology.",
    website: "https://biotechinnovations.example.com"
  }
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Uncomment this section and remove the "Coming Soon" div when ready to display sponsors
              {mockSponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  className="bg-black bg-opacity-70 rounded-lg p-6 border border-cyan-500 flex flex-col items-center"
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
                  <p className="text-gray-300 text-center mb-4">{sponsor.description}</p>
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
              */}
              <motion.div
                className="col-span-full text-center text-2xl text-cyan-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Sponsors to be announced soon...
              </motion.div>
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

