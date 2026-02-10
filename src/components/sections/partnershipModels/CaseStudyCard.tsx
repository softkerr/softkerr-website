'use client';

import { m as motion } from '@/lib/motion';
import Typography from '@/components/ui/Typography';
import { FaQuoteLeft, FaCheckCircle } from '@/components/icons';

export interface CaseStudy {
  // Client Context
  clientName: string;
  clientIndustry: string;
  clientSize: string; // e.g., "Series B, 50 engineers"
  clientLogo?: string;

  // Technical Challenge
  challenge: {
    title: string;
    description: string;
    techStack?: string[]; // e.g., ["React", "Node.js", "AWS"]
  };

  // Collaboration Model
  collaborationModel: 'Embedded Team' | 'Co-Development Partner' | 'Technical Acceleration';
  duration: string; // e.g., "8 months"
  teamSize: string; // e.g., "3 engineers"

  // What We Did
  solution: {
    brief: string; // One-line summary
    keyActions: string[]; // 3-5 bullet points
  };

  // Results (Metrics)
  results: {
    metric: string;
    value: string;
    icon?: string;
  }[];

  // Quote
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };

  // Visual
  glowColor: string;
  borderColor: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index?: number;
}

export default function CaseStudyCard({ caseStudy, index = 0 }: CaseStudyCardProps) {
  const modelColors = {
    'Embedded Team': 'text-brand-violet',
    'Co-Development Partner': 'text-brand-gold',
    'Technical Acceleration': 'text-brand-pink',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div
        className={`relative h-full backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border ${caseStudy.borderColor} rounded-2xl overflow-hidden group`}
      >
        {/* Gradient Glow Effect on Hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${caseStudy.glowColor}, transparent 70%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-8 space-y-6">
          {/* Client Context */}
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Typography variant="h3" className="text-xl font-bold text-white">
                  {caseStudy.clientName}
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  {caseStudy.clientIndustry} • {caseStudy.clientSize}
                </Typography>
              </div>
              {caseStudy.clientLogo && (
                <img
                  src={caseStudy.clientLogo}
                  alt={caseStudy.clientName}
                  className="w-12 h-12 object-contain opacity-60"
                />
              )}
            </div>

            {/* Collaboration Model Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <div
                className={`w-2 h-2 rounded-full ${modelColors[caseStudy.collaborationModel].replace('text-', 'bg-')}`}
              />
              <Typography
                variant="body2"
                className={`text-xs font-medium ${modelColors[caseStudy.collaborationModel]}`}
              >
                {caseStudy.collaborationModel}
              </Typography>
              <Typography variant="body2" className="text-xs text-gray-400">
                • {caseStudy.duration} • {caseStudy.teamSize}
              </Typography>
            </div>
          </div>

          {/* Technical Challenge */}
          <div className="space-y-2">
            <Typography
              variant="h4"
              className="text-sm font-semibold text-gray-300 uppercase tracking-wider"
            >
              Challenge
            </Typography>
            <Typography variant="body1" className="text-white font-medium">
              {caseStudy.challenge.title}
            </Typography>
            <Typography variant="body2" className="text-gray-400 leading-relaxed">
              {caseStudy.challenge.description}
            </Typography>
            {caseStudy.challenge.techStack && (
              <div className="flex flex-wrap gap-2 mt-2">
                {caseStudy.challenge.techStack.map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* What We Did */}
          <div className="space-y-2">
            <Typography
              variant="h4"
              className="text-sm font-semibold text-gray-300 uppercase tracking-wider"
            >
              Solution
            </Typography>
            <Typography variant="body2" className="text-white">
              {caseStudy.solution.brief}
            </Typography>
            <ul className="space-y-2 mt-3">
              {caseStudy.solution.keyActions.map((action, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                  <FaCheckCircle
                    className={`w-4 h-4 mt-0.5 flex-shrink-0 ${modelColors[caseStudy.collaborationModel]}`}
                  />
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="space-y-3">
            <Typography
              variant="h4"
              className="text-sm font-semibold text-gray-300 uppercase tracking-wider"
            >
              Results
            </Typography>
            <div className="grid grid-cols-2 gap-3">
              {caseStudy.results.map((result, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <Typography variant="h3" className="text-2xl font-bold text-white mb-1">
                    {result.value}
                  </Typography>
                  <Typography variant="body2" className="text-xs text-gray-400">
                    {result.metric}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <div className="pt-4 border-t border-white/10 space-y-3">
              <FaQuoteLeft className="w-6 h-6 text-white/20" />
              <Typography variant="body2" className="text-gray-300 italic leading-relaxed">
                "{caseStudy.testimonial.quote}"
              </Typography>
              <div>
                <Typography variant="body2" className="text-white font-medium">
                  {caseStudy.testimonial.author}
                </Typography>
                <Typography variant="body2" className="text-xs text-gray-400">
                  {caseStudy.testimonial.role}
                </Typography>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
