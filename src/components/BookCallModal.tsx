'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { Typography, Button, Input, Textarea } from '@/components/ui';
import { useBookCallModal } from '@/contexts/BookCallModalContext';
import { submitToFormspree } from '@/lib/formspree';

type ContactFormData = {
  fullName: string;
  companyEmail: string;
  phoneNumber?: string;
  projectDescription: string;
};

export default function BookCallModal() {
  const { isOpen, closeModal } = useBookCallModal();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Submit to Formspree using the reusable utility
      const result = await submitToFormspree({
        data: {
          fullName: data.fullName,
          companyEmail: data.companyEmail,
          phoneNumber: data.phoneNumber || 'Not provided',
          projectDescription: data.projectDescription,
          formType: 'book-call',
        },
        subject: 'New Project Inquiry from {fullName}',
        replyTo: '{companyEmail}',
      });

      if (!result.success) {
        throw new Error(result.message || 'Form submission failed');
      }

      setSubmitStatus('success');
      reset();

      // Close modal after success
      setTimeout(() => {
        setSubmitStatus('idle');
        closeModal();
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              className="relative w-full max-w-4xl my-8"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Background Effects */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-brand-violet/10 to-brand-pink/10 rounded-2xl" />
                <motion.div
                  className="absolute inset-0 opacity-10 rounded-2xl"
                  style={{
                    backgroundImage: `linear-gradient(rgba(240,185,11,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,185,11,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                  }}
                  animate={{
                    backgroundPosition: ['0px 0px', '50px 50px'],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>

              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-gold/50 hover:bg-white/10 transition-all"
                aria-label="Close modal"
              >
                <FaTimes className="text-xl" />
              </button>

              {/* Content */}
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-2xl p-6 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                  {/* Left Side - Info */}
                  <div className="space-y-6 lg:col-span-2">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-gold/20 to-brand-violet/20 border border-brand-gold/30 backdrop-blur-sm">
                      <HiSparkles className="w-4 h-4 text-brand-gold" />
                      <Typography variant="body2" className="text-brand-gold font-medium">
                        Let's Talk
                      </Typography>
                    </div>

                    <Typography
                      variant="h3"
                      className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                      Connect with our marketing experts
                    </Typography>

                    <Typography variant="body1" className="text-gray-300 text-lg leading-relaxed">
                      Schedule a free consultation to discuss your project goals, explore innovative
                      solutions, and receive a detailed roadmap tailored to your business needs.
                      Let's transform your vision into a successful digital reality.
                    </Typography>
                  </div>

                  {/* Right Side - Form */}
                  <div className="lg:col-span-3">
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-300"
                      >
                        <Typography variant="body2">
                          Thank you! We'll get back to you within 24 hours.
                        </Typography>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300"
                      >
                        <Typography variant="body2">
                          Something went wrong. Please try again.
                        </Typography>
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      {/* Name and Email Row */}
                      <Input
                        label="Full Name"
                        placeholder="John Doe"
                        fullWidth
                        required
                        error={errors.fullName?.message}
                        {...register('fullName', {
                          required: 'Full name is required',
                          minLength: {
                            value: 2,
                            message: 'Name must be at least 2 characters',
                          },
                        })}
                      />

                      <Input
                        label="Company Email"
                        type="email"
                        placeholder="john@company.com"
                        fullWidth
                        required
                        error={errors.companyEmail?.message}
                        {...register('companyEmail', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                      />

                      {/* Phone Number */}
                      <Input
                        label="Phone Number"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        fullWidth
                        error={errors.phoneNumber?.message}
                        {...register('phoneNumber', {
                          pattern: {
                            value:
                              /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
                            message: 'Invalid phone number',
                          },
                        })}
                      />

                      {/* Project Description */}
                      <Textarea
                        label="Project Details"
                        placeholder="Tell us about your project goals and requirements..."
                        rows={4}
                        resize="none"
                        fullWidth
                        required
                        error={errors.projectDescription?.message}
                        {...register('projectDescription', {
                          required: 'Project description is required',
                          minLength: {
                            value: 20,
                            message: 'Please provide at least 20 characters',
                          },
                          maxLength: {
                            value: 1000,
                            message: 'Description must not exceed 1000 characters',
                          },
                        })}
                      />

                      {/* Bottom Row: File Upload, Submit, Privacy */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                        <Typography variant="caption" className="text-gray-400 text-sm flex-1">
                          By submitting the form I agree with the{' '}
                          <Link
                            href="/privacy-policy"
                            className="text-brand-gold hover:text-brand-violet transition-colors underline"
                            onClick={closeModal}
                          >
                            Privacy Policy
                          </Link>{' '}
                          and consent to receive SMS updates from SoftKerr.
                        </Typography>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          disabled={isSubmitting}
                          rightIcon={<FaPaperPlane />}
                          className="flex-shrink-0"
                          aria-label="Submit Contact Form"
                        >
                          {isSubmitting ? 'Sending...' : 'Book a Call'}
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
