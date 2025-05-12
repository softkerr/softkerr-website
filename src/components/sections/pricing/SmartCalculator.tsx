'use client';

import CalculatorModal from '../../SmartCalculator/CalculatorModal';
import Hero from '../../SmartCalculator/Hero';

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
      <CalculatorModal isOpen={isOpen} onClose={closeCalculator} />
    </div>
  );
}
