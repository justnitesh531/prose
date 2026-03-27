'use client';

import React, { useState, useRef, useEffect } from 'react';
import { TimelineMonth } from './TimelineMonth';

interface TimelineData {
  month: string;
  year: number;
  id: string;
  entries: Array<{
    id: string;
    category: string;
    title: string;
    description: string;
    image?: string;
    link?: string | null;
  }>;
}

interface TimelineProps {
  data: TimelineData[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const [activeMonth, setActiveMonth] = useState<string>(data[0]?.id || '');
  const timelineRef = useRef<HTMLDivElement>(null);

  // Update active month based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const sections = timelineRef.current.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= -100 && rect.top <= window.innerHeight / 2) {
          current = section.id;
        }
      });

      if (current) {
        setActiveMonth(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMonth = (monthId: string) => {
    const element = document.getElementById(monthId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full">
      {/* Month navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200 py-4 mb-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {data.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToMonth(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeMonth === item.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {item.month}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Timeline content */}
      <div
        ref={timelineRef}
        className="max-w-4xl mx-auto px-6 py-8"
      >
        {data.map((item) => (
          <TimelineMonth
            key={item.id}
            month={item.month}
            year={item.year}
            id={item.id}
            entries={item.entries}
          />
        ))}

        {/* End marker */}
        <div className="mt-16 py-12 border-t-2 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            STAY TUNED
          </h3>
          <p className="text-gray-600">
            More exciting things coming this year. Check back soon.
          </p>
        </div>
      </div>
    </div>
  );
};
