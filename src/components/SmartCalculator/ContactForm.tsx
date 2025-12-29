'use client';

import { useEffect, useState } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FaUser, FaEnvelope, FaPhone, FaCheck, FaArrowLeft } from '@/components/icons';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import { ContactFormData } from './types';
import { getCountryFlag } from '@/data/calculator';

type ContactFormProps = {
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
  isSubmitting: boolean;
  submitStatus?: 'idle' | 'success' | 'error';
  onSubmit: () => void;
  onBack: () => void;
};

// Small fallback list to avoid blocking render before lazy load
const fallbackCountryCodes = [
  { code: 'US', calling: '1', name: 'United States' },
  { code: 'GB', calling: '44', name: 'United Kingdom' },
  { code: 'CA', calling: '1', name: 'Canada' },
  { code: 'DE', calling: '49', name: 'Germany' },
  { code: 'TR', calling: '90', name: 'Türkiye' },
];

const mapCountry = ({ code, calling, name }: { code: string; calling: string; name: string }) => ({
  value: `+${calling}`,
  label: `${getCountryFlag(code)} ${name} +${calling}`,
});

export default function ContactForm({
  register,
  errors,
  isSubmitting,
  submitStatus = 'idle',
  onSubmit,
  onBack,
}: ContactFormProps) {
  const [countryCodes, setCountryCodes] = useState(() => fallbackCountryCodes.map(mapCountry));

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const [{ getCountries, getCountryCallingCode }, locale] = await Promise.all([
          import('react-phone-number-input/input'),
          import('react-phone-number-input/locale/en'),
        ]);

        const labels = locale as unknown as Record<string, string>;

        const fullList = getCountries().map(country => {
          const callingCode = getCountryCallingCode(country);
          const countryName = labels?.[country as string] || country;
          return mapCountry({ code: country, calling: callingCode, name: countryName });
        });

        if (mounted) setCountryCodes(fullList);
      } catch (error) {
        // Fall back to the small list if dynamic import fails
        if (mounted) setCountryCodes(fallbackCountryCodes.map(mapCountry));
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="p-4 md:p-6 lg:p-8 lg:col-span-5 flex flex-col justify-between flex-1">
      <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        <Typography variant="h5" className="text-white mb-2 text-lg md:text-xl">
          Get a detailed estimate in 5 minutes
        </Typography>
        <Typography variant="body2" className="text-gray-400 mb-4 md:mb-6 text-sm">
          Fill in your contact details and we'll send you a comprehensive project estimate
        </Typography>

        <form onSubmit={onSubmit} className="space-y-4 md:space-y-5">
          {/* Full Name */}
          <Input
            label="Full Name"
            placeholder="Full Name"
            leftIcon={<FaUser className="w-4 h-4" />}
            error={errors.fullName?.message}
            {...register('fullName', {
              required: 'Please, enter your full name',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters',
              },
            })}
          />

          {/* Company Email */}
          <Input
            label="Company Email"
            type="email"
            placeholder="Email"
            leftIcon={<FaEnvelope className="w-4 h-4" />}
            error={errors.email?.message}
            {...register('email', {
              required: 'Please, enter a valid email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please, enter a valid email',
              },
            })}
          />

          {/* Phone Number */}
          <div>
            <Typography variant="body2" className="text-gray-300 mb-2">
              Phone Number
            </Typography>
            <div className="grid grid-cols-3 gap-3">
              <Select
                options={countryCodes}
                error={errors.countryCode?.message}
                {...register('countryCode', {
                  required: 'Required',
                })}
              />
              <div className="col-span-2">
                <Input
                  placeholder="50 123 4567"
                  leftIcon={<FaPhone className="w-4 h-4" />}
                  error={errors.phone?.message}
                  {...register('phone', {
                    required: 'Please, enter a phone',
                    pattern: {
                      value: /^[0-9\s-]+$/,
                      message: 'Please enter a valid phone number',
                    },
                  })}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              leftIcon={<FaArrowLeft />}
              className="flex-shrink-0"
              aria-label="Go back"
            >
              Back
            </Button>
            <Button
              type="submit"
              variant="primary"
              fullWidth
              size="lg"
              disabled={isSubmitting}
              rightIcon={<FaCheck />}
              aria-label="Submit Contact Form"
            >
              <Typography variant="body1" className="text-background font-[16px] xl:font-[20px]">
                {isSubmitting ? 'Sending...' : 'Get My Estimate'}
              </Typography>
            </Button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <Typography variant="body2" className="text-green-400 text-center">
                ✓ Thank you! We will send your detailed estimate shortly.
              </Typography>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <Typography variant="body2" className="text-red-400 text-center">
                Something went wrong. Please try again.
              </Typography>
            </div>
          )}

          {/* Privacy Policy */}
          <Typography variant="caption" className="text-gray-500 text-xs text-center block">
            By submitting the form I agree with the Privacy Policy and consent to receive SMS
            updates from SoftKerr.
          </Typography>
        </form>
      </div>
    </div>
  );
}
