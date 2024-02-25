"use client"

import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

    return (
      <section className="coming-soon-section w-[100%]">
        <div className="flex flex-row auto-container justify-end relative -top-20">
            <div className="w-[80%] bg-[#F39F5A] text-black font-bold rounded-l-xl ps-10 pe-10 lg:flex">
                <div className="title-column  items-center flex justify-center">
                    <div className="inner-column hidden lg:block none">
                        <div className="text-5xl  text-center font-bold text-slate-800 lg:text-start ">Count Every<br></br>Second Until<br></br>the Event</div>
              </div>
              <div className="inner-column pt-10  lg:hidden">
                <div className="text-2xl text-center font-bold text-slate-800 lg:text-start ">Count Every Second Until the Event</div>
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
                                <div className="time-countdown clearfix flex flex-wrap ml-20 gap-20 m-2 pb-10 pt-10  justify-center lg:justify-end ">
                                    <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-lg"><span className="count font-bold text-slate-800 text-5xl  lg:text-7xl ">00 </span>Days</div>
                                    <div className="text-[#212639] text-4xl mt-1">:</div>
                                    <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-lg"><span className="count font-bold text-slate-800 text-5xl lg:text-7xl ">00 </span>Hours</div>
                    <div className="text-[#212639] text-4xl mt-1 hidden sm:block">:</div>
                    
                    
                                    <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-lg"><span className="count font-bold text-slate-800 text-5xl lg:text-7xl ">00 </span>Minutes</div>
                                    <div className="text-[#212639] text-4xl mt-1">:</div>
                                    <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-lg"><span className="count font-bold text-slate-800 text-5xl lg:text-7xl ">00 </span>Seconds</div>                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>
                </div>
    </section>
  );
}
