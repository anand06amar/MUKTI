"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { GlobeIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-blue-900 to-blue-800 text-white relative">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-6xl font-bold text-center mb-8"
        >
          About Us
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold text-center mb-12 text-blue-300"
        >
          GNU/Linux Users&apos; Group
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            The GNU/Linux Users&apos; Group of NIT Durgapur (NITDGP GLUG) is a community of GNU/Linux users and promoters of Free and Open Source Software. Established in 2003, we strive to spread awareness about FOSS and contribute to open source projects. We believe that software freedom is as essential as the civil liberty of freedom of speech.
          </p>
          <Link 
            href="https://nitdgplug.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            <GlobeIcon className="mr-2 h-5 w-5" />
            Visit our website
          </Link>
        </motion.div>
      </div>

      <motion.footer 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="w-full bg-black bg-opacity-50 py-12"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-blue-300">Connect With Us</h2>
          <div className="flex justify-center space-x-8 mb-8">
            <SocialLink href="https://www.facebook.com/nitdgplug" icon={<FacebookIcon />} />
            <SocialLink href="https://www.instagram.com/nitdgplug/" icon={<InstagramIcon />} />
            <SocialLink href="https://www.linkedin.com/company/lugnitdgp/mycompany/" icon={<LinkedinIcon />} />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-blue-200 text-sm">
              ©2025 GNU/Linux Users&apos; Group. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
      <Link href={href} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white transition-colors">
        {icon}
      </Link>
    </motion.div>
  )
}

