'use client';

import { motion } from 'framer-motion';
import { Container, Typography } from '@/components/ui';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { resources } from '@/data/resources';
import { resourcesMeta } from '@/data/resourcesMeta';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTitle: string;
  bgClass: string;
  readTime: string;
  link: string;
}

const generateArticlesFromResources = (): Article[] => {
  const articles: Article[] = [];

  Object.entries(resources).forEach(([slug, resource]) => {
    const meta = resourcesMeta[slug];
    if (!meta) return;

    articles.push({
      id: slug,
      title: resource.title,
      excerpt: resource.description,
      category: meta.category,
      categoryTitle: meta.categoryTitle,
      bgClass: meta.bgClass,
      readTime: meta.readTime,
      link: `/resources/${slug}`,
    });
  });

  return articles;
};

const getRelatedArticles = (count: number = 3): Article[] => {
  const allArticles = generateArticlesFromResources();
  const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default function RelatedArticles() {
  const articles = getRelatedArticles(3);

  return (
    <div className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-violet/5 via-transparent to-brand-gold/5" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-3">
            <Typography variant="h4" className="text-xl">
              Continue <span className="text-gradient">Reading</span>
            </Typography>
          </div>
          <Link
            href="/resources"
            className="text-sm text-brand-violet hover:text-brand-gold transition-colors flex items-center gap-2 group"
          >
            <span>View All</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {articles.map((article, index) => {
            return (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={article.link}>
                  <div className="group p-4 rounded-xl bg-background-secondary/30 border border-border-subtle hover:border-brand-violet/40 transition-all duration-300 h-full">
                    <div className="mb-3">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${article.bgClass}`}
                      >
                        {article.categoryTitle}
                      </span>
                    </div>

                    <Typography
                      variant="body1"
                      className="text-sm font-semibold mb-2 line-clamp-2 transition-colors"
                    >
                      {article.title}
                    </Typography>

                    <Typography variant="caption" className="text-xs text-text-muted">
                      {article.readTime}
                    </Typography>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
