import React from 'react';

export default function CategoryTabs({ categories, activeSlug, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange('all')}
        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeSlug === 'all'
            ? 'bg-gold text-navy'
            : 'bg-white border border-gray-200 text-navy hover:bg-light-gray'
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.slug)}
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeSlug === cat.slug
              ? 'bg-gold text-navy'
              : 'bg-white border border-gray-200 text-navy hover:bg-light-gray'
          }`}
        >
          {cat.icon && <span>{cat.icon}</span>}
          {cat.name}
        </button>
      ))}
    </div>
  );
}