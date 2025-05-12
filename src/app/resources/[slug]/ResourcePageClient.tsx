'use client';

import { motion } from 'framer-motion';
import { Container, Section, Typography, Button } from '@/components/ui';
import {
  FaCheckCircle,
  FaArrowLeft,
  FaPaintBrush,
  FaCode,
  FaLifeRing,
  FaUser,
  FaCalendar,
  FaClock,
} from 'react-icons/fa';
import Link from 'next/link';
import HomeCTA from '@/components/sections/HomeCTA';
import RelatedArticles from '@/components/sections/services/RelatedArticles';

// Template type definition
interface PageTemplate {
  title?: string;
  description?: string;
  desc?: string;
  content?: Array<{
    title?: string;
    description?: string;
    listTitle?: string;
    list?: (string | React.ReactNode)[];
    listDescription?: string;
    listFooter?: string;
  }>;
  footer?: string;
  lastUpdated?: string;
}

interface ResourcePageClientProps {
  pageData: PageTemplate;
  slug?: string;
}

// Determine category from slug
function getCategoryFromSlug(slug?: string): {
  name: string;
  icon: any;
  colorClass: string;
  bgClass: string;
  borderClass: string;
} {
  if (!slug)
    return {
      name: 'Resources',
      icon: FaCode,
      colorClass: 'text-brand-gold',
      bgClass: 'bg-brand-gold',
      borderClass: 'border-brand-gold',
    };

  if (slug.includes('design')) {
    return {
      name: 'Design',
      icon: FaPaintBrush,
      colorClass: 'text-brand-violet',
      bgClass: 'bg-brand-violet',
      borderClass: 'border-brand-violet',
    };
  } else if (slug.includes('support') || slug.includes('maintenance') || slug.includes('hosting')) {
    return {
      name: 'Support',
      icon: FaLifeRing,
      colorClass: 'text-brand-blue',
      bgClass: 'bg-brand-blue',
      borderClass: 'border-brand-blue',
    };
  } else {
    return {
      name: 'Development',
      icon: FaCode,
      colorClass: 'text-brand-gold',
      bgClass: 'bg-brand-gold',
      borderClass: 'border-brand-gold',
    };
  }
}

const Resources = ({ pageData, slug }: ResourcePageClientProps) => {
  const description = pageData.description || pageData.desc;
  const category = getCategoryFromSlug(slug);
  const CategoryIcon = category.icon;

  return (
    <>
      <Section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl border-2 ${category.borderClass} bg-slate-900/50 backdrop-blur-sm p-8 md:p-12 shadow-2xl shadow-${category.bgClass}/20`}
          >
            {/* Back Button */}
            <Link href="/resources">
              <Button
                variant="ghost"
                leftIcon={<FaArrowLeft />}
                className={`mb-6 ${category.colorClass} hover:bg-white/5`}
              >
                Back to Resources
              </Button>
            </Link>

            {/* Category with Icon */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`p-3 rounded-xl ${category.bgClass} bg-opacity-20 ${category.borderClass} border`}
              >
                <CategoryIcon className={`text-2xl ${category.colorClass}`} />
              </div>
              <Typography variant="h3" className={`text-xl font-bold ${category.colorClass}`}>
                {category.name}
              </Typography>
            </div>

            {/* Title */}
            {pageData.title && (
              <Typography variant="h1" className="text-4xl md:text-6xl font-bold mb-6 text-white">
                {pageData.title}
              </Typography>
            )}

            {/* Meta Bar */}
            <div
              className={`flex flex-wrap items-center gap-4 p-4 rounded-lg ${category.bgClass} bg-opacity-10 border ${category.borderClass} border-opacity-30 mb-6`}
            >
              <div className="flex items-center gap-2">
                <FaUser className={category.colorClass} />
                <span className="text-slate-300 text-sm">SoftKerr Design Team</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <FaCalendar className={category.colorClass} />
                <span className="text-slate-300 text-sm">October 30, 2025</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <FaClock className={category.colorClass} />
                <span className="text-slate-300 text-sm">8 min read</span>
              </div>
            </div>

            {/* Description */}
            {description && (
              <Typography
                variant="body1"
                className="text-slate-300 max-w-3xl text-lg whitespace-pre-line leading-none"
              >
                {description}
              </Typography>
            )}
          </motion.div>
        </Container>
      </Section>

      {/* Content Sections */}
      {pageData.content && pageData.content.length > 0 && (
        <Section className="bg-slate-950">
          <Container>
            <div className="max-w-4xl mx-auto space-y-16">
              {pageData.content.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative pl-8 border-l-2 border-slate-800 hover:border-opacity-100 transition-all"
                >
                  {section.title && (
                    <Typography
                      variant="h2"
                      className="text-3xl md:text-4xl font-bold mb-6 text-white"
                    >
                      {section.title}
                    </Typography>
                  )}
                  {section.description && (
                    <Typography
                      variant="body1"
                      className="text-slate-300 leading-relaxed text-lg whitespace-pre-line mb-6"
                    >
                      {section.description}
                    </Typography>
                  )}
                  {section.listTitle && (
                    <Typography
                      variant="h5"
                      className="text-slate-300 leading-relaxed text-lg mt-4"
                    >
                      {section.listTitle}
                    </Typography>
                  )}

                  {/* List Items */}
                  {section.listDescription && (
                    <Typography
                      variant="body1"
                      className="text-slate-300 leading-relaxed text-lg whitespace-pre-line"
                    >
                      {section.listDescription}
                    </Typography>
                  )}
                  {section.list && section.list.length > 0 && (
                    <ul className="space-y-4 mt-4">
                      {section.list.map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-4 p-4 rounded-lg ${category.bgClass} bg-opacity-5 hover:bg-opacity-10 transition-all`}
                        >
                          <FaCheckCircle
                            className={`${category.colorClass} text-xl mt-1 flex-shrink-0`}
                          />
                          <Typography className="text-slate-300 text-lg">
                            {typeof item === 'string' ? item : item}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.listFooter && (
                    <Typography
                      variant="body1"
                      className={`text-slate-400 leading-relaxed text-base mt-6 p-4 rounded-lg ${category.bgClass} bg-opacity-5 italic`}
                    >
                      {section.listFooter}
                    </Typography>
                  )}
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Footer Section */}
      {pageData.footer && (
        <Section className={`relative overflow-hidden`}>
          <div className={`absolute inset-0 ${category.bgClass} opacity-5`} />
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative max-w-4xl mx-auto text-center"
            >
              <Typography
                variant="body1"
                className="text-slate-300 leading-relaxed lg:text-2xl whitespace-pre-line"
              >
                {pageData.footer}
              </Typography>
            </motion.div>
          </Container>
        </Section>
      )}
      <RelatedArticles />

      <HomeCTA />
    </>
  );
};

export default Resources;
