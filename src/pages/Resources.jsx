import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import AnnouncementBar from '@/components/pnlt/AnnouncementBar';
import Header from '@/components/pnlt/Header';
import Footer from '@/components/pnlt/Footer';
import CategoryTabs from '@/components/resources/CategoryTabs';
import ArticleCard from '@/components/resources/ArticleCard';
import ArticleDetail from '@/components/resources/ArticleDetail';
import { ArrowRight, Loader2 } from 'lucide-react';

export default function Resources() {
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSlug, setActiveSlug] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    document.title = 'Learn More — PNLT Resources, Court Cases & HomeSecure™ Guides';
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.name = 'description';
    meta.content = "Explore PNLT's resource center — court cases, FAQs, HomeSecure™ guides, and the latest news. Expat housing Philippines, foreigner home Philippines.";
    if (!meta.parentNode) document.head.appendChild(meta);

    // Check URL param for pre-selected category
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    if (cat) setActiveSlug(cat);
  }, []);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const [cats, arts] = await Promise.all([
        base44.entities.ResourceCategory.filter({ is_visible: true }, 'display_order', 50),
        base44.entities.ResourceArticle.filter({ is_visible: true }, '-date_published', 100),
      ]);
      setCategories(cats);
      setArticles(arts);
      setLoading(false);
    }
    load();
  }, []);

  const featuredArticles = articles.filter((a) => a.is_featured);
  const filteredArticles = activeSlug === 'all'
    ? articles
    : articles.filter((a) => {
        const cat = categories.find((c) => c.slug === activeSlug);
        return cat && a.category_id === cat.id;
      });

  const getCategoryForArticle = (article) => categories.find((c) => c.id === article.category_id);

  const relatedArticles = selectedArticle
    ? articles.filter((a) => a.category_id === selectedArticle.category_id && a.id !== selectedArticle.id)
    : [];

  if (selectedArticle) {
    return (
      <div className="bg-white min-h-screen">
        <AnnouncementBar />
        <Header />
        <div className="pt-32">
          <ArticleDetail
            article={selectedArticle}
            category={getCategoryForArticle(selectedArticle)}
            relatedArticles={relatedArticles}
            relatedCategories={categories}
            onBack={() => setSelectedArticle(null)}
            onArticleClick={setSelectedArticle}
          />
          {/* CTA */}
          <div className="bg-light-gray py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <h3 className="font-display text-2xl text-navy">Have questions? Our team is ready to help.</h3>
              <div className="flex gap-3 shrink-0">
                <a
                  href="https://calendly.com/pnlt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold text-navy px-5 py-2.5 rounded font-semibold text-sm hover:bg-gold/90 transition-colors"
                >
                  Book a Consultation <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 border-2 border-navy text-navy px-5 py-2.5 rounded font-semibold text-sm hover:bg-navy hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <AnnouncementBar />
      <Header />
      <div className="pt-32">
        {/* Header */}
        <section className="bg-white py-16 md:py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-[11px] uppercase tracking-widest text-gold font-semibold mb-4">Resource Center</div>
            <h1 className="font-display text-4xl md:text-5xl text-navy leading-tight mb-5 max-w-3xl">
              Learn More About PNLT & HomeSecure™
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Explore our resource center — court cases, FAQs, in-depth guides, and the latest updates. We keep adding new content to help you make informed decisions about your future home in the Philippines.
            </p>
          </div>
        </section>

        {loading ? (
          <div className="flex items-center justify-center py-32">
            <Loader2 className="w-8 h-8 animate-spin text-gold" />
          </div>
        ) : (
          <>
            {/* Featured Articles */}
            {featuredArticles.length > 0 && (
              <section className="bg-white py-14">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="text-[11px] uppercase tracking-widest text-gold font-semibold">Featured</div>
                    <div className="flex-1 h-px bg-gray-100" />
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredArticles.slice(0, 4).map((a) => (
                      <div key={a.id} className="border-t-2 border-t-gold">
                        <ArticleCard
                          article={a}
                          category={getCategoryForArticle(a)}
                          onClick={() => setSelectedArticle(a)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Category + Articles */}
            <section className="bg-light-gray py-14 pb-24">
              <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="mb-8">
                  <CategoryTabs
                    categories={categories}
                    activeSlug={activeSlug}
                    onChange={setActiveSlug}
                  />
                </div>
                {filteredArticles.length === 0 ? (
                  <div className="text-center py-20 text-muted-foreground">
                    New content coming soon. Check back or{' '}
                    <a href="/#contact" className="text-gold font-semibold hover:underline">contact us</a> for information.
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.map((a) => (
                      <ArticleCard
                        key={a.id}
                        article={a}
                        category={getCategoryForArticle(a)}
                        onClick={() => setSelectedArticle(a)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-white py-16">
              <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <h3 className="font-display text-2xl text-navy">Have questions? Our team is ready to help.</h3>
                <div className="flex gap-3 shrink-0">
                  <a
                    href="https://calendly.com/pnlt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gold text-navy px-5 py-2.5 rounded font-semibold text-sm hover:bg-gold/90 transition-colors"
                  >
                    Book a Consultation <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 border-2 border-navy text-navy px-5 py-2.5 rounded font-semibold text-sm hover:bg-navy hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </section>
          </>
        )}
        <Footer />
      </div>
    </div>
  );
}