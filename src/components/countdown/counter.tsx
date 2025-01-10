"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Counter() {
  const [days, setDays] = useState<string>('00');
  const [hours, setHours] = useState<string>('00');
  const [minutes, setMinutes] = useState<string>('00');
  const [seconds, setSeconds] = useState<string>('00');

  const interval = useRef<ReturnType<typeof setInterval>>();

  const formatNumber = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

  const startTimer = () => {
    const countdownDate: number = new Date('2025-01-17T00:00:00').getTime();

    interval.current = setInterval(() => {
      const now: number = new Date().getTime();
      const difference: number = countdownDate - now;

      if (difference <= 0) {
        clearInterval(interval.current);
        setDays('00');
        setHours('00');
        setMinutes('00');
        setSeconds('00');
      } else {
        const d: number = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h: number = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m: number = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s: number = Math.floor((difference % (1000 * 60)) / 1000);

        setDays(formatNumber(d));
        setHours(formatNumber(h));
        setMinutes(formatNumber(m));
        setSeconds(formatNumber(s));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, []);

  return (
    <section className="coming-soon-section w-full py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                  Countdown to the Future
                </h2>
                <p className="text-xl text-cyan-300">
                  Join us for an unforgettable Mukti experience!
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {[
                  { label: 'Days', value: days },
                  { label: 'Hours', value: hours },
                  { label: 'Minutes', value: minutes },
                  { label: 'Seconds', value: seconds },
                ].map((item) => (
                  <div key={item.label} className="bg-gradient-to-b from-purple-800 to-indigo-900 rounded-lg p-4 shadow-lg border border-purple-500">
                    <motion.div 
                      className="text-5xl lg:text-7xl font-bold text-pink-500 mb-2"
                      // animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      {item.value}
                    </motion.div>
                    <div className="text-sm lg:text-base font-medium text-cyan-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

