import React from 'react';

interface TimelineEntryProps {
  id: string;
  category: string;
  title: string;
  description: string;
  kicker?: string;
  link?: string | null;
}

export const TimelineEntry: React.FC<TimelineEntryProps> = ({
  id,
  category,
  title,
  description,
  kicker,
  link,
}) => {
  return (
    <article className="entry-item" id={id}>
      <div className="entry-meta">
        [{category}] [{id}]
      </div>

      {kicker ? <p className="entry-kicker">{kicker}</p> : null}

      <h3 className="entry-title">{title}</h3>

      <p className="entry-description">{description}</p>

      {link && (
        <div className="entry-link-wrap">
          <a href={link} className="entry-link" target="_blank" rel="noreferrer">
            OPEN [+]
          </a>
        </div>
      )}
    </article>
  );
};
