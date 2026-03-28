import React from 'react';
import { TimelineEntry } from './TimelineEntry';

interface TimelineMonthProps {
  month: string;
  year: number;
  id: string;
  intro: string;
  entries: Array<{
    id: string;
    category: string;
    title: string;
    description: string;
    kicker?: string;
    link?: string | null;
  }>;
}

export const TimelineMonth: React.FC<TimelineMonthProps> = ({
  month,
  year,
  id,
  intro,
  entries,
}) => {
  const featured = entries[0];

  return (
    <section className="month-block" id={id}>
      <header className="month-header" data-scene>
        <div className="month-scene">
          <div className="month-left" data-parallax-left>
            <p className="month-id">[{id}]</p>
            <h2 className="month-echo" aria-hidden="true">
              {month.toUpperCase()}
            </h2>
            <h2 className="month-echo" aria-hidden="true">
              {month.toUpperCase()}
            </h2>
            <h2 className="month-main">{month.toUpperCase()}</h2>
          </div>

          <aside className="month-media" data-parallax-right>
            <div className="month-media-card">
              <p className="month-media-kicker">[{featured?.category ?? 'FILM'}] [{year}]</p>
              <h3>{featured?.title ?? intro}</h3>
            </div>
          </aside>
        </div>

        <div className="flow-guide" aria-hidden="true">
          <span>Keep scrolling</span>
          <span className="flow-line" />
          <span className="eye-badge">👀</span>
        </div>

        <p className="month-intro">{intro}</p>
      </header>

      <div className="month-entries">
        {entries.map((entry) => (
          <TimelineEntry
            key={entry.id}
            id={entry.id}
            category={entry.category}
            title={entry.title}
            description={entry.description}
            kicker={entry.kicker}
            link={entry.link}
          />
        ))}
      </div>
    </section>
  );
};
