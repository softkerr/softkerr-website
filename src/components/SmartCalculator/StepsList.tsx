'use client';

import { m as motion } from '@/lib/motion';
import { FaCheck } from '@/components/icons';
import Typography from '@/components/ui/Typography';
import { CalculatorStep } from './types';

type StepsListProps = {
  steps: CalculatorStep[];
  currentStep: number;
};

export default function StepsList({ steps, currentStep }: StepsListProps) {
  return (
    <div className="hidden lg:flex lg:flex-col lg:col-span-3 bg-white/5 border-r border-white/20 overflow-hidden">
      <div className="p-6 pb-0 flex-shrink-0">
        <Typography variant="body1" className="text-white mb-4 font-semibold text-lg">
          Progress
        </Typography>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6 pt-2 space-y-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`
              flex items-start gap-3 p-3 rounded-lg transition-all cursor-default
              ${
                index < currentStep
                  ? 'bg-green-500/10 border border-green-500/30'
                  : index === currentStep
                    ? 'bg-brand-gold/10 border border-brand-gold/30'
                    : 'bg-white/5 border border-white/10'
              }
            `}
          >
            <div
              className={`
                w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                ${
                  index < currentStep
                    ? 'bg-green-500'
                    : index === currentStep
                      ? 'bg-brand-gold'
                      : 'bg-white/10'
                }
              `}
            >
              {index < currentStep ? (
                <FaCheck className="w-3 h-3 text-white" />
              ) : (
                <span
                  className={`text-xs font-medium ${
                    index === currentStep ? 'text-[#02021e]' : 'text-gray-400'
                  }`}
                >
                  {index + 1}
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <Typography
                variant="caption"
                className={`
                  text-xs leading-tight
                  ${index <= currentStep ? 'text-white font-medium' : 'text-gray-500'}
                `}
              >
                {step.question}
              </Typography>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
