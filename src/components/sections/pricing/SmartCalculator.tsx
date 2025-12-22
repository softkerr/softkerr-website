'use client';

import dynamic from 'next/dynamic';
import Hero from '../../SmartCalculator/Hero';

// Lazy-load heavy calculator modal to keep pricing route light
const CalculatorModal = dynamic(() => import('../../SmartCalculator/CalculatorModal'), {
  ssr: false,
  loading: () => null,
});

type SmartCalculatorProps = {
  isOpen: boolean;
  openCalculator: () => void;
  closeCalculator: () => void;
};

export default function SmartCalculator({
  isOpen,
  openCalculator,
  closeCalculator,
}: SmartCalculatorProps) {
  return (
    <div id="calculator">
      <Hero onOpenCalculator={openCalculator} />
      {isOpen ? <CalculatorModal isOpen={isOpen} onClose={closeCalculator} /> : null}
    </div>
  );
}
