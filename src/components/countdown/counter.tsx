"use client"

import React, { useState, useEffect, useRef } from "react";

export default function Counter() {
  const [days, SetDays] = useState('00');
  const [hours, SetHours] = useState('00');
  const [minutes, SetMinutes] = useState('00');
  const [seconds, SetSeconds] = useState('00');

  // useEffect(() => { 
  //   const target = new Date('29/02/2024 23:59:59')
  //   const interval = setInterval(() => {
  //     const now = new Date();
  //     const difference = target.getTime() - now.getTime();
  //     const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  //     SetDays(d);
  //     const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     SetHours(h);
  //     const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  //     SetMinutes(m);
  //     const s = Math.floor((difference % (1000 * 60)) / 1000);
  //     SetSeconds(s);
  //   }, 1000)

  //   if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
  //     clearInterval(interval);
  //     SetDays(0);
  //     SetHours(0);
  //     SetMinutes(0);
  //     SetSeconds(0);
  //   }
    

  //   return () => clearInterval(interval);
  // }, []);
  
  const interval = useRef<ReturnType<typeof setInterval> | undefined>();

  const startTimer = () => { 
    const countdownDate = new Date('2024-03-01T00:00:00').getTime();

    interval.current = setInterval(() => { 
      const now = new Date().getTime();
      
      const difference = countdownDate - now;
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      console.log(d, h, m, s, difference);
      if (d < 0 && h < 0 && m < 0 && s < 0)
      { 
      clearInterval(interval.current);
      }
      else {
        SetDays(d < 10 ? `0${d}` : `${d}`);
        SetHours(h < 10 ? `0${h}` : `${h}`);
        SetMinutes(m < 10 ? `0${m}` : `${m}`);
        SetSeconds(s < 10 ? `0${s}` : `${s}`);
    }
    },1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
        clearInterval(interval.current);
    };
  });

    return (
      <section className="coming-soon-section">
        <div className="auto-container relative lg:-top-40 -top-20 lg:flex lg:justify-end">
            <div className="sm:w-[90vw] w-[360px] max-w-[900px] mx-auto lg:mx-0 bg-[#F39F5A] text-black font-bold rounded-xl ps-10 pe-10 lg:flex ">
                <div className="title-column items-center flex justify-center">
                    <div className="inner-column hidden lg:block none">
                        <div className="text-2xl text-center font-bold text-slate-800 lg:text-start ">Count Every<br></br>Second Until<br></br>the Event</div>
              </div>
              <div className="inner-column pt-10 lg:hidden">
                <div className="text-2xl text-center font-bold text-slate-800 lg:text-start ">Count Every Second Until the Event</div>
              </div>
                </div>
                <div className="divider lg:block lg:flex-col hidden ps-8 pe-8 justify-center">
                    <div className="inner-column">
                        <div className="text-center text-xl font-bold pt-2 text-slate-800 mt-8">|</div>
                        </div>
                        <div className="inner-column">
                        <div className="text-center text-xl font-bold pt-2 text-slate-800 mt-2">|</div>
                        </div>
                        <div className="inner-column">
                        <div className="text-center text-xl font-bold pt-2 text-slate-800 mt-2">|</div>
                    </div>
                </div>
                <div className="timer-column">
                    <div className="inner-column">
                            <div className="time-counter">
                                <div className="time-countdown clearfix flex flex-wrap gap-10 m-4 pb-10 pt-10 justify-center ">
                                    <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-lg"><span className="count font-bold text-black text-5xl ">{days} </span>Days</div>
                                    <div className="text-[#212639] text-4xl mt-1">:</div>
                                    <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-lg"><span className="count font-bold text-black text-5xl ">{hours} </span>Hours</div>
                    <div className="text-[#212639] text-4xl mt-1 hidden sm:block">:</div>
                    
                    
                                    <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-lg"><span className="count font-bold text-black text-5xl ">{minutes} </span>Minutes</div>
                                    <div className="text-[#212639] text-4xl mt-1">:</div>
                                    <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-lg"><span className="count font-bold text-black text-5xl ">{seconds} </span>Seconds</div>                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>
                </div>
    </section>
  );
}
