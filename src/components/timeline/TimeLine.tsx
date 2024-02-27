"use client"

import React, {useState} from "react";
import TimelineItem from "./TimelineItem";
import { CardHoverEffectDemo } from "./Card";
import Image from "next/image";
import "./index.css";
import { HoverEffect } from "../ui/card-hover-effect";
// Define the type for the description as an array of strings
type Description = string[];

// Define the TimelineItemData type
interface TimelineItemData {
  month: string;
  date: number;
  heading: string;
  description: Description;
}

const day2 = [
  {
    title: "DevOps Workshop by Joban Singh",
    time: "10:00am - 11:00am",
    venue: "To be released",
    description:
      "Join us for a workshop with Joban Singh, a Microsoft developer specializing in cutting-edge web technologies. Don't miss this opportunity to learn from his expertise!",
    link: "#",
  },
 
  {
    title: "Tech Mentorship",
    time:  "2:00pm - 4:00pm",
    venue: "To be released",
    description:
      "We're excited to introduce our Tech Mentorship event. Join us as we guide you through various tech stacks from scratch, helping you gain clarity and confidence in your understanding. Don't miss this opportunity to level up your skills and embark on your tech journey with us!",
    link: "#",
  },
  {
    title: "Closing Ceremony",
    time: "4:00 pm to 4:30 pm",
    venue: "To be released",
    description:
      "Join us as we conclude our exploration of the exciting world of FOSS at the closing ceremony of MUKTI.",
    link: "#",
  },
]

const day1 = [
  {
    title: "Opening Ceremony",
    time: "10:00 AM - 11:00 AM",
    venue: "To be released",
    description:
      "Join us as we unveil the exciting world of FOSS at the opening ceremony of MUKTI.",
    link: "#",
  },
  {
    title: "FOSS Talks by Abhas Abhinav",
    time: "11:00AM - 12:00 PM",
    venue: "To be released",
    description:
      "Join us for a workshop with Abhas Abhinav, founder & hacker-in-charge at DeepRoot GNU/Linux. Abhas is a skilled entrepreneur specializing in free software and hardware. Don't miss this chance to gain valuable insights from his expertise!",
    link: "#",
  },
  
  {
    title: "Hands On Session by Abhas Abhinav",
    time: "2:00PM - 4:00PM",
    venue: "To be released",
    description:
      "Join us for a workshop with Abhas Abhinav, founder & hacker-in-charge at DeepRoot GNU/Linux. Abash is a skilled entrepreneur specializing in free software and hardware. Don't miss this chance to gain valuable insights from his expertise!",
    link: "#",
  },
  
  {
    title: "Tech Mentorship",
    time: "6:00PM - 8:00PM",
    venue: "To be released",
    description:
      "Welcome back to our Tech Mentorship event! Dive back in as we continue guiding you through various tech stacks from scratch. Don't miss this chance to level up your skills and embark on your tech journey with us!",
    link: "#",
  },
  
];

const data: TimelineItemData[] = [
  // Array of timeline item objects, replace with your actual data
  {
    month: "March",
    date: 2,
    heading: "Welcome and onboarding",
    description: [
      "-> About The event",
      "-> What do we gain at the end",
      "-> How do we cover various aspects(importance of projects)",
    ],
  },
  {
    month: "March",
    date: 3,
    heading: "Welcome and onboarding - Continued",
    description: [
      "-> Combined VC on Discord where we introduce the individual mentors/team channels",
      "-> Participants split into groups",
      "-> Git/GitHub Basics",
      "-> Individual orientation and Projects begin",
    ],
  },
];

const Timeline: React.FC = () => {
  const [day, setDay] = useState(1);

  return (
    <div className="timeline">
      <div className="shedule-section">
        
        <div className="auto-container">
          <div className="sec-title flex items-center justify-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white p-10">Schedule Plan</h2>
          </div>
          <Image src="/images/Ellipse 26.png" alt="image" width="10000" height="10000" className="absolute"/>

          <div className="shedule-tabs tabs-box p-10 mx-auto flex flex-col text-[#212639] lg:flex-row items-center justify-center rounded-lg">
            {/* <div className="btns-box">
                        <!--Tabs Box--> */}
            <ul className="tab-buttons clearfix !text-[#212639] !font-extrabold ">
              <li id="day-1" className={"tab-btn !text-[#212639] !font-black" + `${day === 1 ? "active-border !border-[5px] !font-black border-[#ae445a] !text-[#212639]":""}`} data-tab="#tab-2" onClick={() => setDay(1)}>
                First Day <span className="!text-[#212639] !font-bold">March 2, 2024</span>
              </li>
              <li id="day-2" className={"tab-btn !text-[#212639] !font-black" + `${day === 2 ? "active-border !border-[5px] !font-black border-[#f39f5a] !text-[#212639]":""}`} data-tab="#tab-3" onClick={() => setDay(2)}>
                Second Day <span className="!text-[#212639] !font-bold">March 3, 2024</span>
              </li>
            </ul>
          </div>
          {day === 1 ? <div>
            <CardHoverEffectDemo items={day1}/>
        </div>: <div>
        <CardHoverEffectDemo items={day2}/>
          </div>}
          
          
        </div>
      </div>
    </div>
  );
};

export default Timeline;
