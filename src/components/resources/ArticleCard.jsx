import React from 'react';
import { ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

const categoryColors = {
  'court-cases': 'bg-red-50 text-red-600',
  'faqs': 'bg-blue-50 text-blue-600',
  'homesecure-explained': 'bg-amber-50 text-amber-700',
  'expat-living': 'bg-green-50 text-green-600',
  'news': 'bg-purple-50 text-purple-600',
};

export default function ArticleCard({ article, category, onClick }) {
  const colorCls = categoryColors[category?.slug] || 'bg-gray-100 text-gray-600';

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        {category && (
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${colorCls}`}>
            {category.icon && <span>{category.icon}</span>}
            {category.name}
          </span>
        )}
        {article.is_featured && (
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gold/10 text-gold">Featured</span>
        )}
      </div>
      <h3
        className="font-display text-xl text-navy font-semibold mb-3 cursor-pointer hover:text-gold transition-colors leading-tight"
        onClick={onClick}
      >
        {article.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{article.summary}</p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
        <span className="text-xs text-muted-foreground">
          {article.date_published ? format(new Date(article.date_published), 'MMM d, yyyy') : ''}
        </span>
        <button
          onClick={onClick}
          className="inline-flex items-center gap-1 text-gold font-semibold text-sm hover:underline"
        >
          Read More <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}