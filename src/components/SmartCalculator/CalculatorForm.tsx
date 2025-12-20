'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import { CalculatorData, CalculatorStep } from './types';

type CalculatorFormProps = {
  currentStep: CalculatorStep;
  calculatorData: CalculatorData;
  onMultiSelect: (field: keyof CalculatorData, value: string) => void;
  onSelect: (field: keyof CalculatorData, value: string) => void;
  onBack: () => void;
  onNext: () => void;
  onReset: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  isValid: boolean;
};

export default function CalculatorForm({
  currentStep,
  calculatorData,
  onMultiSelect,
  onSelect,
  onBack,
  onNext,
  onReset,
  isFirstStep,
  isLastStep,
  isValid,
}: CalculatorFormProps) {
  return (
    <div className="px-4 md:px-6 lg:px-8 pt-4 md:pt-6 lg:pt-8 lg:col-span-5 flex flex-col justify-between flex-1">
      <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Typography
              variant="h5"
              className="text-white mb-1 md:mb-2 text-lg md:text-xl lg:text-2xl"
            >
              {currentStep.question}
            </Typography>

            {/* Required indicator */}
            <Typography
              variant="caption"
              className="text-gray-400 mb-4 md:mb-6 flex items-center gap-2 text-xs md:text-sm"
            >
              <span className="text-red-400">*</span>
              {currentStep.type === 'multiselect'
                ? 'Select at least one option to continue'
                : 'Please select an option to continue'}
            </Typography>

            {/* Options */}
            <div className="space-y-2 md:space-y-3">
              {currentStep.type === 'multiselect' &&
                currentStep.options?.map(option => {
                  const Icon = option.icon;
                  const isSelected = (
                    calculatorData[currentStep.id as keyof CalculatorData] as string[] | undefined
                  )?.includes(option.value);

                  return (
                    <button
                      key={option.value}
                      onClick={() =>
                        onMultiSelect(currentStep.id as keyof CalculatorData, option.value)
                      }
                      className={`
                        w-full p-2.5 md:p-3 rounded-lg md:rounded-xl border-2 transition-all text-left
                        ${
                          isSelected
                            ? 'border-brand-gold bg-brand-gold/10'
                            : 'border-white/20 bg-white/5 hover:border-white/40'
                        }
                      `}
                      aria-label={`${isSelected ? 'Deselect' : 'Select'} ${option.label}`}
                      aria-pressed={isSelected}
                    >
                      <div className="flex items-center gap-2">
                        {Icon && (
                          <Icon className="w-4 h-4 md:w-5 md:h-5 text-brand-gold flex-shrink-0" />
                        )}
                        <Typography
                          variant="body1"
                          className="text-white flex-1 text-sm md:text-base"
                        >
                          {option.label}
                        </Typography>
                        {isSelected && (
                          <FaCheck className="w-3 h-3 md:w-4 md:h-4 text-brand-gold flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}

              {(currentStep.type === 'select' || currentStep.type === 'radio') &&
                currentStep.options?.map(option => {
                  const isSelected =
                    calculatorData[currentStep.id as keyof CalculatorData] === option.value;

                  return (
                    <button
                      key={option.value}
                      onClick={() => onSelect(currentStep.id as keyof CalculatorData, option.value)}
                      className={`
                        w-full p-2.5 md:p-3 lg:p-4 rounded-lg md:rounded-xl border-2 transition-all text-left
                        ${
                          isSelected
                            ? 'border-brand-gold bg-brand-gold/10'
                            : 'border-white/20 bg-white/5 hover:border-white/40'
                        }
                      `}
                      aria-label={`Select ${option.label}`}
                      aria-pressed={isSelected}
                    >
                      <div className="flex items-center justify-between">
                        <Typography variant="body1" className="text-white text-sm md:text-base">
                          {option.label}
                        </Typography>
                        {isSelected && (
                          <FaCheck className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-brand-gold flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-2 md:gap-4 pt-4 md:pt-6 border-t border-white/10 mt-4 md:mt-6">
        <Button
          variant="outline"
          onClick={onBack}
          disabled={isFirstStep}
          leftIcon={<FaArrowLeft className="w-3 h-3 md:w-4 md:h-4" />}
          size="sm"
          className="text-sm md:text-base"
          aria-label="Go back"
        >
          Back
        </Button>

        <Button
          variant="secondary"
          onClick={onReset}
          size="sm"
          className="text-xs md:text-sm"
          aria-label="Reset Calculator"
        >
          Reset
        </Button>

        {isLastStep ? (
          <Button
            variant="primary"
            onClick={onNext}
            rightIcon={<FaArrowRight className="w-3 h-3 md:w-4 md:h-4" />}
            disabled={!isValid}
            size="sm"
            className="text-sm md:text-base"
            aria-label="Submit Calculator Form"
          >
            Continue
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={onNext}
            rightIcon={<FaArrowRight className="w-3 h-3 md:w-4 md:h-4" />}
            disabled={!isValid}
            size="sm"
            className="text-sm md:text-base"
            aria-label={`Go to next step`}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
