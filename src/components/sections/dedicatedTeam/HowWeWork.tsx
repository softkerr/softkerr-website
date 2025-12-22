'use client';

import { m as motion } from '@/lib/motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Typography from '@/components/ui/Typography';
import { FaRocket, FaHandshake, FaUsers } from 'react-icons/fa';

interface CooperationModel {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  bestFor: string;
  duration: string;
  glowColor: string;
  borderColor: string;
  iconBg: string;
}

const cooperationModels: CooperationModel[] = [
  {
    title: 'Project-Based',
    description: 'Perfect for defined projects with clear scope and timeline.',
    icon: <FaRocket className="w-6 h-6" />,
    features: [
      'Fixed scope and timeline',
      'Dedicated project manager',
      'Regular milestone reviews',
      'Post-launch support included',
    ],
    bestFor: 'Startups, SMBs with specific needs',
    duration: '2-12 weeks',
    glowColor: 'rgba(240, 185, 11, 0.3)',
    borderColor: 'border-brand-gold/30',
    iconBg: 'from-brand-gold/20 to-brand-gold/5',
  },
  {
    title: 'Retainer Partnership',
    description: 'Ongoing collaboration for continuous development and support.',
    icon: <FaHandshake className="w-6 h-6" />,
    features: [
      'Monthly allocated hours',
      'Priority support',
      'Flexible scope adjustments',
      'Long-term strategic planning',
    ],
    bestFor: 'Growing businesses, agencies',
    duration: '3+ months',
    glowColor: 'rgba(139, 92, 246, 0.3)',
    borderColor: 'border-brand-violet/30',
    iconBg: 'from-brand-violet/20 to-brand-violet/5',
  },
  {
    title: 'Dedicated Team',
    description: 'Full-time dedicated developers and designers for your projects.',
    icon: <FaUsers className="w-6 h-6" />,
    features: [
      'Dedicated team members',
      'Direct communication',
      'Agile development process',
      'Scalable team size',
    ],
    bestFor: 'Enterprises, complex projects',
    duration: '6+ months',
    glowColor: 'rgba(236, 72, 153, 0.3)',
    borderColor: 'border-brand-pink/30',
    iconBg: 'from-brand-pink/20 to-brand-pink/5',
  },
];

const CooperationCard = ({ model, index }: { model: CooperationModel; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <div
        className={`relative h-full backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border ${model.borderColor} rounded-2xl p-6 md:p-8 overflow-hidden group`}
      >
        {/* Gradient Glow Effect on Hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${model.glowColor}, transparent 70%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <motion.div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${model.iconBg} border ${model.borderColor} flex items-center justify-center mb-6 text-white shadow-lg`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {model.icon}
          </motion.div>

          {/* Title */}
          <Typography variant="h4" className="text-xl md:text-2xl font-bold text-white mb-3">
            {model.title}
          </Typography>

          {/* Description */}
          <Typography variant="body2" className="text-gray-300 mb-6">
            {model.description}
          </Typography>

          {/* Features List */}
          <div className="space-y-3 mb-6 flex-grow">
            {model.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20 flex items-center justify-center mt-0.5">
                  <span className="text-brand-gold text-xs">✓</span>
                </div>
                <Typography variant="body2" className="text-gray-300 text-sm">
                  {feature}
                </Typography>
              </motion.div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <div>
              <Typography variant="caption" className="text-gray-500 uppercase text-xs mb-1">
                Best for:
              </Typography>
              <Typography variant="body2" className="text-white font-medium">
                {model.bestFor}
              </Typography>
            </div>
            <div>
              <Typography variant="caption" className="text-gray-500 uppercase text-xs mb-1">
                Duration:
              </Typography>
              <Typography
                variant="body2"
                className="text-white font-semibold bg-gradient-to-r from-brand-gold via-brand-violet to-brand-pink bg-clip-text text-transparent"
              >
                {model.duration}
              </Typography>
            </div>
          </div>
        </div>

        {/* Decorative Corner Glow */}
        <motion.div
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
          style={{ background: model.glowColor }}
        />
        <motion.div
          className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
          style={{ background: model.glowColor }}
        />
      </div>
    </motion.div>
  );
};

export default function HowWeWork() {
  return (
    <Section className="relative py-12 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-violet/5 to-transparent" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Typography
            variant="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center"
          >
            How We Work
          </Typography>

          <Typography
            variant="body1"
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center"
          >
            Choose the collaboration model that best fits your project needs and business goals.
          </Typography>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cooperationModels.map((model, index) => (
            <CooperationCard key={model.title} model={model} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
