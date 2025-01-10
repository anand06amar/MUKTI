"use client"

import React from 'react'
import { motion } from 'framer-motion'

const ComingSoon: React.FC = () => {
  return (
    <motion.div 
      className="w-full py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-[url('/images/circuit-board.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-3xl shadow-2xl overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 lg:p-12">
            <motion.h2 
              className="text-4xl lg:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              COMING SOON
            </motion.h2>
            <motion.p
              className="text-xl lg:text-2xl text-center text-cyan-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Get ready for an exciting reveal!
            </motion.p>
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      ></motion.div>
    </motion.div>
  )
}

export default ComingSoon

