'use client';

import React, { useState, useEffect } from 'react';
import { TimelineMonth } from './TimelineMonth';
import { EyeMatrix } from './EyeMatrix';

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
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(Math.min(scrolled, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full bg-black text-white">
      {/* Eye matrix background animation */}
      <EyeMatrix />

      {/* Scroll progress indicator - Yellow */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 pointer-events-none">
        <div className="text-xs font-black text-yellow-400 tabular-nums tracking-widest">
          [{Math.round(scrollProgress).toString().padStart(2, '0')}%]
        </div>
      </div>

      {/* Timeline content - ensure it's above the eye matrix */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 py-32 lg:py-40">
        {/* Header - Unseen style */}
        <div className="mb-40 space-y-12">
          <div className="space-y-6">
            <div className="text-sm uppercase tracking-widest text-yellow-400 font-black">
              [PROSE_25]
            </div>
            <div>
              <h1 className="text-7xl lg:text-8xl font-black leading-none text-white mb-6">
                SCROLL
              </h1>
              <p className="text-6xl lg:text-7xl font-black text-yellow-400">
                This way <span className="text-white">↓</span>
              </p>
            </div>
            <p className="text-lg text-gray-300 pt-4 max-w-3xl">
              To see the things we made.
            </p>
          </div>
        </div>

        {/* Months */}
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
        <div className="mt-48 pt-40 border-t border-gray-700 space-y-8">
          <h2 className="text-7xl lg:text-8xl font-black text-white leading-none">
            STAY TUNED
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl">
            Watch this space for more exciting things coming from Prose Café in 2025.
          </p>
          <div className="pt-8 space-y-4">
            <p className="text-sm uppercase tracking-widest text-yellow-400 font-black">
              [2026]
            </p>
            <p className="text-gray-400">
              We're excited to see what next year brings.
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-48 pt-16 border-t border-gray-700 flex flex-col gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-yellow-400 font-black mb-3">PROSE CAFÉ</p>
              <p className="text-sm text-gray-400">Bangalore, India</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-yellow-400 font-black mb-3">SOCIAL</p>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <a href="#" className="hover:text-yellow-400">Instagram</a>
                <a href="#" className="hover:text-yellow-400">Twitter</a>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-yellow-400 font-black mb-3">CONTACT</p>
              <a href="/contact" className="text-sm text-gray-400 hover:text-yellow-400">Get in touch</a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex justify-between items-center text-xs text-gray-500">
            <p>© 2025</p>
            <p>Prose Café</p>
          </div>
        </div>
      </div>
    </div>
  );
};
