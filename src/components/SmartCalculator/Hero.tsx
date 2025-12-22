'use client';

import { m as motion } from '@/lib/motion';
import { FaCalculator, FaCheck } from '@/components/icons';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Typography from '@/components/ui/Typography';
import { useState, useEffect } from 'react';
import CalculatorDisplay from './CalculatorDisplay';

type HeroProps = {
  onOpenCalculator: () => void;
};

// Calculator animation operations
const operations = [
  { num1: '100', operator: '+', num2: '500' },
  { num1: '700', operator: '-', num2: '150' },
  { num1: '250', operator: '×', num2: '350' },
  { num1: '800', operator: '÷', num2: '200' },
];

export default function Hero({ onOpenCalculator }: HeroProps) {
  const [currentOp, setCurrentOp] = useState(0);
  const [visibleParts, setVisibleParts] = useState<number>(0); // 0: none, 1: num1, 2: num1+op, 3: all

  useEffect(() => {
    // Reset animation when operation changes
    setVisibleParts(0);

    // Show first number after 300ms
    const timer1 = setTimeout(() => setVisibleParts(1), 300);

    // Show operator after 800ms
    const timer2 = setTimeout(() => setVisibleParts(2), 800);

    // Show second number after 1300ms
    const timer3 = setTimeout(() => setVisibleParts(3), 1300);

    // Change operation after 3500ms
    const timer4 = setTimeout(() => {
      setCurrentOp(prev => (prev + 1) % operations.length);
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [currentOp]);

  const op = operations[currentOp];

  return (
    <Section className="relative py-12 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-brand-violet/10 to-brand-pink/10" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Left Side - Text Content from Variant A - Takes More Space */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-gold/20 to-brand-violet/20 border border-brand-gold/30 backdrop-blur-sm mb-6"
            >
              <FaCalculator className="w-4 h-4 text-brand-gold" />
              <Typography variant="body2" className="text-brand-gold font-medium">
                Smart Project Calculator
              </Typography>
            </motion.div>

            <Typography
              variant="h1"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Calculate Your{' '}
              <span className="bg-gradient-to-r from-brand-gold via-brand-violet to-brand-pink bg-clip-text text-transparent">
                Project Cost
              </span>{' '}
              Instantly
            </Typography>

            <Typography variant="body1" className="text-lg text-gray-300 mb-8">
              Get accurate project estimates in minutes. Our smart calculator analyzes your
              requirements and provides detailed timeline and cost breakdown based on real project
              data.
            </Typography>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {[
                'Instant timeline estimates',
                'Detailed cost breakdown',
                'Based on real project data',
                'Free consultation included',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                    <FaCheck className="w-3 h-3 text-brand-gold" />
                  </div>
                  <Typography variant="body1" className="text-gray-300">
                    {feature}
                  </Typography>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Calculator Display */}
          <CalculatorDisplay
            currentOp={currentOp}
            visibleParts={visibleParts}
            operations={operations}
            onOpenCalculator={onOpenCalculator}
          />
        </div>
      </Container>
    </Section>
  );
}
