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
      <section className="coming-soon-section">
        <div className="auto-container">
            <div className="bg-yellow-400 text-black font-bold rounded-xl ps-10 pe-10 md:flex ">
                <div className="title-column items-center flex">
                    <div className="inner-column hidden md:block none">
                        <div className="text-2xl text-center font-bold text-slate-800 md:text-start ">Count Every<br></br>Second Until<br></br>the Event</div>
                    </div>
                </div>
                <div className="divider md:block md:flex-col hidden ps-8 pe-8 pt-3">
                    <div className="inner-column">
                        <div className="text-center text-xl font-bold pt-2 text-slate-800 mt-5">|</div>
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
                                <div className="time-countdown clearfix flex flex-row gap-10 m-4 pb-10 pt-10 ">
                                    <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-md"><span className="count font-bold text-black text-5xl ">00 </span>Days</div>
                                    <div className="text-[#212639] text-4xl mt-1">:</div>
                                    <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-md"><span className="count font-bold text-black text-5xl ">00 </span>Hours</div>
                                    <div className="text-[#212639] text-4xl mt-1">:</div>
                                    <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-md"><span className="count font-bold text-black text-5xl ">00 </span>Minutes</div>
                                    <div className="text-[#212639] text-4xl mt-1">:</div>
                                    <div className="counter-column flex flex-col gap-4 font-semibold justify-center items-center text-[#212639] text-md"><span className="count font-bold text-black text-5xl ">00 </span>Seconds</div>                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>
                </div>
    </section>
  );
}
