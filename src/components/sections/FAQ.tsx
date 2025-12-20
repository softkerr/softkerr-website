'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Typography from '@/components/ui/Typography';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import { Link } from '../ui';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface FAQSectionProps {
  page: 'home' | 'services' | 'dedicated-team' | 'pricing' | 'projects' | 'contacts';
  title?: string;
  description?: string;
}

// All FAQ data organized by category for reusability
const allFAQs: Record<string, FAQ[]> = {
  general: [
    {
      id: 'general-1',
      question: 'How do you ensure project quality?',
      answer:
        'We follow strict quality assurance processes including code reviews, automated testing, and regular client feedback sessions. Every project goes through multiple quality checkpoints before delivery. Our team uses industry best practices and modern development methodologies to ensure the highest standards.',
    },
    {
      id: 'general-2',
      question: 'Do you work with international clients?',
      answer:
        'Yes, we work with clients globally across 15+ countries. We have experience working across different time zones and have established processes for remote collaboration. Our team provides 24/7 coverage to ensure seamless communication regardless of your location.',
    },
    {
      id: 'general-3',
      question: 'What is your typical project timeline?',
      answer:
        'Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed timelines during the planning phase and use agile sprints to deliver value incrementally.',
    },
  ],
  services: [
    {
      id: 'services-1',
      question: 'What technologies do you specialize in?',
      answer:
        'We specialize in modern web technologies including React, Next.js, Node.js, TypeScript, and cloud platforms like AWS. Our tech stack is constantly evolving to incorporate the latest industry standards and best practices for optimal performance and scalability.',
    },
    {
      id: 'services-2',
      question: 'Do you provide ongoing maintenance and support?',
      answer:
        'Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance optimization, and feature enhancements. We have flexible support plans ranging from basic monitoring to 24/7 dedicated support.',
    },
    {
      id: 'services-3',
      question: 'Can you integrate with existing systems?',
      answer:
        "Absolutely! We have extensive experience integrating with various third-party services, APIs, and legacy systems. Whether it's payment gateways, CRM systems, or custom databases, we ensure seamless integration with your existing infrastructure.",
    },
  ],
  team: [
    {
      id: 'team-1',
      question: 'Can you work with our existing team?',
      answer:
        'Absolutely! We excel at integrating with existing teams. Our developers can work independently or alongside your in-house team, adapting our workflow to match your preferred collaboration style, tools, and processes.',
    },
    {
      id: 'team-2',
      question: 'How do you handle project communication?',
      answer:
        "We use modern collaboration tools like Slack, Microsoft Teams, and Jira. You'll have direct access to your project team through daily standups, weekly sprint reviews, and real-time chat. We provide regular progress updates and maintain complete transparency throughout the project.",
    },
    {
      id: 'team-3',
      question: 'What is your team scaling process?',
      answer:
        'We can quickly scale your dedicated team up or down based on project needs. Our large talent pool of 70+ professionals allows us to add specialized experts within days. We maintain consistent quality through our rigorous vetting and onboarding processes.',
    },
    {
      id: 'team-4',
      question: 'How do you ensure team productivity?',
      answer:
        'We use agile methodologies with 2-week sprints, daily standups, and clear KPIs. Our project managers track progress using modern tools and provide regular reports. We also conduct retrospectives to continuously improve our processes and team efficiency.',
    },
  ],
  pricing: [
    {
      id: 'pricing-1',
      question: 'What are your pricing models?',
      answer:
        'We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team retainers. The best model depends on your project scope, timeline, and requirements. We provide transparent quotes with no hidden fees.',
    },
    {
      id: 'pricing-2',
      question: 'Do you require upfront payment?',
      answer:
        'We typically work with milestone-based payments. For fixed-price projects, we require a deposit to begin work, with remaining payments tied to project milestones. For retainer agreements, we bill monthly. Payment terms are flexible and can be customized.',
    },
    {
      id: 'pricing-3',
      question: 'What happens if the project scope changes?',
      answer:
        'We use a change request process to handle scope changes. For time & materials contracts, changes are straightforward. For fixed-price projects, we provide estimates for additional work and adjust timelines accordingly. We maintain clear documentation of all changes.',
    },
  ],
  projects: [
    {
      id: 'projects-1',
      question: 'Can you show examples of similar projects?',
      answer:
        'Yes! We have extensive portfolio showcasing projects across various industries. We can provide case studies and demos of projects similar to your requirements. Some client work is under NDA, but we can discuss approaches and methodologies used.',
    },
    {
      id: 'projects-2',
      question: 'Do you sign NDAs?',
      answer:
        'Absolutely. We understand the importance of confidentiality and are happy to sign NDAs before discussing your project details. We also implement strict security measures to protect your intellectual property and sensitive data.',
    },
  ],
  support: [
    {
      id: 'support-1',
      question: 'What happens after launch?',
      answer:
        'All projects include post-launch support to ensure smooth deployment. We monitor for issues, provide bug fixes, and offer training for your team. After the initial support period, you can choose from our maintenance packages or work with us on a project basis.',
    },
    {
      id: 'support-2',
      question: 'Do you provide training for our team?',
      answer:
        'Yes, we offer comprehensive training and documentation. This includes technical documentation, user guides, video tutorials, and live training sessions. We ensure your team is fully equipped to manage and maintain the solution.',
    },
  ],
};

