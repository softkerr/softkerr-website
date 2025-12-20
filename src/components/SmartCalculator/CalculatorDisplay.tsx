'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';
import Button from '@/components/ui/Button';

type CalculatorDisplayProps = {
  currentOp: number;
  visibleParts: number;
  operations: Array<{ num1: string; operator: string; num2: string }>;
  onOpenCalculator: () => void;
};

export default function CalculatorDisplay({
  currentOp,
  visibleParts,
  operations,
  onOpenCalculator,
}: CalculatorDisplayProps) {
  const op = operations[currentOp];
  const strokeColor = 'rgba(37, 99, 235, 0.6)';
  const strokeWidth = 1;
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-col items-center gap-6"
    >
      <div className="relative">
        {/* Calculator SVG */}
        <svg
          viewBox="0 0 260 360"
          className="w-full max-w-sm relative z-10 rounded-[28px] shadow-xl border border-brand-blue shadow-brand-blue/30"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Screen */}
          <rect
            x="20"
            y="20"
            width="220"
            height="120"
            rx="12"
            fill="rgba(0, 0, 0, 0.4)"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />

          {/* Screen Glow */}
          <rect
            x="20"
            y="20"
            width="220"
            height="120"
            rx="12"
            fill="url(#screen-glow-blue)"
            opacity="0.3"
          />

          {/* Screen Content - Sequential Animation */}
          <g>
            {/* First Number */}
            <AnimatePresence mode="wait">
              {visibleParts >= 1 && (
                <motion.text
                  key={`num1-${currentOp}`}
                  x="70"
                  y="85"
                  textAnchor="middle"
                  className="fill-blue-500"
                  fontSize="40"
                  fontWeight="bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, type: 'spring' }}
                >
                  {op.num1}
                </motion.text>
              )}
            </AnimatePresence>

            {/* Operator */}
            <AnimatePresence mode="wait">
              {visibleParts >= 2 && (
                <motion.text
                  key={`op-${currentOp}`}
                  x="130"
                  y="85"
                  textAnchor="middle"
                  className="fill-cyan-500"
                  fontSize="36"
                  fontWeight="bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, type: 'spring' }}
                >
                  {op.operator}
                </motion.text>
              )}
            </AnimatePresence>

            {/* Second Number */}
            <AnimatePresence mode="wait">
              {visibleParts >= 3 && (
                <motion.text
                  key={`num2-${currentOp}`}
                  x="190"
                  y="85"
                  textAnchor="middle"
                  className="fill-blue-500"
                  fontSize="40"
                  fontWeight="bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, type: 'spring' }}
                >
                  {op.num2}
                </motion.text>
              )}
            </AnimatePresence>
          </g>

          {/* Modern Button Grid - No Labels */}
          {/* Row 1 */}
          <rect
            x="20"
            y="160"
            width="65"
            height="50"
            rx="10"
            fill="rgba(255, 255, 255, 0.08)"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
          <rect
            x="97"
            y="160"
            width="65"
            height="50"
            rx="10"
            fill="rgba(255, 255, 255, 0.08)"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
          <rect
            x="174"
            y="160"
            width="65"
            height="50"
            rx="10"
            fill="rgba(255, 255, 255, 0.08)"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />

          {/* Row 2 */}
          <rect
            x="20"
            y="222"
            width="65"
            height="50"
            rx="10"
            fill="rgba(255, 255, 255, 0.08)"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
          <rect
            x="97"
            y="222"
            width="65"
            height="50"
            rx="10"
            fill="rgba(255, 255, 255, 0.08)"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
          <rect
            x="174"
            y="222"
            width="65"
            height="50"
            rx="10"
            fill="rgba(255, 255, 255, 0.08)"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />

          {/* Row 3 */}
          <rect
            x="20"
            y="284"
            width="65"
            height="50"
            rx="10"
            fill="rgba(255, 255, 255, 0.08)"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
          <rect
            x="97"
            y="284"
            width="65"
            height="50"
            rx="10"
            fill="rgba(255, 255, 255, 0.08)"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
          <rect
            x="174"
            y="284"
            width="65"
            height="50"
            rx="10"
            fill="url(#button-gradient-blue)"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />

          {/* Animated Arrow in last button */}
          <motion.g
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <path
              d="M 206.5 300 L 206.5 312 M 206.5 312 L 202 308 M 206.5 312 L 211 308"
              className="stroke-brand-gold"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </motion.g>

          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="screen-glow-blue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
            </linearGradient>
            <linearGradient id="button-gradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0.2)" />
            </linearGradient>
          </defs>
        </svg>
        <Button
          variant="primary"
          size="lg"
          onClick={onOpenCalculator}
          rightIcon={<FaRocket />}
          className="text-base whitespace-nowrap w-full mt-4 lg:mt-8"
          aria-label="Start Calculator"
        >
          Start Calculator
        </Button>
      </div>
    </motion.div>
  );
}
