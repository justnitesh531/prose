'use client';

import React, { useEffect, useState } from 'react';
import { EyeMatrix } from './EyeMatrix';

interface TimelineData {
  month: string;
  year: number;
  id: string;
  intro: string;
  entries: Array<{
    id: string;
    category: string;
    kicker?: string;
    title: string;
    description: string;
    link?: string | null;
  }>;
}

interface TimelineProps {
  data: TimelineData[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const [trackX, setTrackX] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      
      // Calculate scrollable bounds
      const maxScrollY = doc.scrollHeight - window.innerHeight;
      const currentScrollY = window.scrollY;
      
      // Calculate progress percentage (0 to 1)
      const scrollPercentage = maxScrollY > 0 ? currentScrollY / maxScrollY : 0;
      setScrollProgress(Math.min(scrollPercentage * 100, 100));

      const track = document.querySelector('.horizontal-track') as HTMLElement;
      if (track) {
        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        const maxScrollX = Math.max(0, trackWidth - viewportWidth);
        const translateX = -(scrollPercentage * maxScrollX);
        setTrackX(translateX);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    // Recalculate on resize
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="timeline-page">
        <EyeMatrix />

        <div className="progress-indicator" aria-hidden="true">
          <div>
            [{Math.round(scrollProgress).toString().padStart(2, '0')}%]
          </div>
        </div>

        <main className="timeline-wrap">
          <div className="horizontal-shell">
            <div className="horizontal-stage">
              <div className="horizontal-track" style={{ transform: `translate3d(${trackX}px, 0, 0)` }}>
                {/* Dotted path connecting the panels */}
                <div className="dotted-path" aria-hidden="true" />

                <section className="h-panel intro-screen">
                  <header className="utility-row">
                    <p>[P_S_25]</p>
                    <a href="https://www.prose.co.in/" target="_blank" rel="noreferrer">
                      Prose & Pixels Studio®
                    </a>
                    <div>
                      <a href="#" aria-label="X">[X]</a>
                      <a href="#" aria-label="Instagram">[IG]</a>
                      <a href="#" aria-label="LinkedIn">[LI]</a>
                    </div>
                  </header>

                  <div className="intro-hero-grid">
                    <div className="intro-title-wrap">
                      <p className="intro-label">YEAR IN REVIEW</p>
                      <h1 className="intro-block intro-block--a">PROSE & PIXELS</h1>
                      <h1 className="intro-block intro-block--b">STUDIO</h1>
                    </div>
                  </div>

                  <div className="intro-footer-row">
                    <a href="mailto:projects@prose.co.in">[START A PROJECT WITH US]</a>
                    <div className="intro-scroll-copy">
                      <span>[SCROLL]</span>
                      <span>This way ↓</span>
                      <span>To see the things we made.</span>
                    </div>
                  </div>
                </section>

                {data.map((item) => (
                  <section className="h-panel month-section" key={item.id} id={item.id}>
                     <header className="month-header">
                        <p className="month-id">[{item.id}]</p>
                        <h2 className="month-main">{item.month.toUpperCase()}</h2>
                        <p className="month-intro">{item.intro}</p>
                      </header>
                    <div className="month-entries">
                      {item.entries.map((entry) => (
                        <article key={entry.id} className="entry-item" id={entry.id}>
                          <div className="entry-meta">[{entry.category}] [{entry.kicker ?? item.id}]</div>
                          <h3 className="entry-title">{entry.title}</h3>
                          <p className="entry-description">{entry.description}</p>
                          {entry.link ? (
                            <div className="entry-link-wrap">
                              <a href={entry.link} className="entry-link" target="_blank" rel="noreferrer">
                                OPEN [+]
                              </a>
                            </div>
                          ) : null}
                        </article>
                      ))}
                    </div>
                  </section>
                ))}

                <section className="h-panel end-state">
                  <h2>STAY TUNED</h2>
                  <p>WATCH THIS SPACE FOR OUR NEXT LAUNCH.</p>
                  <p>[2026]</p>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Invisible scrollbar element to enable page scrolling */}
      <div className="scroll-spacer" />
    </>
  );
};
