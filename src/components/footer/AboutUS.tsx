"use client"

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-5"></div>
      
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-5xl lg:text-7xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          id="about"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          About Us
        </motion.h1>
        
        <motion.h2 
          className="text-2xl lg:text-3xl font-semibold text-center mb-12 text-indigo-300"
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
        >
          GNU/Linux Users&apos; Group
        </motion.h2>
        
        <motion.div 
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-16 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg leading-relaxed mb-6">
            The GNU/Linux Users&apos; Group of NIT Durgapur (NITDGP GLUG) is a vibrant community of GNU/Linux enthusiasts and advocates for Free and Open Source Software. Established in 2003 by passionate FOSS enthusiasts, our mission is to spread awareness about the world of Free and Open Source Software and promote its use across our campus.
          </p>
          <p className="text-lg leading-relaxed">
            Since our inception, we have evolved into an active part of the open source community, contributing to a wide range of projects. We strive to introduce the philosophy of FOSS and encourage its use across all departments at NIT Durgapur. Our members firmly believe that software freedom is as essential as the civil liberty of freedom of speech.
          </p>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold mb-8">Connect With Us</h3>
          <div className="flex justify-center space-x-6 mb-8">
            <SocialIcon href="https://www.facebook.com/nitdgplug" icon={Facebook} hoverColor="hover:text-blue-400" />
            <SocialIcon href="https://www.instagram.com/nitdgplug/" icon={Instagram} hoverColor="hover:text-pink-500" />
            <SocialIcon href="https://www.linkedin.com/company/lugnitdgp/mycompany/" icon={Linkedin} hoverColor="hover:text-blue-500" />
          </div>
          <p className="text-xl font-semibold text-indigo-300">
            ©GNU/Linux Users&apos; Group
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

interface SocialIconProps {
  href: string;
  icon: React.ElementType;
  hoverColor: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon: Icon, hoverColor }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Icon className={`w-8 h-8 text-white ${hoverColor} transition-colors`} />
    </Link>
  </motion.div>
);

