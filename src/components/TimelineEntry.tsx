import React from 'react';

interface TimelineEntryProps {
  id: string;
  category: string;
  title: string;
  description: string;
  link?: string | null;
  image?: string;
}

export const TimelineEntry: React.FC<TimelineEntryProps> = ({
  id,
  category,
  title,
  description,
  link,
}) => {
  return (
    <div className="mb-16 space-y-3 text-base leading-relaxed border-b border-gray-800 pb-16" id={id}>
      {/* Category tag - yellow */}
      <div className="text-xs uppercase tracking-widest text-yellow-400 font-black">
        [{category}] [{id}]
      </div>

      {/* Title - large and bold */}
      <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 text-base leading-relaxed">
        {description}
      </p>

      {/* Link button if available */}
      {link && (
        <div className="pt-3">
          <a
            href={link}
            className="inline-flex items-center gap-1 text-yellow-400 font-black hover:text-yellow-300 transition-colors text-sm uppercase tracking-wide"
          >
            OPEN [+]
          </a>
        </div>
      )}
    </div>
  );
};
