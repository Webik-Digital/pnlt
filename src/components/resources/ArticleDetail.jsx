import React from 'react';
import { ArrowLeft, ExternalLink, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import ArticleCard from './ArticleCard';

const categoryColors = {
  'court-cases': 'bg-red-50 text-red-600',
  'faqs': 'bg-blue-50 text-blue-600',
  'homesecure-explained': 'bg-amber-50 text-amber-700',
  'expat-living': 'bg-green-50 text-green-600',
  'news': 'bg-purple-50 text-purple-600',
};

export default function ArticleDetail({ article, category, relatedArticles, relatedCategories, onBack, onArticleClick }) {
  const colorCls = categoryColors[category?.slug] || 'bg-gray-100 text-gray-600';

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-navy transition-colors mb-8 text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Learn More
      </button>

      {category && (
        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold mb-6 ${colorCls}`}>
          {category.icon && <span>{category.icon}</span>} {category.name}
        </span>
      )}

      <h1 className="font-display text-4xl md:text-5xl text-navy leading-tight mb-4">{article.title}</h1>
      <p className="text-sm text-muted-foreground mb-10">
        {article.date_published ? format(new Date(article.date_published), 'MMMM d, yyyy') : ''}
      </p>

      <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed whitespace-pre-line mb-10">
        {article.content}
      </div>

      {article.source_url && (
        <a
          href={article.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 rounded font-semibold hover:bg-gold/90 transition-colors mb-12"
        >
          {article.source_label || 'View Source'} <ExternalLink className="w-4 h-4" />
        </a>
      )}

      <div className="border-t border-gray-100 pt-10 mb-12">
        <p className="text-muted-foreground text-sm">
          Have questions about this topic?{' '}
          <a href="/#contact" className="text-gold font-semibold hover:underline">Contact us.</a>
        </p>
      </div>

      {relatedArticles.length > 0 && (
        <div>
          <h3 className="font-display text-2xl text-navy mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-5">
            {relatedArticles.slice(0, 2).map((a) => (
              <ArticleCard
                key={a.id}
                article={a}
                category={relatedCategories.find((c) => c.id === a.category_id)}
                onClick={() => onArticleClick(a)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}