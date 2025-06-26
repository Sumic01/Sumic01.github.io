'use client';
import React, { useState, useRef, useEffect } from 'react';
import '../CollapsibleTimeline.css'; 
import { IconPlus, IconMinus } from '@tabler/icons-react';


const CollapsibleTimeline: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const timelineItems = [
      {
      id: 1,
      date: '2021-10-01',
      displayDate: '2021 - Present',
      title: 'Računarski fakultet',
      content: (
        <p className="timeline__item-p">
          Managed group projects and organized teamwork for software and web technology classes. Made sure everyone stayed on track and finished tasks.
        </p>
      ),
    },
    {
      id: 2,
      date: '2023-8-15',
      displayDate: 'Aug. 2023 ‑ Jan. 2024',
      title: 'Serbian Judicial Academy',
      content: (
        <p className="timeline__item-p">
          Led a small team building a web app for judges to find and update court cases. Planned the work, split up tasks, and kept track of our progress.
        </p>
      ),
    },
    {
      id: 3,
      date: '2023-11-15',
      displayDate: 'Oct. 2023 ‑ Mar. 2024',
      title: 'Serbian Judicial Academy',
      content: (
        <p className="timeline__item-p">
          Organized work on making web pages look good on all devices. Helped the team with questions and made sure we fixed bugs and finished features on time.
        </p>
      ),
    },
    {
      id: 4,
      date: '2023-12-13',
      displayDate: 'Dec. 2023 ‑ May 2024',
      title: 'Register of National Internet Domains of Serbia',
      content: (
        <p className="timeline__item-p">
          Worked with two teammates to build a web app that got accepted and used. Found out what was needed, handed out tasks, and helped with database and backend questions.
        </p>
      ),
    },
    {
      id: 5,
      date: '2023-10-18',
      displayDate: 'Oct. 2023 - Jan. 2024',
      title: 'Coinsnap',
      content: (
        <p className="timeline__item-p">
          Managed a freelance UI project. Talked to the client, made sure designs were followed, and checked that the team finished everything on time.
        </p>
      ),
    }
    
  ];

  const handleItemClick = (id: number) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setExpandedItems((prev) => {
      const isCurrentlyExpanded = prev[id];
      return { ...prev, [id]: !isCurrentlyExpanded };
    });

    // Allow transition before finishing
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const expandAll = () => {
    const newExpanded = timelineItems.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {} as { [key: number]: boolean });

    setExpandedItems(newExpanded);
  };

  const collapseAll = () => {
    const newExpanded = timelineItems.reduce((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {} as { [key: number]: boolean });

    setExpandedItems(newExpanded);
  };

  useEffect(() => {
    timelineItems.forEach((item) => {
      const contentEl = contentRefs.current[item.id];
      if (contentEl) {
        if (expandedItems[item.id]) {
          contentEl.style.height = `${contentEl.scrollHeight}px`;
          contentEl.style.opacity = '1';
          contentEl.style.visibility = 'visible';
        } else {
          // Collapse
          contentEl.style.height = '0px';
          contentEl.style.opacity = '0';
          contentEl.style.visibility = 'hidden';
        }
      }
    });
  }, [expandedItems, timelineItems]);
  
  

  return (
    <>
      {/* SVG and Header */}
      <svg style={{ display: 'none' }}>
        <symbol id="arrow">
          <polyline
            points="7 10,12 15,17 10"
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </symbol>
      </svg>
      <div id="timeline" className="timeline">
        <div className="btn-group">
          <button className="btn" type="button" onClick={expandAll}>
            <IconPlus/>
          </button>
          <button className="btn" type="button" onClick={collapseAll}>
            <IconMinus/>
          </button>
        </div>
        {timelineItems.map((item) => (
          <div className="timeline__item monument" key={item.id}>
            <div className="timeline__item-header">
              <button
                className="timeline__arrow"
                type="button"
                id={`item${item.id}`}
                aria-labelledby={`item${item.id}-name`}
                aria-expanded={expandedItems[item.id] ? 'true' : 'false'}
                aria-controls={`item${item.id}-ctrld`}
                aria-haspopup="true"
                data-item={item.id}
                onClick={() => handleItemClick(item.id)}
              >
                <svg className="timeline__arrow-icon" viewBox="0 0 24 24" width="24px" height="24px">
                  <use href="#arrow" />
                </svg>
              </button>
              <span className="timeline__dot"></span>
              <span id={`item${item.id}-name`} className="timeline__meta">
                <time className="timeline__date" dateTime={item.date}>
                  {item.displayDate}
                </time>
                <br />
                <strong className="timeline__title">{item.title}</strong>
              </span>
            </div>
            <div
                className={`timeline__item-body ${expandedItems[item.id] ? 'timeline__item-body--expanded' : ''}`}
                id={`item${item.id}-ctrld`}
                role="region"
                aria-labelledby={`item${item.id}`}
                aria-hidden={!expandedItems[item.id]}
                ref={(el) => {
                  contentRefs.current[item.id] = el;
                }}
              >
                <div className="timeline__item-body-content dark:bg-neutral-800">{item.content}</div>
              </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CollapsibleTimeline;
