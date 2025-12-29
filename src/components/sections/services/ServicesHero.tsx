'use client';

import { m as motion } from '@/lib/motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { FaArrowRight, FaPlay } from '@/components/icons';

export default function ServicesHero() {
  return (
    <Section className="relative py-12 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-gold/5 to-transparent" />

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
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <Typography variant="body2" className="text-brand-gold font-medium">
                Premium Services
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
                Transform Your{' '}
                <span className="bg-gradient-to-r from-brand-gold via-brand-violet to-brand-pink bg-clip-text text-transparent">
                  Digital Vision
                </span>{' '}
                Into Reality
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography variant="body1" className="text-lg text-gray-300 leading-relaxed">
                From cutting-edge design to robust development and reliable support, we deliver
                end-to-end solutions that drive results. Our team combines technical excellence with
                creative innovation to build products that users love.
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
                <Typography variant="h3" className="text-3xl font-bold text-brand-gold">
                  5+
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Years experience
                </Typography>
              </div>
              <div className="space-y-1">
                <Typography variant="h3" className="text-3xl font-bold text-brand-violet">
                  95%
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Client Satisfaction
                </Typography>
              </div>
              <div className="space-y-1">
                <Typography variant="h3" className="text-3xl font-bold text-brand-pink">
                  24/7
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Support Available
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
                aria-label="Get Started"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/projects"
                leftIcon={<FaPlay />}
                className="border-white/20 hover:border-brand-gold/50"
                aria-label="View Our Work"
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Video Container with 3:4 Aspect Ratio */}
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

                {/* Video Placeholder Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                  {/* Play Button */}
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-gold to-brand-violet flex items-center justify-center cursor-pointer shadow-lg shadow-brand-gold/50">
                      <FaPlay className="w-8 h-8 text-white ml-1" />
                    </div>
                  </motion.div>

                  <Typography variant="h3" className="text-xl font-bold text-white mb-2">
                    Watch Our Story
                  </Typography>
                  <Typography variant="body2" className="text-gray-300">
                    See how we bring ideas to life
                  </Typography>
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
                  🏆 Award Winning
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
                  ⚡ Fast Delivery
                </Typography>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