// Page-specific FAQ configurations
const pageFAQConfigs: Record<
  FAQSectionProps['page'],
  { categories: string[]; title: string; description: string }
> = {
  home: {
    categories: ['general', 'services'],
    title: 'Frequently Asked Questions',
    description: 'Common questions about working with us and our services',
  },
  services: {
    categories: ['services', 'general', 'support'],
    title: 'Service Questions',
    description: 'Everything you need to know about our development services',
  },
  'dedicated-team': {
    categories: ['team', 'general', 'pricing'],
    title: 'Team & Collaboration',
    description: 'Questions about our dedicated team model and how we work',
  },
  pricing: {
    categories: ['pricing', 'general'],
    title: 'Pricing & Payments',
    description: 'Transparent answers about our pricing and payment terms',
  },
  projects: {
    categories: ['projects', 'general', 'support'],
    title: 'Project Inquiries',
    description: 'Common questions about project execution and deliverables',
  },
  contacts: {
    categories: ['general', 'team'],
    title: 'Get Started',
    description: "Have more questions? We're here to help",
  },
};

const FAQItem = ({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-xl overflow-hidden hover:border-white/30 transition-colors"
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-6 flex items-center justify-between gap-4 group"
        aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${faq.question}`}
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          <Typography
            variant="h3"
            className="text-base md:text-lg font-semibold text-white mb-1 group-hover:text-brand-gold transition-colors"
          >
            {faq.question}
          </Typography>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-brand-gold"
        >
          <FaChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <div className="border-t border-white/10 pt-4">
                <Typography variant="body2" className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </Typography>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQSection({ page, title, description }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const config = pageFAQConfigs[page];
  const displayTitle = title || config.title;
  const displayDescription = description || config.description;

  // Get FAQs for this page based on configured categories
  const pageFAQs = config.categories.flatMap(category => allFAQs[category] || []);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="relative py-12 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-pink/5 to-transparent" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(236,72,153,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Typography
            variant="overline"
            className="text-accent-yellow mb-4 tracking-widest text-center"
          >
            FAQ
          </Typography>
          <Typography
            variant="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center"
          >
            {displayTitle}
          </Typography>

          <Typography
            variant="body1"
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center"
          >
            {displayDescription}
          </Typography>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {pageFAQs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        {page !== 'contacts' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-6 md:mt-8 max-w-4xl mx-auto"
          >
            <Typography variant="body2" className="text-gray-400">
              Still have questions?{' '}
              <Link
                href="/contacts"
                className="text-brand-gold hover:text-brand-violet transition-colors underline"
              >
                Contact Us
              </Link>
            </Typography>
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
