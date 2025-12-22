'use client';

import { useState } from 'react';
import { m as motion, AnimatePresence } from '@/lib/motion';
import { useForm } from 'react-hook-form';
import { FaTimes } from '@/components/icons';
import Typography from '@/components/ui/Typography';
import StepsList from './StepsList';
import CalculatorForm from './CalculatorForm';
import ContactForm from './ContactForm';
import ProjectSummary from './ProjectSummary';
import { CalculatorData, ContactFormData, ServiceType, TimeEstimate } from './types';
import { calculatorSteps, serviceOptions } from '@/data/calculator';
import { submitToFormspree } from '@/lib/formspree';

type CalculatorModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CalculatorModal({ isOpen, onClose }: CalculatorModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    services: [],
    additionalFeatures: [],
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset: resetForm,
  } = useForm<ContactFormData>({
    defaultValues: {
      countryCode: '+380',
    },
  });

  const visibleSteps = calculatorSteps.filter(
    step => !step.shouldShow || step.shouldShow(calculatorData)
  );

  const handleMultiSelect = (field: keyof CalculatorData, value: string) => {
    setCalculatorData(prev => {
      const currentValues = (prev[field] as string[]) || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      return { ...prev, [field]: newValues };
    });
  };

  const handleSelect = (field: keyof CalculatorData, value: string) => {
    setCalculatorData(prev => ({ ...prev, [field]: value }));
  };

  const calculateEstimate = (): TimeEstimate => {
    let minDays = 0;
    let maxDays = 0;
    const breakdown: { service: string; minDays: number; maxDays: number }[] = [];

    type OptionType = { value: string; label: string; days?: number };

    // Calculate service base days
    calculatorData.services.forEach(service => {
      const serviceInfo = serviceOptions.find(s => s.value === service);
      if (serviceInfo) {
        let serviceMin = serviceInfo.minDays;
        let serviceMax = serviceInfo.maxDays;

        // Add modifiers based on answers
        if (service === 'design') {
          const pagesOption = calculatorSteps
            .find(s => s.id === 'designPages')
            ?.options?.find((o: OptionType) => o.value === calculatorData.designPages);
          const complexityOption = calculatorSteps
            .find(s => s.id === 'designComplexity')
            ?.options?.find((o: OptionType) => o.value === calculatorData.designComplexity);

          if (pagesOption?.days) {
            serviceMin += pagesOption.days;
            serviceMax += pagesOption.days;
          }
          if (complexityOption?.days) {
            serviceMin += complexityOption.days;
            serviceMax += complexityOption.days;
          }
        }

        if (service === 'webDev') {
          const platformOption = calculatorSteps
            .find(s => s.id === 'platformType')
            ?.options?.find((o: OptionType) => o.value === calculatorData.platformType);
          if (platformOption?.days) {
            serviceMin += platformOption.days;
            serviceMax += platformOption.days;
          }
        }

        if (service === 'backend') {
          const backendOption = calculatorSteps
            .find(s => s.id === 'backendComplexity')
            ?.options?.find((o: OptionType) => o.value === calculatorData.backendComplexity);
          if (backendOption?.days) {
            serviceMin += backendOption.days;
            serviceMax += backendOption.days;
          }
        }

        if (service === 'ecommerce') {
          const productsOption = calculatorSteps
            .find(s => s.id === 'ecommerceProducts')
            ?.options?.find((o: OptionType) => o.value === calculatorData.ecommerceProducts);
          if (productsOption?.days) {
            serviceMin += productsOption.days;
            serviceMax += productsOption.days;
          }
        }

        breakdown.push({
          service: serviceInfo.label,
          minDays: serviceMin,
          maxDays: serviceMax,
        });

        minDays += serviceMin;
        maxDays += serviceMax;
      }
    });

    // Add content days
    const contentOption = calculatorSteps
      .find(s => s.id === 'hasContent')
      ?.options?.find((o: OptionType) => o.value === calculatorData.hasContent);
    if (contentOption?.days) {
      minDays += contentOption.days;
      maxDays += contentOption.days;
    }

    // Add additional features
    calculatorData.additionalFeatures.forEach(feature => {
      const featureOption = calculatorSteps
        .find(s => s.id === 'additionalFeatures')
        ?.options?.find((o: OptionType) => o.value === feature);
      if (featureOption?.days) {
        minDays += featureOption.days;
        maxDays += featureOption.days;
      }
    });

    return { minDays, maxDays, breakdown };
  };

  const estimate = calculateEstimate();

  // Check if current step is valid (has at least one selection)
  const isCurrentStepValid = () => {
    const currentStepData = visibleSteps[currentStep];
    if (!currentStepData) return false;

    const fieldValue = calculatorData[currentStepData.id as keyof CalculatorData];

    // For multiselect fields (services, additionalFeatures)
    if (currentStepData.type === 'multiselect') {
      return Array.isArray(fieldValue) && fieldValue.length > 0;
    }

    // For select and radio fields
    if (currentStepData.type === 'select' || currentStepData.type === 'radio') {
      return fieldValue !== undefined && fieldValue !== '';
    }

    return false;
  };

  const handleNext = () => {
    // Validate current step before proceeding
    if (!isCurrentStepValid()) {
      return; // Don't proceed if validation fails
    }

    if (currentStep < visibleSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // All steps completed, show contact form
      setShowContactForm(true);
    }
  };

  const handleBack = () => {
    if (showContactForm) {
      setShowContactForm(false);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCalculatorData({ services: [], additionalFeatures: [] });
    setCurrentStep(0);
    setShowContactForm(false);
    resetForm();
  };

  const onSubmitContactForm = async (data: ContactFormData) => {
    try {
      setSubmitStatus('idle');

      // Format estimate breakdown for email
      const breakdownText = estimate.breakdown
        .map(item => `${item.service}: ${item.minDays}-${item.maxDays} days`)
        .join('\n');

      // Prepare complete data for submission
      const submissionData: any = {
        fullName: data.fullName,
        email: data.email,
        phone: `${data.countryCode} ${data.phone}`,
        estimateRange: `${estimate.minDays}-${estimate.maxDays} days`,
        services: calculatorData.services.join(', '),
        additionalFeatures:
          calculatorData.additionalFeatures.length > 0
            ? calculatorData.additionalFeatures.join(', ')
            : 'None',
        estimateBreakdown: breakdownText,
        formType: 'calculator-estimate',
      };

      // Add conditional fields if present
      if (calculatorData.designPages) {
        submissionData.designPages = calculatorData.designPages;
      }
      if (calculatorData.platformType) {
        submissionData.platformType = calculatorData.platformType;
      }
      if (calculatorData.backendComplexity) {
        submissionData.backendComplexity = calculatorData.backendComplexity;
      }
      if (calculatorData.ecommerceProducts) {
        submissionData.ecommerceProducts = calculatorData.ecommerceProducts;
      }
      if (calculatorData.hasContent !== undefined) {
        submissionData.hasContent = calculatorData.hasContent ? 'Yes' : 'No';
      }

      const result = await submitToFormspree({
        data: submissionData,
        subject: 'New Project Estimate Request from {fullName}',
        replyTo: '{email}',
      });

      if (!result.success) {
        throw new Error(result.message || 'Form submission failed');
      }

      setSubmitStatus('success');

      // Close modal and reset after showing success message
      setTimeout(() => {
        onClose();
        handleReset();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
  };

  const currentStepData = visibleSteps[currentStep];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
            className="bg-[#02021e] border border-white/20 rounded-2xl shadow-2xl max-w-7xl w-full h-[85vh] md:h-[80vh] overflow-hidden flex flex-col"
          >
            <div className="flex flex-col lg:grid lg:grid-cols-12 h-full">
              {/* Left Sidebar: Steps List */}
              <StepsList steps={visibleSteps} currentStep={currentStep} />

              {/* Center: Form or Contact Form */}
              {showContactForm ? (
                <>
                  <div className="p-4 md:p-6 lg:p-8 lg:col-span-5 flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <Typography
                          variant="h4"
                          className="text-white mb-1 text-xl md:text-2xl lg:text-3xl"
                        >
                          Your Contact Details
                        </Typography>
                        <Typography variant="body2" className="text-gray-400 text-sm">
                          Final Step - Get Your Estimate
                        </Typography>
                      </div>
                      <button
                        onClick={onClose}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0"
                        aria-label="Close calculator"
                      >
                        <FaTimes className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </button>
                    </div>

                    {/* Progress Bar (visible on mobile) */}
                    <div className="mb-4 md:mb-6 lg:hidden">
                      <div className="h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-brand-gold to-brand-violet"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>

                    <ContactForm
                      register={register}
                      errors={errors}
                      isSubmitting={isSubmitting}
                      submitStatus={submitStatus}
                      onSubmit={handleSubmit(onSubmitContactForm)}
                      onBack={handleBack}
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Header */}
                  <div className="p-4 md:p-6 lg:p-8 lg:col-span-5 flex flex-col">
                    <div className="flex items-start justify-between">
                      <div>
                        <Typography
                          variant="h4"
                          className="text-white mb-1 text-xl md:text-2xl lg:text-3xl"
                        >
                          Project Calculator
                        </Typography>
                        <Typography variant="body2" className="text-gray-400 text-sm">
                          Step {currentStep + 1} of {visibleSteps.length}
                        </Typography>
                      </div>
                      <button
                        onClick={onClose}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0"
                        aria-label="Close calculator"
                      >
                        <FaTimes className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </button>
                    </div>

                    {/* Progress Bar (visible on mobile) */}
                    <div className="mb-4 md:mb-6 lg:hidden">
                      <div className="h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-brand-gold to-brand-violet"
                          initial={{ width: 0 }}
                          animate={{
                            width: `${((currentStep + 1) / visibleSteps.length) * 100}%`,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>

                    <CalculatorForm
                      currentStep={currentStepData}
                      calculatorData={calculatorData}
                      onMultiSelect={handleMultiSelect}
                      onSelect={handleSelect}
                      onBack={handleBack}
                      onNext={handleNext}
                      onReset={handleReset}
                      isFirstStep={currentStep === 0}
                      isLastStep={currentStep === visibleSteps.length - 1}
                      isValid={isCurrentStepValid()}
                    />
                  </div>
                </>
              )}

              {/* Right: Summary */}
              <ProjectSummary
                calculatorData={calculatorData}
                estimate={estimate}
                currentStep={currentStep}
                totalSteps={visibleSteps.length}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
