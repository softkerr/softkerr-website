'use client';

import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Typography, Section, Container, Button, Link } from '@/components/ui';
import { FaAward, FaCheckCircle, FaLightbulb } from 'react-icons/fa';

// Lazy load the Matrix component for better performance
const MatrixHero = lazy(() => import('@/components/three/MatrixHero'));

const highlights = [
  'Enterprise-grade solutions',
  'Agile development process',
  '24/7 support & maintenance',
  '5+ Years Experience',
];

const Hero = () => {
  return (
    <Section
      component="section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      padding="none"
      noContainer
    >
      {/* Background Matrix Animation */}
      <div className="hidden lg:block absolute inset-0">
        <Suspense
          fallback={
            <div className="w-full h-full bg-gradient-to-br from-background to-background-secondary" />
          }
        >
          <MatrixHero />
        </Suspense>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 backdrop-blur-sm bg-background/10 rounded-2xl p-4 md:p-12 border border-border-subtle/20 shadow-2xl shadow-black/20">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-violet/20 to-brand-gold/20 border border-brand-violet/30 backdrop-blur-sm">
                <FaLightbulb className="w-4 h-4 text-brand-violet" />
                <Typography variant="body2" className="text-brand-violet font-medium">
                  Trusted Development Partner
                </Typography>
              </div>

              {/* Heading */}
              <div>
                <Typography
                  variant="h1"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                >
                  Building Digital{' '}
                  <span className="bg-gradient-to-r from-brand-violet via-brand-gold to-brand-cyan bg-clip-text text-transparent">
                    Excellence
                  </span>{' '}
                  Since 2020
                </Typography>
              </div>

              <Typography variant="body1" className="text-lg text-gray-300 leading-relaxed">
                SoftKerr is an award-winning digital agency, delivering cutting-edge web solutions
                to clients worldwide. We combine strategic thinking, innovative design, and robust
                development to create digital products that deliver measurable business results.
              </Typography>

              {/* CTA Buttons */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 lg:pt-8">
                <Button variant="primary" size="lg" className="grid-template-columns-1" animated>
                  <Link href="/contacts">Start Your Project</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 hover:border-brand-violet/50 grid-template-columns-1"
                >
                  <Link href="/projects">View Our Work</Link>
                </Button>
              </div>
            </div>

            {/* Right Side - Excellence Showcase */}
            <div className="relative hidden lg:block">
              {/* Main Container with 3:4 Aspect Ratio */}
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-brand-gold/30 shadow-2xl shadow-brand-gold/20">
                  {/* Placeholder for team/office image */}
                  {/* You can use images from: https://unsplash.com/s/photos/software-development-team */}
                  <div className="absolute inset-0 h-full bg-gradient-to-br from-brand-violet/20 via-brand-gold/20 to-brand-cyan/20" />
                </div>
                {/* Glass Container */}
                <motion.div className="relative h-full ">
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col p-8">
                    {/* Top Section - Why Choose Us */}
                    <div className="flex-1 flex flex-col justify-center space-y-6">
                      {/* Excellence Icon */}
                      <motion.div className="flex justify-center">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-violet to-brand-gold flex items-center justify-center shadow-lg shadow-brand-violet/50">
                          <FaAward className="w-12 h-12 text-white" />
                        </div>
                      </motion.div>

                      <div className="text-center space-y-2">
                        <Typography variant="h3" className="text-2xl font-bold text-white">
                          Why Choose Us?
                        </Typography>
                        <Typography variant="body2" className="text-gray-300">
                          Excellence in every project
                        </Typography>
                      </div>

                      {/* Highlights Grid */}
                      <div className="space-y-3">
                        {highlights.map((highlight, index) => (
                          <motion.div
                            key={highlight}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
                          >
                            <div className="w-8 h-8 rounded-lg bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                              <FaCheckCircle className="text-brand-green text-sm" />
                            </div>
                            <Typography variant="body2" className="text-white text-sm">
                              {highlight}
                            </Typography>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Hero;
