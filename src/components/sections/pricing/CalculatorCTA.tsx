'use client';

import { FC } from 'react';
import { m as motion } from '@/lib/motion';
import { Container, Typography } from '@/components/ui';
import { FaCalculator, FaArrowUp, FaCheck } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

type CalculatorCTAProps = {
  openCalculator: () => void;
};

const CalculatorCTA: FC<CalculatorCTAProps> = ({ openCalculator }) => {
  const benefits = ['No signup required', 'Instant results', '100% free forever'];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Vibrant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-violet via-brand-pink to-brand-gold opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(139,92,246,0.1),transparent_50%)]" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Compact banner layout */}
          <div className="relative bg-gradient-to-br from-background-secondary/95 to-background/95 backdrop-blur-xl rounded-3xl border border-brand-gold/30 p-8 md:p-10 shadow-2xl overflow-hidden">
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/10 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-violet/10 rounded-tr-full" />

            <div className="relative grid md:grid-cols-[1fr,auto] gap-6 md:gap-8 items-center">
              {/* Left: Content */}
              <div className="space-y-4">
                {/* Badge row */}
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-green/20 border border-brand-green/40 rounded-full">
                    <HiSparkles className="text-brand-green text-xs" />
                    <span className="text-brand-green font-bold text-xs uppercase tracking-wider">
                      Free Tool
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <FaCalculator className="text-brand-gold" />
                    <span>Smart Calculator</span>
                  </div>
                </div>

                {/* Heading */}
                <div>
                  <Typography variant="h3" className="text-2xl md:text-3xl font-bold mb-2">
                    Need a <span className="text-brand-gold">Quick Estimate</span>?
                  </Typography>
                  <Typography variant="body2" color="secondary" className="text-base">
                    Calculate your project budget in minutes with our intelligent tool
                  </Typography>
                </div>

                {/* Benefits list */}
                <div className="hidden md:flex flex-wrap gap-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-brand-green text-xs" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: CTA Button - Solid with Border Animation */}
              <motion.button
                onClick={openCalculator}
                className="group relative flex-shrink-0 inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-brand-gold hover:bg-brand-gold/90 text-background font-bold text-base md:text-lg rounded-2xl shadow-lg shadow-brand-gold/40 transition-all duration-300 whitespace-nowrap overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Use Smart Calculator"
              >
                {/* Animated border shine */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                  }}
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />

                {/* Content */}
                <span className="relative z-10"> Use Smart Calculator</span>
              </motion.button>
            </div>

            {/* Mobile benefits */}
            <div className="md:hidden flex flex-wrap gap-3 mt-6 pt-6 border-t border-border-subtle">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-text-secondary">
                  <div className="w-4 h-4 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                    <FaCheck className="text-brand-green text-[8px]" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CalculatorCTA;
