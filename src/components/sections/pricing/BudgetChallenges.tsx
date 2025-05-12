'use client';

import { Typography, Section, Card, ScrollReveal } from '@/components/ui';

const challenges = [
  {
    title: 'Unclear Pricing',
    subTitle: 'Getting wildly different estimates from providers?',
    description:
      'Transparent pricing structures give you confidence. Our detailed breakdown shows exactly how your investment translates into deliverables.',
    stat: '+52%',
    statLabel: 'Increase in budget confidence',
  },
  {
    title: 'Hidden Charges',
    subTitle: 'Are unexpected charges catching you off guard?',
    description:
      'All expenses disclosed from the start. We provide all-inclusive quotes from day one, ensuring complete transparency and no unwelcome surprises.',
    stat: '-43%',
    statLabel: 'Fewer surprise charges',
  },
  {
    title: 'Budget Overruns',
    subTitle: 'Is poor planning making your project budget spiral?',
    description:
      'Clear scope keeps budgets stable. Our structured methodology defines precise deliverables and realistic timelines, keeping your project predictable.',
    stat: '+38%',
    statLabel: 'Better budget adherence',
  },
];

export default function BudgetChallenges() {
  return (
    <Section variant="muted" padding="lg">
      <ScrollReveal>
        <div className="text-center mb-20">
          <Typography
            variant="h2"
            align="center"
            className="mb-6 text-5xl md:text-6xl font-black xl:max-w-[70%] mx-auto"
          >
            Three <span className="text-brand-red">critical factors</span> that impact your project
            budget
          </Typography>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {challenges.map((challenge, index) => (
          <ScrollReveal key={challenge.title} delay={0.2}>
            <Card className="relative overflow-hidden h-full" hover animated>
              <div className="p-4 h-full flex flex-col justify-between">
                <div>
                  {/* Large Red Title */}

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-brand-red/60 backdrop-blur-sm mb-6">
                    <Typography variant="body1" className="text-brand-red font-medium">
                      {challenge.title}
                    </Typography>
                  </div>
                  <Typography variant="h4" color="primary" className="my-4 font-medium">
                    {challenge.subTitle}
                  </Typography>

                  {/* Large Description */}
                  <Typography className="text-charcoal-600 leading-relaxed text-xl">
                    {challenge.description}
                  </Typography>
                  {/* Large Percentage */}
                </div>
                <div className="flex items-center mt-8 border-t border-border-subtle pt-6 border-brand-blue/30">
                  <Typography
                    variant="h4"
                    className="text-7xl md:text-8xl font-black text-charcoal-900 leading-none"
                  >
                    {challenge.stat}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-charcoal-600 font-semibold ml-2 text-lg"
                  >
                    {challenge.statLabel}
                  </Typography>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
