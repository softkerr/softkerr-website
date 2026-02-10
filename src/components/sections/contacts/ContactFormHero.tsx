'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { m as motion } from '@/lib/motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { submitToFormspree } from '@/lib/formspree';
import { FaCheckCircle, FaLightbulb, FaPaperPlane, HiSparkles } from '@/components/icons';
import { contactEvents } from '@/lib/analytics';

type ContactFormData = {
  fullName: string;
  companyEmail: string;
  phoneNumber?: string;
  budget: string;
  projectDescription: string;
};

export default function ContactFormHero() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Track form submission
      contactEvents.formSubmit('contact');

      // Submit to Formspree using the reusable utility
      const result = await submitToFormspree({
        data: {
          fullName: data.fullName,
          companyEmail: data.companyEmail,
          phoneNumber: 'Not provided',
          budget: 'Not provided',
          projectDescription: data.projectDescription,
          attachedFile: 'No file attached',
          formType: 'contact-form',
        },
        subject: 'New Contact Form Submission from {fullName}',
        replyTo: '{companyEmail}',
      });

      if (!result.success) {
        throw new Error(result.message || 'Form submission failed');
      }

      // Track successful submission
      contactEvents.formSuccess('contact');
      setSubmitStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      contactEvents.formError(error instanceof Error ? error.message : 'Unknown error');
      setSubmitStatus('error');
    }
  };

  return (
    <Section className="relative py-12 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-brand-violet/10 to-brand-pink/10" />
        <motion.div
          className="absolute inset-0 opacity-10"
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

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-gold/20 to-brand-violet/20 border border-brand-gold/30 backdrop-blur-sm"
            >
              <HiSparkles className="w-4 h-4 text-brand-gold" />
              <Typography variant="body2" className="text-brand-gold font-medium">
                Reach Out
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography
                variant="h1"
                className="capitalize text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                Let’s Talk
              </Typography>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              {[
                'Fill the form and submit your message',
                'We read your message (usually within a few hours)',
                'Quick email or call to understand your situation',
                "If it's a fit, we'll propose next steps",
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="w-3 h-3 text-brand-gold" />
                  </div>
                  <Typography variant="body2" className="text-gray-300">
                    {benefit}
                  </Typography>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-2xl p-6 md:p-8">
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
                  <Typography variant="body2">Something went wrong. Please try again.</Typography>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="What should we call you?"
                    placeholder="John Doe"
                    fullWidth
                    required
                    error={errors.fullName?.message}
                    {...register('fullName', {
                      required: 'Name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters',
                      },
                    })}
                  />

                  <Input
                    label="Where should we reply?"
                    type="email"
                    placeholder="john@company.com"
                    fullWidth
                    required
                    error={errors.companyEmail?.message}
                    {...register('companyEmail', {
                      required: 'Need your email to reply',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                </div>
                <div>
                  {/* Project Description */}
                  <Textarea
                    label="What's on your mind?"
                    placeholder="What you're building, what you need, rough timeline"
                    rows={4}
                    resize="vertical"
                    fullWidth
                    error={errors.projectDescription?.message}
                    {...register('projectDescription', {
                      required: 'Give us a bit of context',
                      minLength: {
                        value: 20,
                        message: 'A sentence or two helps',
                      },
                      maxLength: {
                        value: 500,
                        message: 'Keep it under 500 characters for now',
                      },
                    })}
                  />
                </div>

                {/* Bottom Row: File Upload, Submit, Privacy */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                  {/* Privacy Policy Link */}
                  <Typography variant="caption" className="text-gray-400 text-sm flex-1">
                    By submitting the form I agree with the{' '}
                    <Link
                      href="/privacy-policy"
                      className="text-brand-gold hover:text-brand-violet transition-colors underline"
                    >
                      Privacy Policy.
                    </Link>
                  </Typography>
                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    rightIcon={<FaPaperPlane />}
                    className="flex-shrink-0"
                    aria-label="Send Message"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
            <div className="backdrop-blur-xl bg-gradient-to-br from-brand-gold/10 via-brand-gold/5 to-transparent border border-brand-gold/30 rounded-xl p-6 mt-3">
              <div className="flex items-start gap-3">
                <FaLightbulb className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <Typography variant="body2" className="text-gray-300 text-sm">
                    No pressure, no hard sell. Most initial calls are just us understanding if we
                    can help.
                  </Typography>
                  <Typography variant="caption" className="text-gray-400 text-xs">
                    If we&apos;re not a fit, we&apos;ll tell you and point you in the right
                    direction.
                  </Typography>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
