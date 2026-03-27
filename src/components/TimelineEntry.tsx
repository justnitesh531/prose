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
  image,
}) => {
  const categoryColors: { [key: string]: string } = {
    MENU: 'bg-blue-100 text-blue-700',
    SPECIAL: 'bg-purple-100 text-purple-700',
    EVENT: 'bg-green-100 text-green-700',
    COLLABORATION: 'bg-amber-100 text-amber-700',
    BRAND: 'bg-pink-100 text-pink-700',
    DIGITAL: 'bg-cyan-100 text-cyan-700',
    MOTION: 'bg-red-100 text-red-700',
  };

  const categoryColor = categoryColors[category] || 'bg-gray-100 text-gray-700';

  return (
    <div
      className="group relative mb-8 border-l-2 border-gray-300 pl-6 transition-all duration-300 hover:border-gray-600 hover:pl-8"
      id={id}
    >
      {/* Timeline dot */}
      <div className="absolute -left-3 top-1 h-4 w-4 rounded-full bg-gray-900 ring-2 ring-white transition-all duration-300 group-hover:h-5 group-hover:w-5 group-hover:-left-3.5" />

      {/* Category badge */}
      <div className="mb-2 inline-block">
        <span
          className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded transition-all duration-300 ${categoryColor}`}
        >
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-gray-700">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-4 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Image if available */}
      {image && (
        <div className="mb-3 overflow-hidden rounded">
          <img
            src={image}
            alt={title}
            className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/* Link button */}
      {link && (
        <a
          href={link}
          className="inline-flex items-center text-sm font-medium text-gray-900 underline transition-colors duration-300 hover:text-gray-600"
        >
          OPEN <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">+</span>
        </a>
      )}
    </div>
  );
};
