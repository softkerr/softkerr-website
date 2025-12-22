'use client';

import { m as motion } from '@/lib/motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import { useBookCallModal } from '@/contexts/BookCallModalContext';
import { FaCalendar } from '@/components/icons';

export default function HomeCTA() {
  const { openModal } = useBookCallModal();

  return (
    <Section className="relative py-12 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-brand-violet/10 to-brand-pink/10" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Glass Card */}
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-3xl p-4 md:p-12 lg:p-16 overflow-hidden">
            {/* Gradient Border Effect */}
            <motion.div
              className="absolute inset-0 opacity-50"
              animate={{
                background: [
                  'linear-gradient(90deg, rgba(240,185,11,0.2), transparent, rgba(139,92,246,0.2))',
                  'linear-gradient(180deg, rgba(139,92,246,0.2), transparent, rgba(236,72,153,0.2))',
                  'linear-gradient(270deg, rgba(236,72,153,0.2), transparent, rgba(240,185,11,0.2))',
                  'linear-gradient(360deg, rgba(240,185,11,0.2), transparent, rgba(139,92,246,0.2))',
                ],
              }}
            />

            {/* Content */}
            <div className="relative z-10 text-center space-y-6">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-gold/20 to-brand-violet/20 border border-brand-gold/30 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                <Typography variant="body2" className="text-brand-gold font-medium">
                  Let's Connect
                </Typography>
              </motion.div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Typography
                  variant="h2"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center"
                >
                  Ready to discuss your project with us?
                </Typography>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-2xl mx-auto"
              >
                <Typography
                  variant="body1"
                  className="text-lg md:text-xl text-gray-300 leading-relaxed text-center"
                >
                  Let's talk about how we can craft a user experience that not only looks great but
                  drives real growth for your product.
                </Typography>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-4"
              >
                <Button
                  variant="primary"
                  size="xl"
                  rightIcon={<FaCalendar />}
                  className="shadow-lg shadow-brand-gold/30 hover:shadow-xl hover:shadow-brand-gold/50 transition-shadow"
                  onClick={openModal}
                  aria-label="Book a Call"
                >
                  Book a Call
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-2 md:gap-6 md:pt-8 text-sm text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <span className="text-brand-gold">✓</span>
                  <Typography variant="caption">Free Consultation</Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-gold">✓</span>
                  <Typography variant="caption">No Commitment Required</Typography>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-gold">✓</span>
                  <Typography variant="caption">Response Within 24 Hours</Typography>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-8 right-8 w-24 h-24 bg-brand-gold/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-8 left-8 w-24 h-24 bg-brand-violet/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5,
              }}
            />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
