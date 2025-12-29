'use client';

import { useState } from 'react';
import { m as motion, AnimatePresence } from '@/lib/motion';
import { Typography, Section, Card } from '@/components/ui';
import { resources } from '@/data/resources';
import { resourcesMeta } from '@/data/resourcesMeta';
import { FaPaintBrush, FaCode, FaLifeRing } from '@/components/icons';
import Link from 'next/link';
import Image from 'next/image';

// Icon mapping for categories
const categoryIcons = {
  design: FaPaintBrush,
  development: FaCode,
  support: FaLifeRing,
};

// Generate article previews from resources data with metadata
const generateResourceArticles = () => {
  const articles: any[] = [];

  Object.entries(resources).forEach(([slug, resource]) => {
    const meta = resourcesMeta[slug];
    if (!meta) return; // Skip if no metadata found

    articles.push({
      id: slug,
      title: resource.title,
      excerpt: resource.description,
      category: meta.categoryTitle,
      categoryId: meta.category,
      colorClass: meta.colorClass,
      bgClass: meta.bgClass,
      glowColor: meta.glowColor,
      readTime: meta.readTime,
      date: meta.date,
      image: meta.image,
    });
  });

  return articles;
};

export default function ServicesArticles() {
  const [activeCategory, setActiveCategory] = useState('All');
  const resourceArticles = generateResourceArticles();

  const categories = ['All', 'Design', 'Development', 'Support & Maintenance'];

  const filteredArticles =
    activeCategory === 'All'
      ? resourceArticles
      : resourceArticles.filter(article => article.category === activeCategory);

  return (
    <Section variant="muted" padding="lg">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" align="center" className="mb-4" id="articles">
            Browse Articles
          </Typography>
          <Typography
            variant="body1"
            color="secondary"
            align="center"
            className="text-xl max-w-3xl mx-auto"
          >
            In-depth guides covering design, development, and support services to help you make
            informed decisions.
          </Typography>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeCategory === category
                ? 'bg-brand-gold text-background shadow-lg shadow-brand-gold/30'
                : 'bg-background-secondary text-text-secondary hover:bg-background-secondary/80 border border-border-subtle'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-pressed={activeCategory === category}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Articles Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredArticles.map((article, index) => {
            return (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/resources/${article.id}`}>
                  <Card
                    className="overflow-hidden group cursor-pointer h-full relative"
                    hover
                    animated
                  >
                    <div className="relative overflow-hidden h-48">
                      {/* Background Image */}
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                      />

                      {/* Content Layer */}
                      <div className="relative z-10 h-full p-8 flex items-center justify-center">
                        <div className="absolute top-4 right-4">
                          <Typography
                            variant="caption"
                            component="span"
                            className={`px-3 py-1 ${article.bgClass} text-text-primary rounded-full font-semibold text-xs shadow-lg`}
                          >
                            {article.category}
                          </Typography>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Meta info */}
                      <div className="flex items-center text-sm text-text-muted mb-3">
                        <Typography variant="caption">{article.readTime}</Typography>
                        <Typography variant="caption" className="mx-2">
                          •
                        </Typography>
                        <Typography variant="caption">
                          {new Date(article.date).toLocaleDateString()}
                        </Typography>
                      </div>

                      {/* Title */}
                      <Typography
                        variant="h4"
                        className={`mb-3 group-hover:${article.colorClass} transition-colors`}
                      >
                        {article.title}
                      </Typography>

                      {/* Excerpt */}
                      <Typography variant="body2" color="secondary" className="mb-4 line-clamp-3">
                        {article.excerpt}
                      </Typography>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-12"
      ></motion.div>
    </Section>
  );
}
