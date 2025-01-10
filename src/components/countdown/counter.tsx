"use client";

import React, { useState, useEffect, useRef } from "react";

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
    <section className="coming-soon-section w-[100%]">
      <div className="flex flex-row auto-container justify-center lg:justify-end relative -top-20">
        <div className="w-[80%] lg:w-[70%] bg-[#F39F5A] text-black font-bold rounded-xl lg:rounded-l-xl lg:rounded-r-none ps-10 pe-10 lg:flex">
          <div className="title-column items-center flex justify-center">
            <div className="inner-column hidden lg:block">
              <div className="text-5xl text-center font-bold text-slate-800 lg:text-start">
                Count Every<br />Second Until<br />the Event
              </div>
            </div>
            <div className="inner-column pt-10 lg:hidden">
              <div className="text-xl text-center font-bold text-slate-800 lg:text-start">
                Count Every Second Until the Event
              </div>
            </div>
          </div>
          <div className="divider lg:flex lg:flex-col hidden ps-16">
            <div className="inner-column">
              <div className="text-center text-xl lg:text-2xl font-bold pt-2 text-slate-800 mt-8">|</div>
            </div>
          </div>
          <div className="timer-column">
            <div className="inner-column">
              <div className="time-counter">
                <div className="time-countdown flex flex-wrap md:ml-20 gap-10 m-2 pb-10 pt-10 justify-center lg:justify-end">
                  <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-lg">
                    <span className="count font-bold text-slate-800 text-2xl lg:text-7xl">{days}</span>Days
                  </div>
                  <div className="text-[#212639] lg:block hidden text-4xl mt-1">:</div>
                  <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-lg">
                    <span className="count font-bold text-slate-800 text-2xl lg:text-7xl">{hours}</span>Hours
                  </div>
                  <div className="text-[#212639] lg:block hidden text-4xl mt-1">:</div>
                  <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-lg">
                    <span className="count font-bold text-slate-800 text-2xl lg:text-7xl">{minutes}</span>Minutes
                  </div>
                  <div className="text-[#212639] lg:block hidden text-4xl mt-1">:</div>
                  <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-lg">
                    <span className="count font-bold text-slate-800 text-2xl lg:text-7xl">{seconds}</span>Seconds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
