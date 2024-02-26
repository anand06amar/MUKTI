"use client"

import React, {useState} from "react";
import TimelineItem from "./TimelineItem";
import { CardHoverEffectDemo } from "./Card";
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
    title: "Joban DevOps workshop",
    time: "10am - 11am",
    venue: "To be released",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "#",
  },
 
  {
    title: "Tech mentorship",
    time:  "2pm - 4pm",
    venue: "To be released",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "#",
  },
  {
    title: "Closing ceremony",
    time: "4:00 pm to 4:30 pm",
    venue: "To be released",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "#",
  },
]

const day1 = [
  {
    title: "Opening Ceremony",
    time: "10:00 AM - 11:00 AM",
    venue: "To be released",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "#",
  },
  {
    title: "Abhas Abhinav speech",
    time: "11AM - 12:00 PM",
    venue: "To be released",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "#",
  },
  
  {
    title: "Abhas Abhinav",
    time: "2:00PM - 4:00PM",
    venue: "To be released",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "#",
  },
  
  {
    title: "Tech mentorship",
    time: "6:00PM - 8:00PM",
    venue: "To be released",
    description:
      "A technology company that builds economic infrastructure for the internet.",
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

          <div className="shedule-tabs tabs-box p-10 ml-10 flex items-center justify-center">
            {/* <div className="btns-box">
                        <!--Tabs Box--> */}
            <ul className="tab-buttons clearfix">
              <li className="tab-btn" data-tab="#tab-2" onClick={() => setDay(1)}>
                First Day <span>March 2, 2024</span>
              </li>
              <li className="tab-btn" data-tab="#tab-3" onClick={() => setDay(2)}>
                Second Day <span>March 3, 2024</span>
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
