'use client';

import { Typography, Section, Container, ScrollReveal } from '@/components/ui';

const comparisonData = [
  {
    feature: 'Best for',
    embeddedTeam: 'Ongoing capacity needs',
    coDevelopment: 'Building something new',
    technicalAcceleration: 'Time-sensitive goals',
  },
  {
    feature: 'Typical duration',
    embeddedTeam: '6-18 months',
    coDevelopment: '3-12 months',
    technicalAcceleration: '4-12 weeks',
  },
  {
    feature: 'Team integration',
    embeddedTeam: 'Full (daily standups, Slack, etc.)',
    coDevelopment: 'Partial (weekly syncs)',
    technicalAcceleration: 'Minimal (async updates)',
  },
  {
    feature: 'Your involvement',
    embeddedTeam: 'Assign work, review PRs',
    coDevelopment: 'Joint decisions on architecture',
    technicalAcceleration: 'Approve major decisions',
  },
  {
    feature: 'Scalability',
    embeddedTeam: 'Scales up/down with 2 weeks notice',
    coDevelopment: 'Fixed team for project duration',
    technicalAcceleration: 'Fixed scope, fixed team',
  },
  {
    feature: 'Knowledge transfer',
    embeddedTeam: 'Continuous (pairing, docs)',
    coDevelopment: 'Mid-project and at handoff',
    technicalAcceleration: 'Final handoff session + docs',
  },
];

export default function ComparisonTable() {
  return (
    <Section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background-secondary to-background">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-12">
            <Typography
              variant="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Quick{' '}
              <span className="bg-gradient-to-r from-brand-violet to-brand-gold bg-clip-text text-transparent">
                Comparison
              </span>
            </Typography>
            <Typography variant="body1" className="text-gray-400 text-lg max-w-2xl">
              Not sure which model fits? Here's a side-by-side breakdown.
            </Typography>
          </div>
        </ScrollReveal>

        {/* Desktop Table */}
        <ScrollReveal delay={0.2}>
          <div className="hidden lg:block overflow-x-auto">
            <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-6 text-gray-400 font-semibold">Feature</th>
                    <th className="text-left p-6">
                      <Typography variant="h5" className="text-brand-violet font-bold">
                        Embedded Team
                      </Typography>
                    </th>
                    <th className="text-left p-6">
                      <Typography variant="h5" className="text-brand-gold font-bold">
                        Co-Development
                      </Typography>
                    </th>
                    <th className="text-left p-6">
                      <Typography variant="h5" className="text-brand-cyan font-bold">
                        Technical Acceleration
                      </Typography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={`${index !== comparisonData.length - 1 ? 'border-b border-white/10' : ''}`}
                    >
                      <td className="p-6 text-gray-400 font-medium">{row.feature}</td>
                      <td className="p-6 text-gray-300">{row.embeddedTeam}</td>
                      <td className="p-6 text-gray-300">{row.coDevelopment}</td>
                      <td className="p-6 text-gray-300">{row.technicalAcceleration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {['Embedded Team', 'Co-Development', 'Technical Acceleration'].map((model, idx) => (
            <ScrollReveal key={model} delay={idx * 0.1}>
              <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-2xl p-6">
                <Typography
                  variant="h4"
                  className={`text-xl font-bold mb-4 ${
                    idx === 0
                      ? 'text-brand-violet'
                      : idx === 1
                        ? 'text-brand-gold'
                        : 'text-brand-cyan'
                  }`}
                >
                  {model}
                </Typography>
                <div className="space-y-3">
                  {comparisonData.map(row => (
                    <div key={row.feature} className="flex justify-between gap-4">
                      <Typography variant="body2" className="text-gray-400 font-medium">
                        {row.feature}:
                      </Typography>
                      <Typography variant="body2" className="text-gray-300 text-right">
                        {idx === 0
                          ? row.embeddedTeam
                          : idx === 1
                            ? row.coDevelopment
                            : row.technicalAcceleration}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Note */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <Typography variant="body2" className="text-gray-500 italic">
              Most engagements start with one model and evolve. We're flexible.
            </Typography>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
