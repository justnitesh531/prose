import React from 'react';
import { TimelineEntry } from './TimelineEntry';

interface TimelineMonthProps {
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

export const TimelineMonth: React.FC<TimelineMonthProps> = ({
  month,
  year,
  id,
  entries,
}) => {
  return (
    <section className="mb-40 scroll-mt-8" id={id}>
      {/* Month header - enormous and bold */}
      <div className="mb-24 space-y-4">
        <h2 className="text-8xl lg:text-9xl font-black text-white leading-none tracking-tight">
          {month.toUpperCase()}
        </h2>
        <p className="text-sm uppercase tracking-widest text-yellow-400 font-black">
          [{id}] {year}
        </p>
      </div>

      {/* Entries */}
      <div className="space-y-0 max-w-5xl">
        {entries.map((entry) => (
          <TimelineEntry
            key={entry.id}
            id={entry.id}
            category={entry.category}
            title={entry.title}
            description={entry.description}
            image={entry.image}
            link={entry.link}
          />
        ))}
      </div>
    </section>
  );
};
