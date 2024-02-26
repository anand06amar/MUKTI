import React from 'react';
import './index.css';

interface TimelineItemData {
  month: string;
  date: number;
  heading: string;
  description: string[];
}

const TimelineItem: React.FC<TimelineItemData> = ({
  date,
  month,
  heading,
  description,
}) => {
  return (
    <div className="timeline-item">
      <div className="starting-border"></div>
      <div className="test">
        <div className="date-wrapper">
          <span className="month">{month}</span>
          <span className="date">
            <span className="fc-blue">{date}</span>, 2024
          </span>
        </div>
        <div className="middle-border"></div>
        <div className="content">
          <div className="timeline-heading">{heading}</div>
          <div className="timeline-desc">
            {description.map((item) => (
              <div className="list-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
