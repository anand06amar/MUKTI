"use client"

import React, { useState, useEffect, useRef } from "react";

export default function Counter() {
  const [days, SetDays] = useState('00');
  const [hours, SetHours] = useState('00');
  const [minutes, SetMinutes] = useState('00');
  const [seconds, SetSeconds] = useState('00');

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
      // console.log(d, h, m, s, difference);
      if (d < 0 && h < 0 && m < 0 && s < 0) {
        clearInterval(interval.current);
      }
      else {
        SetDays(d < 10 ? `0${d}` : `${d}`);
        SetHours(h < 10 ? `0${h}` : `${h}`);
        SetMinutes(m < 10 ? `0${m}` : `${m}`);
        SetSeconds(s < 10 ? `0${s}` : `${s}`);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <section className="coming-soon-section w-[100%]">
      <div className="flex flex-row auto-container justify-center lg:justify-end relative -top-20">
        <div className="w-[80%] bg-[#F39F5A] text-black font-bold rounded-xl lg:rounded-l-xl ps-10 pe-10 lg:flex">
          <div className="title-column  items-center flex justify-center">
            <div className="inner-column hidden lg:block none">
              <div className="text-5xl  text-center font-bold text-slate-800 lg:text-start ">Count Every<br></br>Second Until<br></br>the Event</div>
            </div>
            <div className="inner-column pt-10 lg:hidden">
              <div className="text-xl text-center font-bold text-slate-800 lg:text-start ">Count Every Second Until the Event</div>
            </div>
          </div>
          <div className="divider lg:flex lg:flex-col hidden ps-16 ">
            <div className="inner-column">
              <div className="text-center text-xl lg:text-2xl font-bold pt-2 text-slate-800 mt-8">|</div>
            </div>
            <div className="inner-column">
              <div className="text-center text-xl lg:text-2xl font-bold pt-2 text-slate-800 mt-2">|</div>
            </div>
            <div className="inner-column">
              <div className="text-center text-xl l lg:text-2xl font-bold pt-2 text-slate-800 mt-2">|</div>
            </div>
          </div>
          <div className="timer-column">
            <div className="inner-column">
              <div className="time-counter">
                <div className="time-countdown clearfix flex flex-wrap lg:ml-20 gap-10 m-2 pb-10 pt-10  justify-center lg:justify-end ">
                  <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-mlg"><span className="count font-bold text-slate-800 text-2xl  lg:text-7xl ">{days} </span>Days</div>
                  <div className="text-[#212639] lg:block hidden text-4xl mt-1">:</div>
                  <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-mlg"><span className="count font-bold text-slate-800 text-2xl lg:text-7xl ">{hours} </span>Hours</div>
                  <div className="text-[#212639] lg:block text-4xl mt-1 hidden sm:block">:</div>


                  <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-mlg"><span className="count font-bold text-slate-800 text-2xl lg:text-7xl ">{minutes} </span>Minutes</div>
                  <div className="text-[#212639] lg:block hidden text-4xl mt-1">:</div>
                  <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-mlg"><span className="count font-bold text-slate-800 text-2xl lg:text-7xl ">{seconds} </span>Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
