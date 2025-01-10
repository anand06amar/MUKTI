"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";

interface CyberpunkCardProps {
  title: string;
  time: string;
  venue: string;
  description: string;
}

const CyberpunkCard: React.FC<CyberpunkCardProps> = ({ title, time, venue, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="bg-black bg-opacity-50 backdrop-blur-md rounded-lg p-6 border border-cyan-500 h-full flex flex-col justify-between"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <div>
        <h3 className="text-2xl font-bold mb-2 text-cyan-400">{title}</h3>
        <p className="text-purple-300 mb-2">{time}</p>
        <p className="text-pink-300 mb-4">{venue}</p>
        <p className="text-gray-300">
          {isExpanded ? description : `${description.slice(0, 100)}...`}
        </p>
      </div>
      {description.length > 100 && (
        <button
          className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          onClick={toggleExpand}
        >
          {isExpanded ? "Read less" : "Read more..."}
        </button>
      )}
    </motion.div>
  );
};

export default CyberpunkCard;

