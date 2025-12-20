'use client';

import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Section, Container, Typography, Button } from '@/components/ui';

// Lazy load the Matrix component for better performance
const MatrixHero = lazy(() => import('@/components/three/MatrixHero'));

// You can switch between variants by changing this value: 'variant1' | 'variant2' | 'variant3'
type VariantType = 'variant1' | 'variant2' | 'variant3';
const ACTIVE_VARIANT: VariantType = 'variant3';

// VARIANT 1: Split Screen - Hero Left, About Right
function Variant1() {
  return (
    <Section
      component="section"
      className="relative min-h-screen overflow-hidden"
      padding="none"
      noContainer
    >
      {/* Background Matrix Animation */}
      <div className="absolute inset-0">
        <Suspense
          fallback={
            <div className="w-full h-full bg-gradient-to-br from-background to-background-secondary" />
          }
        >
          <MatrixHero />
        </Suspense>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-background/60" />

      <Container size="xl" className="relative z-10 min-h-screen flex items-center py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* LEFT: Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography variant="h1" className="mb-6">
                We Build <span className="text-gradient">Web Experiences</span> That Matter
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="body1"
                color="secondary"
                className="text-xl mb-8 leading-relaxed"
              >
                A creative digital agency helping startups and enterprises build exceptional web
                experiences that drive results.
              </Typography>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                variant="primary"
                size="lg"
                animated
                href="/contacts"
                aria-label="Start Your Project"
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                animated
                href="/projects"
                aria-label="View Our Work"
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT: Who We Are Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="backdrop-blur-sm bg-background/20 rounded-2xl p-8 lg:p-10 border border-border-subtle/30"
          >
            <Typography
              variant="overline"
              className="text-brand-gold mb-3 tracking-wider uppercase"
            >
              About Us
            </Typography>
            <Typography variant="h3" className="mb-6">
              Who We Are
            </Typography>

            <div className="space-y-4 mb-8">
              <Typography variant="body1" className="text-text-secondary leading-relaxed">
                We are a{' '}
                <span className="text-brand-gold font-semibold">forward-thinking web studio</span>{' '}
                since <span className="text-brand-gold font-semibold">2020</span>, having delivered{' '}
                <span className="text-brand-violet font-semibold">2 global-scale products</span>.
              </Typography>

              <Typography variant="body1" className="text-text-secondary leading-relaxed">
                We combine{' '}
                <span className="text-brand-blue font-semibold">technical expertise</span> with{' '}
                <span className="text-brand-violet font-semibold">creative insight</span> to build
                impactful products.
              </Typography>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border-subtle/30">
              <div className="text-center">
                <Typography variant="h3" className="text-brand-gold mb-1">
                  5+
                </Typography>
                <Typography variant="body2" className="text-text-muted text-sm">
                  Years
                </Typography>
              </div>
              <div className="text-center">
                <Typography variant="h3" className="text-brand-violet mb-1">
                  2
                </Typography>
                <Typography variant="body2" className="text-text-muted text-sm">
                  Products
                </Typography>
              </div>
              <div className="text-center">
                <Typography variant="h3" className="text-brand-blue mb-1">
                  Now
                </Typography>
                <Typography variant="body2" className="text-text-muted text-sm">
                  Expanding
                </Typography>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

// VARIANT 2: Centered with Cards Below
function Variant2() {
  return (
    <Section
      component="section"
      className="relative min-h-screen overflow-hidden"
      padding="none"
      noContainer
    >
      {/* Background Matrix Animation */}
      <div className="absolute inset-0">
        <Suspense
          fallback={
            <div className="w-full h-full bg-gradient-to-br from-background to-background-secondary" />
          }
        >
          <MatrixHero />
        </Suspense>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/80" />

      <Container
        size="xl"
        className="relative z-10 min-h-screen flex flex-col justify-center py-20"
      >
        {/* TOP: Hero Content */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography variant="h1" align="center" className="mb-6 max-w-5xl mx-auto">
              We Build <span className="text-gradient">Web Experiences</span> That Matter
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="body1"
              color="secondary"
              align="center"
              className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto"
            >
              A creative digital agency helping startups and enterprises build exceptional web
              experiences that drive results and inspire users.
            </Typography>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              variant="primary"
              size="lg"
              animated
              href="/contacts"
              aria-label="Start Your Project"
            >
              Start Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              animated
              href="/projects"
              aria-label="View Our Work"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>

        {/* BOTTOM: Who We Are Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {/* About Card */}
          <div className="md:col-span-2 backdrop-blur-sm bg-background/20 rounded-2xl p-8 border border-border-subtle/30">
            <Typography
              variant="overline"
              className="text-brand-gold mb-3 tracking-wider uppercase"
            >
              About Us
            </Typography>
            <Typography variant="body1" className="text-text-secondary leading-relaxed">
              A <span className="text-brand-gold font-semibold">forward-thinking web studio</span>{' '}
              since <span className="text-brand-gold font-semibold">2020</span>, combining{' '}
              <span className="text-brand-blue font-semibold">technical expertise</span> with{' '}
              <span className="text-brand-violet font-semibold">creative insight</span>.
            </Typography>
          </div>

          {/* Stat Cards */}
          <div className="backdrop-blur-sm bg-background/20 rounded-2xl p-8 border border-border-subtle/30 text-center">
            <Typography variant="h2" className="text-brand-gold mb-2">
              5+
            </Typography>
            <Typography variant="body1" className="text-text-muted">
              Years of Experience
            </Typography>
          </div>

          <div className="backdrop-blur-sm bg-background/20 rounded-2xl p-8 border border-border-subtle/30 text-center">
            <Typography variant="h2" className="text-brand-violet mb-2">
              2
            </Typography>
            <Typography variant="body1" className="text-text-muted">
              Global Products
            </Typography>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

// VARIANT 3: Full Width with Overlay Card
function Variant3() {
  return (
    <Section
      component="section"
      className="relative min-h-screen overflow-hidden flex items-center"
      padding="none"
      noContainer
    >
      {/* Background Matrix Animation */}
      <div className="absolute inset-0">
        <Suspense
          fallback={
            <div className="w-full h-full bg-gradient-to-br from-background to-background-secondary" />
          }
        >
          <MatrixHero />
        </Suspense>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/60" />

      <Container size="xl" className="relative z-10 py-20">
        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-background/30 rounded-3xl p-8 lg:p-16 border border-border-subtle/30 shadow-2xl"
        >
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* LEFT: Hero Content (3 cols) */}
            <div className="lg:col-span-3 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography variant="h1" className="mb-6">
                  We Build <span className="text-gradient block lg:inline">Web Experiences</span>{' '}
                  That Matter
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography
                  variant="body1"
                  color="secondary"
                  className="text-lg lg:text-xl mb-8 leading-relaxed"
                >
                  A creative digital agency helping startups and enterprises build exceptional web
                  experiences that drive results and inspire users.
                </Typography>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center mb-8 lg:mb-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  animated
                  href="/contacts"
                  aria-label="Start Your Project"
                >
                  Start Your Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  animated
                  href="/projects"
                  aria-label="View Our Work"
                >
                  View Our Work
                </Button>
              </motion.div>
            </div>

            {/* RIGHT: Who We Are (2 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <Typography
                  variant="overline"
                  className="text-brand-gold mb-2 tracking-wider uppercase"
                >
                  About Us
                </Typography>
                <Typography variant="h4" className="mb-4">
                  Who We Are
                </Typography>
                <Typography variant="body1" className="text-text-secondary leading-relaxed mb-4">
                  A <span className="text-brand-gold font-semibold">forward-thinking studio</span>{' '}
                  since <span className="text-brand-gold font-semibold">2020</span>, delivering{' '}
                  <span className="text-brand-violet font-semibold">global-scale products</span>.
                </Typography>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border-subtle/30">
                <div className="text-center p-4 rounded-lg bg-background/20">
                  <Typography variant="h4" className="text-brand-gold mb-1">
                    5+
                  </Typography>
                  <Typography variant="body2" className="text-text-muted text-xs">
                    Years
                  </Typography>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/20">
                  <Typography variant="h4" className="text-brand-violet mb-1">
                    2
                  </Typography>
                  <Typography variant="body2" className="text-text-muted text-xs">
                    Products
                  </Typography>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/20">
                  <Typography variant="h4" className="text-brand-blue mb-1">
                    Now
                  </Typography>
                  <Typography variant="body2" className="text-text-muted text-xs">
                    Expanding
                  </Typography>
                </div>
              </div>

              {/* Visual Badge */}
              <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
                <div className="h-12 w-12 rounded-full bg-brand-gold/20 flex items-center justify-center border border-brand-gold/30">
                  <Typography variant="body1" className="text-brand-gold font-bold">
                    ✓
                  </Typography>
                </div>
                <Typography variant="body2" className="text-text-secondary">
                  Trusted by startups & enterprises worldwide
                </Typography>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

// Main Export - Switch between variants here
export default function WhoWeAre() {
  if (ACTIVE_VARIANT === 'variant2') return <Variant2 />;
  if (ACTIVE_VARIANT === 'variant3') return <Variant3 />;
  return <Variant1 />; // Default
}
