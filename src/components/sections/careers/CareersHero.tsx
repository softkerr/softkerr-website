'use client';

import { motion } from 'framer-motion';
import { Container, Section, Typography, Button } from '@/components/ui';
import { HiSparkles } from 'react-icons/hi';
import { FaUsers, FaRocket, FaHeart, FaBriefcase } from 'react-icons/fa';
import Link from 'next/link';

export default function CareersHero() {
  const scrollToPositions = () => {
    const element = document.getElementById('open-positions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const perks = [
    { icon: FaUsers, title: 'Remote First', color: 'brand-violet' },
    { icon: FaRocket, title: 'Fast Growth', color: 'brand-gold' },
    { icon: FaHeart, title: 'Work-Life Balance', color: 'brand-pink' },
    { icon: FaBriefcase, title: 'Great Benefits', color: 'brand-cyan' },
  ];

  return (
    <Section className="relative py-12 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-violet/5 to-transparent" />

      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.2) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating Orb */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-violet/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-violet/20 to-brand-gold/20 border border-brand-violet/30 backdrop-blur-sm"
            >
              <HiSparkles className="w-4 h-4 text-brand-violet" />
              <Typography variant="body2" className="text-brand-violet font-medium">
                We're Hiring
              </Typography>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography
                variant="h1"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                Join Our{' '}
                <span className="bg-gradient-to-r from-brand-violet via-brand-gold to-brand-pink bg-clip-text text-transparent">
                  Amazing Team
                </span>
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography variant="body1" className="text-lg text-gray-300 leading-relaxed">
                Work with talented designers and developers building exceptional digital products.
                We're looking for passionate individuals who want to make an impact and grow their
                careers.
              </Typography>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 py-6"
            >
              <div className="space-y-1">
                <Typography variant="h3" className="text-3xl font-bold text-brand-violet">
                  20+
                </Typography>
                <Typography variant="caption" className="text-gray-400 text-sm">
                  Team Members
                </Typography>
              </div>
              <div className="space-y-1">
                <Typography variant="h3" className="text-3xl font-bold text-brand-gold">
                  15+
                </Typography>
                <Typography variant="caption" className="text-gray-400 text-sm">
                  Countries
                </Typography>
              </div>
              <div className="space-y-1">
                <Typography variant="h3" className="text-3xl font-bold text-brand-pink">
                  4.9
                </Typography>
                <Typography variant="caption" className="text-gray-400 text-sm">
                  Rating
                </Typography>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 lg:pt-8"
            >
              <Button
                onClick={scrollToPositions}
                size="lg"
                className="group"
                aria-label="View Open Positions"
              >
                View Open Positions
              </Button>
              <Button variant="outline" size="lg" href="/contacts" aria-label="Get in Touch">
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Glass Container with Perks */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-background-secondary/50 to-background/30 backdrop-blur-xl border border-white/10 shadow-2xl">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-violet/20 via-brand-gold/20 to-brand-pink/20 rounded-3xl blur-xl opacity-50" />

              <div className="relative space-y-6">
                <Typography variant="h4" className="text-2xl font-bold mb-6">
                  Why Join Us?
                </Typography>

                {/* Perks Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {perks.map((perk, index) => {
                    const Icon = perk.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        className="group p-4 rounded-xl bg-background-secondary/50 border border-border-subtle hover:border-brand-violet/40 transition-all duration-300"
                      >
                        <div
                          className={`w-12 h-12 rounded-lg bg-${perk.color}/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                        >
                          <Icon className={`text-2xl text-${perk.color}`} />
                        </div>
                        <Typography variant="body2" className="font-medium">
                          {perk.title}
                        </Typography>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Additional Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="pt-6 border-t border-white/10 space-y-3"
                >
                  {[
                    'Competitive salary & equity',
                    'Flexible working hours',
                    'Learning & development budget',
                    'Health & wellness benefits',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-violet" />
                      <Typography variant="body2" className="text-gray-300">
                        {benefit}
                      </Typography>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
