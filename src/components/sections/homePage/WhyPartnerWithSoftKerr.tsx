'use client';

import { m as motion } from '@/lib/motion';
import { Typography, Section, Container, ScrollReveal } from '@/components/ui';
import { FaRocket, FaCode, FaUsers, FaBolt, FaClock } from '@/components/icons';
import { homeEvents } from '@/lib/analytics';

const reasons = [
  {
    icon: FaRocket,
    title: 'No Ramp-Up Theater',
    description:
      'Senior engineers who commit code from week one. No junior developers learning on your time.',
    color: 'brand-violet',
  },
  {
    icon: FaCode,
    title: 'Your Tools, Your Process',
    description:
      'We work in your GitHub, follow your conventions, and join your standups. You stay in control.',
    color: 'brand-gold',
  },
  {
    icon: FaUsers,
    title: 'Built to Stay',
    description:
      'Average engagement: 18+ months. We document, transfer knowledge, and leave you self-sufficient.',
    color: 'brand-cyan',
  },
  {
    icon: FaBolt,
    title: 'Velocity Without Debt',
    description:
      'Ship features faster without accumulating technical debt. We write code your team wants to maintain.',
    color: 'brand-pink',
  },
  {
    icon: FaClock,
    title: 'Timezone-Conscious Collaboration',
    description:
      '4-6 hour overlap with US/EU teams. Async-first when needed, real-time when it matters.',
    color: 'brand-violet',
  },
];

export default function WhyPartnerWithSoftKerr_Alt1() {
  return (
    <Section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(240,185,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(240,185,11,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography
              variant="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center"
            >
              Why Work With Us
            </Typography>
          </div>
        </ScrollReveal>

        {/* Horizontal Timeline Layout */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason.title} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onViewportEnter={() => homeEvents.whyPartnerReasonView(reason.title)}
                className="relative"
              >
                {/* Connecting Line */}
                {index < reasons.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-brand-gold/50 to-transparent" />
                )}

                <div className="flex items-start gap-6">
                  {/* Icon Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-gold/20 to-brand-violet/20 border-2 border-brand-gold/50 flex items-center justify-center backdrop-blur-sm">
                      <reason.icon className="w-6 h-6 text-brand-gold" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <Typography variant="h4" className="text-2xl font-bold text-white mb-2">
                      {reason.title}
                    </Typography>
                    <Typography variant="body1" className="text-gray-400 leading-relaxed">
                      {reason.description}
                    </Typography>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-violet/10 to-brand-gold/10 border border-brand-gold/30">
              <Typography variant="body2" className="text-gray-300">
                Not here to sell you a team. Here to extend yours.
              </Typography>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
