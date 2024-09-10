'use client';

import { motion } from 'framer-motion';
import { Container, Section, Typography } from '@/components/ui';
import { FaShieldAlt, FaRocket, FaUsers, FaChartLine, FaClock, FaAward } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const reasons = [
  {
    icon: FaRocket,
    title: 'Fast Delivery',
    description:
      'Agile development process ensures rapid time-to-market without compromising quality.',
    stat: '3-5x',
    statLabel: 'Faster',
  },
  {
    icon: FaShieldAlt,
    title: 'Proven Expertise',
    description: '5+ years of experience delivering enterprise-grade solutions for global clients.',
    stat: '5+',
    statLabel: 'Years',
  },
  {
    icon: FaUsers,
    title: 'Dedicated Teams',
    description: 'Work directly with experienced developers committed to your project success.',
    stat: '2M+',
    statLabel: 'Users Served',
  },
  {
    icon: FaChartLine,
    title: 'Scalable Solutions',
    description:
      'From startups to enterprises — our architecture grows with your needs without slowing down.',
    stat: '∞',
    statLabel: 'Seamless Scaling',
  },
  {
    icon: FaClock,
    title: '24/7 Support',
    description: 'Round-the-clock monitoring and support to keep your business running smoothly.',
    stat: '99.9%',
    statLabel: 'Uptime',
  },
  {
    icon: FaAward,
    title: 'Quality First',
    description: 'Rigorous testing and code review processes ensure exceptional quality standards.',
    stat: '98%',
    statLabel: 'Satisfaction',
  },
];

const WhyChooseUs = () => {
  return (
    <Section className="relative overflow-hidden py-12 lg:py-32">
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-violet/10 border border-brand-violet/20 mb-6">
              <HiSparkles className="text-brand-violet" />
              <Typography variant="body2" className="text-brand-violet font-medium">
                What Sets Us Apart
              </Typography>
            </div>
            <Typography variant="h2" className="mb-4 text-center">
              The <span className="text-gradient">SoftKerr</span> Difference
            </Typography>
          </div>

          {/* Timeline with expanding bars */}
          <div className="relative">
            {/* Center vertical line */}
            <div className="absolute left-0 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-violet via-brand-gold to-brand-blue" />

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={reason.title} className="relative pl-6 lg:pl-20 group">
                  {/* Timeline node */}
                  <div className="absolute -left-4 lg:left-4 top-0 w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center">
                    <reason.icon className="text-white text-sm" />
                  </div>

                  {/* Expanding bar */}
                  <div className="relative overflow-hidden">
                    <div className="bg-gradient-to-r from-brand-violet/10 via-brand-gold/10 to-transparent p-6 rounded-r-2xl border-l-4 border-brand-violet/50">
                      <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-full lg:col-span-10">
                          <Typography variant="h4" className="mb-2 text-lg">
                            {reason.title}
                          </Typography>
                          <Typography variant="body2" color="secondary" className="text-sm">
                            {reason.description}
                          </Typography>
                        </div>

                        {/* Stat chip */}
                        <motion.div
                          className="col-span-full lg:col-span-2 content-center flex-shrink-0 px-3 py-2 rounded-xl bg-gradient-to-br from-brand-gold/20 to-brand-cyan/20 border border-brand-gold/30"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Typography
                            variant="h5"
                            className="text-brand-gold font-bold lg:text-center"
                          >
                            {reason.stat}
                          </Typography>
                          <Typography
                            variant="caption"
                            className="block text-xs text-gray-400 lg:text-center"
                          >
                            {reason.statLabel}
                          </Typography>
                        </motion.div>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="h-1 bg-gradient-to-r from-brand-violet via-brand-gold to-brand-blue origin-left mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhyChooseUs;
