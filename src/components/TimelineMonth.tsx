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
    <section
      className="scroll-mt-20 mb-16 py-12 transition-all duration-300"
      id={id}
    >
      {/* Month header */}
      <div className="mb-8 flex items-baseline gap-3 border-b-2 border-gray-200 pb-4">
        <h2 className="text-4xl font-bold text-gray-900">{month}</h2>
        <span className="text-lg text-gray-400 font-light">{year}</span>
        <span className="text-xs uppercase tracking-widest text-gray-400 ml-auto">
          [{id}]
        </span>
      </div>

      {/* Entries */}
      <div className="space-y-2">
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
