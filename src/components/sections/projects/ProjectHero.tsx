'use client';

import { motion } from 'framer-motion';
import { Typography, Container, Button, Link, ScrollReveal, Section } from '@/components/ui';
import { HiSparkles } from 'react-icons/hi';
import {
  FaProjectDiagram,
  FaChartLine,
  FaUsers,
  FaStar,
  FaArrowRight,
  FaPlay,
  FaRocket,
  FaAward,
  FaCode,
} from 'react-icons/fa';

const ProjectHero = () => {
  return (
    <Section className="relative py-12 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-violet/5 to-transparent" />

      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)`,
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
                Featured Case Studies
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
                Projects That{' '}
                <span className="bg-gradient-to-r from-brand-violet via-brand-gold to-brand-pink bg-clip-text text-transparent">
                  Define Excellence
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
                Explore our portfolio of transformative digital solutions. Each project represents
                our commitment to innovation, quality, and measurable business impact.
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
                  150+
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Projects Delivered
                </Typography>
              </div>
              <div className="space-y-1">
                <Typography variant="h3" className="text-3xl font-bold text-brand-gold">
                  98%
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Satisfaction Rate
                </Typography>
              </div>
              <div className="space-y-1">
                <Typography variant="h3" className="text-3xl font-bold text-brand-pink">
                  50M+
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Users Impacted
                </Typography>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 lg:pt-8"
            >
              <Button
                variant="primary"
                size="lg"
                href="/contacts"
                rightIcon={<FaArrowRight />}
                aria-label="Start Your Project"
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/services"
                leftIcon={<FaPlay />}
                className="border-white/20 hover:border-brand-violet/50"
                aria-label="Our Services"
              >
                Our Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Glass Container Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Main Container with 3:4 Aspect Ratio */}
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/20 via-brand-gold/20 to-brand-pink/20 rounded-3xl" />

              {/* Glass Container */}
              <motion.div
                className="relative h-full backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-50"
                  animate={{
                    background: [
                      'radial-gradient(circle at 0% 0%, rgba(139,92,246,0.3), transparent 50%)',
                      'radial-gradient(circle at 100% 100%, rgba(240,185,11,0.3), transparent 50%)',
                      'radial-gradient(circle at 0% 100%, rgba(236,72,153,0.3), transparent 50%)',
                      'radial-gradient(circle at 0% 0%, rgba(139,92,246,0.3), transparent 50%)',
                    ],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col p-8">
                  {/* Top Section */}
                  <div className="flex-1 flex flex-col justify-center space-y-6">
                    {/* Icon */}
                    <motion.div
                      className="flex justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-violet to-brand-gold flex items-center justify-center shadow-lg shadow-brand-violet/50">
                        <FaProjectDiagram className="w-12 h-12 text-white" />
                      </div>
                    </motion.div>

                    <div className="text-center space-y-2">
                      <Typography variant="h3" className="text-2xl font-bold text-white">
                        Case Studies
                      </Typography>
                      <Typography variant="body2" className="text-gray-300">
                        Real results, real impact
                      </Typography>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaChartLine className="w-6 h-6 text-brand-gold mb-2" />
                        <Typography variant="h4" className="text-xl font-bold text-white">
                          300%
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Avg. ROI
                        </Typography>
                      </motion.div>

                      <motion.div
                        className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaStar className="w-6 h-6 text-brand-pink mb-2" />
                        <Typography variant="h4" className="text-xl font-bold text-white">
                          4.9/5
                        </Typography>
                        <Typography variant="caption" className="text-gray-400">
                          Client Rating
                        </Typography>
                      </motion.div>
                    </div>
                  </div>

                  {/* Bottom Section - Trust Indicators */}
                  <div className="space-y-3">
                    <motion.div
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <span className="text-green-500 text-sm">✓</span>
                      </div>
                      <Typography variant="body2" className="text-white text-sm">
                        On-Time Delivery
                      </Typography>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <span className="text-green-500 text-sm">✓</span>
                      </div>
                      <Typography variant="body2" className="text-white text-sm">
                        Scalable Architecture
                      </Typography>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 bg-brand-violet/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-16 h-16 bg-brand-gold/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.5,
                  }}
                />
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-brand-violet/90 to-brand-gold/90 backdrop-blur-sm border border-white/20 shadow-lg"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Typography variant="body2" className="text-white font-bold">
                  🏆 Award Winning
                </Typography>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full bg-gradient-to-r from-brand-gold/90 to-brand-pink/90 backdrop-blur-sm border border-white/20 shadow-lg"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
              >
                <Typography variant="body2" className="text-white font-bold">
                  ⚡ Fast Delivery
                </Typography>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default ProjectHero;
