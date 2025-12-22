'use client';

import { m as motion } from '@/lib/motion';
import { FaCheck, FaRocket } from '@/components/icons';
import Typography from '@/components/ui/Typography';
import { CalculatorData, ServiceType, TimeEstimate } from './types';
import { developmentStages, calculatorSteps, formatTimeEstimate } from '@/data/calculator';

type ProjectSummaryProps = {
  calculatorData: CalculatorData;
  estimate: TimeEstimate;
  currentStep: number;
  totalSteps: number;
};

export default function ProjectSummary({
  calculatorData,
  estimate,
  currentStep,
  totalSteps,
}: ProjectSummaryProps) {
  const progressPercent = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="lg:col-span-4 bg-gradient-to-br from-white/5 to-transparent border-t lg:border-t-0 lg:border-l border-white/20 overflow-hidden flex flex-col py-4 md:py-6 lg:py-8 h-auto">
      <div className="px-4 md:px-6 lg:px-8 overflow-y-auto scrollbar-thin">
        <div className="hidden lg:block">
          <Typography variant="h5" className="text-white mb-4 md:mb-6 text-lg md:text-xl">
            Project Summary
          </Typography>

          {/* Development Stages Progress */}
          <div className="mb-6 md:mb-8">
            <Typography
              variant="body2"
              className="text-gray-400 mb-3 md:mb-4 flex items-center gap-2 text-sm"
            >
              <FaRocket className="w-3 h-3 md:w-4 md:h-4" />
              Development Roadmap
            </Typography>
            <div className="space-y-2 md:space-y-3">
              {developmentStages.map((stage, index) => {
                // Determine if stage is applicable based on selected services
                const isApplicable =
                  !stage.dependsOn ||
                  stage.dependsOn.some(service =>
                    calculatorData.services.includes(service as ServiceType)
                  );

                // Stage completion logic based on calculator progress
                let isCompleted = false;
                let isCurrent = false;

                if (index === 0) {
                  // Requirements: completed when services are selected
                  isCompleted = calculatorData.services.length > 0;
                  isCurrent = calculatorData.services.length === 0;
                } else if (stage.id === 'design') {
                  // Design: completed when form is 40% done and design is selected
                  isCompleted = progressPercent >= 40 && calculatorData.services.includes('design');
                  isCurrent =
                    progressPercent >= 20 &&
                    progressPercent < 40 &&
                    calculatorData.services.includes('design');
                } else if (stage.id === 'development') {
                  // Development: completed when form is 70% done
                  isCompleted = progressPercent >= 70 && isApplicable;
                  isCurrent = progressPercent >= 40 && progressPercent < 70 && isApplicable;
                } else if (stage.id === 'testing') {
                  // Testing: completed when form is 90% done
                  isCompleted = progressPercent >= 90;
                  isCurrent = progressPercent >= 70 && progressPercent < 90;
                } else if (stage.id === 'deployment') {
                  // Deployment: completed when form is 100% done
                  isCompleted = progressPercent >= 100;
                  isCurrent = progressPercent >= 90 && progressPercent < 100;
                } else if (stage.id === 'support') {
                  // Support: always future stage
                  isCurrent = progressPercent >= 100;
                }

                if (!isApplicable && stage.dependsOn) return null;

                return (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`
                      flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg transition-all
                      ${
                        isCompleted
                          ? 'bg-green-500/10 border border-green-500/30'
                          : isCurrent
                            ? 'bg-brand-gold/10 border border-brand-gold/30'
                            : 'bg-white/5 border border-white/10'
                      }
                    `}
                  >
                    <div
                      className={`
                        w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                        ${
                          isCompleted
                            ? 'bg-green-500'
                            : isCurrent
                              ? 'bg-brand-gold animate-pulse'
                              : 'bg-white/10'
                        }
                      `}
                    >
                      {isCompleted ? (
                        <FaCheck className="w-2 h-2 md:w-3 md:h-3 text-white" />
                      ) : (
                        <span
                          className={`text-[10px] md:text-xs font-medium ${isCurrent ? 'text-[#02021e]' : 'text-gray-400'}`}
                        >
                          {index + 1}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <Typography
                        variant="body2"
                        className={`font-medium mb-0.5 text-sm md:text-base ${
                          isCompleted || isCurrent ? 'text-white' : 'text-gray-400'
                        }`}
                      >
                        {stage.name}
                        {isCurrent && (
                          <span className="ml-1 md:ml-2 text-[10px] md:text-xs text-brand-gold">
                            • In Progress
                          </span>
                        )}
                      </Typography>
                      <Typography
                        variant="caption"
                        className="text-gray-500 text-[10px] md:text-xs leading-tight"
                      >
                        {stage.description}
                      </Typography>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Selected Services Breakdown */}
          {estimate.breakdown.length > 0 && (
            <div className="mb-4 md:mb-6">
              <Typography variant="body2" className="text-gray-400 mb-3 md:mb-4 text-sm">
                Timeline Breakdown:
              </Typography>
              <div className="space-y-2 md:space-y-3">
                {estimate.breakdown.map((item, index) => (
                  <motion.div
                    key={item.service}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 rounded-lg p-4 border border-white/10"
                  >
                    <Typography variant="body2" className="text-gray-400 text-sm mb-1">
                      {item.service}
                    </Typography>
                    <Typography variant="body1" className="text-white font-semibold">
                      {item.minDays} - {item.maxDays} days
                    </Typography>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {calculatorData.additionalFeatures.length > 0 && (
            <div className="mb-6">
              <Typography variant="body2" className="text-gray-400 mb-3">
                Additional Features:
              </Typography>
              <div className="space-y-2">
                {calculatorData.additionalFeatures.map(feature => {
                  const featureOption = calculatorSteps
                    .find(s => s.id === 'additionalFeatures')
                    ?.options?.find(
                      (o: { value: string; label: string; days?: number }) => o.value === feature
                    );
                  return (
                    <div key={feature} className="flex items-center justify-between text-sm">
                      <Typography variant="caption" className="text-gray-300">
                        {featureOption?.label}
                      </Typography>
                      <Typography variant="caption" className="text-brand-gold">
                        +{featureOption?.days} days
                      </Typography>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-white/20 pt-6">
          <div className="flex items-center justify-between mb-2">
            <Typography variant="h6" className="text-white">
              Total Timeline:
            </Typography>
          </div>
          <Typography variant="body1" className="text-brand-gold mb-2 text-2xl font-bold">
            {formatTimeEstimate(estimate.minDays)} - {formatTimeEstimate(estimate.maxDays)}
          </Typography>
          <Typography variant="caption" className="text-gray-400 mt-2 hidden lg:block">
            *Estimated timeline reflects project scope — in practice, phases often overlap, allowing
            for faster delivery through parallel workflows.
          </Typography>
        </div>
      </div>
    </div>
  );
}
