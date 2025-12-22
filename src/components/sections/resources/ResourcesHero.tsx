'use client';

import { m as motion } from '@/lib/motion';
import { Container, Section, Typography, Button } from '@/components/ui';
import Link from 'next/link';
import {
  FaBook,
  FaLightbulb,
  FaRocket,
  FaArrowRight,
  FaGraduationCap,
  FaPlay,
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

export default function ResourcesHero() {
  return (
    <Section className="relative py-12 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-gold/5 to-transparent" />

      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(240,185,11,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,185,11,0.1) 1px, transparent 1px)`,
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-gold/20 to-brand-violet/20 border border-brand-gold/30 backdrop-blur-sm"
            >
              <HiSparkles className="w-4 h-4 text-brand-gold" />
              <Typography variant="body2" className="text-brand-gold font-medium">
                Knowledge Hub
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
                Resources &{' '}
                <span className="bg-gradient-to-r from-brand-gold via-brand-violet to-brand-pink bg-clip-text text-transparent">
                  Insights
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
                Discover valuable insights, guides, and resources to help you build better digital
                experiences and grow your business. Learn from industry experts and stay ahead of
                the curve.
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
                <div className="text-3xl font-bold text-brand-gold">12+</div>
                <Typography variant="body2" className="text-gray-400">
                  Articles
                </Typography>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-brand-violet">2K+</div>
                <Typography variant="body2" className="text-gray-400">
                  Readers
                </Typography>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-brand-pink">100%</div>
                <Typography variant="body2" className="text-gray-400">
                  Free Access
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
                aria-label="Get Expert Help"
              >
                Get Expert Help
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

          {/* Right Side - Glass Container with Categories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Main Container with 3:4 Aspect Ratio */}
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 via-brand-violet/20 to-brand-pink/20 rounded-3xl" />

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
                      'radial-gradient(circle at 0% 0%, rgba(240,185,11,0.3), transparent 50%)',
                      'radial-gradient(circle at 100% 100%, rgba(139,92,246,0.3), transparent 50%)',
                      'radial-gradient(circle at 0% 100%, rgba(236,72,153,0.3), transparent 50%)',
                      'radial-gradient(circle at 0% 0%, rgba(240,185,11,0.3), transparent 50%)',
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
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-gold to-brand-violet flex items-center justify-center shadow-lg shadow-brand-gold/50">
                        <FaBook className="w-12 h-12 text-white" />
                      </div>
                    </motion.div>

                    <div className="text-center space-y-2">
                      <Typography variant="h2" className="text-2xl font-bold text-white">
                        Expert Knowledge
                      </Typography>
                      <Typography variant="body2" className="text-gray-300">
                        Curated insights & guides
                      </Typography>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-1 gap-3">
                      <motion.div
                        className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex items-center gap-3">
                          <FaLightbulb className="w-5 h-5 text-brand-gold" />
                          <div>
                            <Typography variant="body2" className="text-white font-semibold">
                              Design Services
                            </Typography>
                            <Typography variant="caption" className="text-gray-400">
                              UI/UX, Web & Mobile
                            </Typography>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex items-center gap-3">
                          <FaRocket className="w-5 h-5 text-brand-violet" />
                          <div>
                            <Typography variant="body2" className="text-white font-semibold">
                              Development
                            </Typography>
                            <Typography variant="caption" className="text-gray-400">
                              Web, Software & AI
                            </Typography>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="flex items-center gap-3">
                          <FaGraduationCap className="w-5 h-5 text-brand-pink" />
                          <div>
                            <Typography variant="body2" className="text-white font-semibold">
                              Support Services
                            </Typography>
                            <Typography variant="caption" className="text-gray-400">
                              Maintenance & Hosting
                            </Typography>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 bg-brand-gold/10 rounded-full blur-2xl"
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
                  className="absolute bottom-4 left-4 w-16 h-16 bg-brand-violet/10 rounded-full blur-2xl"
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
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-brand-gold/90 to-brand-violet/90 backdrop-blur-sm border border-white/20 shadow-lg"
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
                  📚 Learning Center
                </Typography>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full bg-gradient-to-r from-brand-violet/90 to-brand-pink/90 backdrop-blur-sm border border-white/20 shadow-lg"
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
                  💡 Expert Tips
                </Typography>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
