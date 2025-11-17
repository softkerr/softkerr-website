'use client';

import Link from 'next/link';
import { FaHome, FaArrowLeft, FaSearch } from 'react-icons/fa';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-violet/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[150px]" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto px-4">
          {/* 404 Number */}
          <div className="mb-8">
            <div className="text-[120px] md:text-[180px] lg:text-[240px] font-bold leading-none bg-gradient-to-r from-brand-violet via-brand-gold to-brand-pink bg-clip-text text-transparent text-center bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
              404
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-6">
            <Typography
              variant="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center"
            >
              Page Not Found
            </Typography>
            <Typography
              variant="body1"
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto text-center"
            >
              Oops! The page you're looking for seems to have wandered off into the digital void.
              Don't worry, even the best explorers get lost sometimes.
            </Typography>
          </div>

          {/* Decorative Icon */}
          <div className="my-12">
            <div className="inline-block p-6 rounded-full bg-gradient-to-br from-brand-violet/20 to-brand-gold/20 backdrop-blur-sm border border-brand-gold/30">
              <FaSearch className="w-12 h-12 md:w-16 md:h-16 text-brand-gold" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link href="/">
              <Button
                variant="primary"
                size="lg"
                leftIcon={<FaHome />}
                className="w-full sm:w-auto"
              >
                Back to Home
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              leftIcon={<FaArrowLeft />}
              onClick={() => window.history.back()}
              className="w-full sm:w-auto"
            >
              Go Back
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="pt-8 border-t border-white/10">
            <Typography variant="body2" className="text-gray-500 mb-4 text-center">
              Maybe you're looking for:
            </Typography>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link
                href="/services"
                className="text-brand-gold hover:text-brand-gold/80 transition-colors text-sm md:text-base"
              >
                Our Services
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                href="/projects"
                className="text-brand-gold hover:text-brand-gold/80 transition-colors text-sm md:text-base"
              >
                Projects
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                href="/dedicated-team"
                className="text-brand-gold hover:text-brand-gold/80 transition-colors text-sm md:text-base"
              >
                Our Team
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                href="/contacts"
                className="text-brand-gold hover:text-brand-gold/80 transition-colors text-sm md:text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
