'use client';

import { m as motion, AnimatePresence } from '@/lib/motion';
import { Typography, Section, Container } from '@/components/ui';
import { FaCheckCircle } from '@/components/icons';
import { partnershipModels } from '@/data/partnershipModels';
import { cn } from '@/lib/utils';

type ModelsGridProps = {
  activeModel: string;
  onModelChange: (modelId: string) => void;
};

export default function ModelsGrid({ activeModel, onModelChange }: ModelsGridProps) {
  const currentModel = partnershipModels.find(m => m.id === activeModel) || partnershipModels[0];
  const Icon = currentModel.icon;

  // Get color RGB values for glow effects
  const colorMap: Record<string, string> = {
    'brand-violet': '139, 92, 246',
    'brand-gold': '240, 185, 11',
    'brand-cyan': '6, 182, 212',
  };
  const glowColor = colorMap[currentModel.color] || '240, 185, 11';

  return (
    <Section id="partnership-models" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Dynamic Background Based on Active Model */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeModel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 0%, rgba(${glowColor}, 0.15), transparent 70%), linear-gradient(180deg, #000000 0%, #0a0a0a 100%)`,
          }}
        />
      </AnimatePresence>

      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <Typography
            variant="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center"
          >
            Three Ways to{' '}
            <span className="bg-gradient-to-r from-brand-violet to-brand-gold bg-clip-text text-transparent ">
              Collaborate
            </span>
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-400 text-lg max-w-2xl mx-auto text-center"
          >
            Each model is designed for different situations. Most clients start with one and evolve
            based on what works.
          </Typography>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-4 lg:mb-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl max-w-4xl w-full">
            {partnershipModels.map(model => {
              const ModelIcon = model.icon;
              const isActive = model.id === activeModel;
              const modelGlowColor = colorMap[model.color] || '240, 185, 11';

              return (
                <motion.button
                  key={model.id}
                  onClick={() => onModelChange(model.id)}
                  className={cn(
                    'relative px-6 py-4 rounded-xl font-medium transition-all duration-300 border-2 text-left',
                    isActive && 'bg-gradient-to-br from-white/20 to-white/10'
                  )}
                  style={{
                    borderColor: isActive ? `rgba(${modelGlowColor}, 0.6)` : 'transparent',
                  }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: `rgba(${modelGlowColor}, ${isActive ? 0.6 : 0.3})`,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  aria-label={`Select ${model.title}`}
                >
                  {/* Content */}
                  <span className="relative z-10 flex flex-col gap-2">
                    <span className="flex items-center gap-3">
                      <ModelIcon
                        className="w-5 h-5 lg:w-8 lg:h-8 transition-colors duration-300 flex-shrink-0"
                        style={{ color: isActive ? `rgb(${modelGlowColor})` : 'white' }}
                      />
                      <span className="text-white font-semibold text-lg">{model.title}</span>
                    </span>
                  </span>

                  {/* Active indicator glow */}
                  {isActive && (
                    <motion.div
                      layoutId="activeModelGlow"
                      className="absolute inset-0 rounded-xl opacity-20"
                      style={{
                        background: `rgba(${modelGlowColor}, 0.3)`,
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content - Single Big Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentModel.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-6xl mx-auto"
          >
            {/* Spotlight Effect Following Mouse */}
            <motion.div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Big Card */}
            <motion.div
              className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border-2 rounded-2xl p-8 lg:p-12 overflow-hidden"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
              whileHover={{
                scale: 1.01,
                borderColor: `rgba(${glowColor}, 0.6)`,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="flex items-start gap-6 mb-8 pb-6 border-b border-white/10">
                <motion.div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm`}
                  style={{
                    backgroundColor: `rgba(${glowColor}, 0.2)`,
                    borderColor: `rgba(${glowColor}, 0.3)`,
                    borderWidth: '1px',
                  }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-8 h-8" style={{ color: `rgb(${glowColor})` }} />
                </motion.div>
                <div className="flex-1">
                  <Typography
                    variant="h3"
                    className="text-2xl lg:text-3xl font-bold text-white mb-2"
                  >
                    {currentModel.title}
                  </Typography>
                  <Typography variant="body1" className="text-gray-400 text-lg">
                    {currentModel.tagline}
                  </Typography>
                </div>
              </div>

              {/* Three Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* When It Makes Sense */}
                <div>
                  <Typography
                    variant="h5"
                    className="text-lg font-bold text-brand-gold mb-4 flex items-center gap-2"
                  >
                    <FaCheckCircle className="w-4 h-4" />
                    {currentModel.whenItMakesSense.title}
                  </Typography>
                  <ul className="space-y-3">
                    {currentModel.whenItMakesSense.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-brand-gold mt-1.5 flex-shrink-0">•</span>
                        <Typography variant="body2" className="text-gray-300 leading-relaxed">
                          {point}
                        </Typography>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* How It Works */}
                <div>
                  <Typography
                    variant="h5"
                    className="text-lg font-bold text-brand-violet mb-4 flex items-center gap-2"
                  >
                    <FaCheckCircle className="w-4 h-4" />
                    {currentModel.howItWorks.title}
                  </Typography>
                  <ul className="space-y-3">
                    {currentModel.howItWorks.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-brand-violet mt-1.5 flex-shrink-0">•</span>
                        <Typography variant="body2" className="text-gray-300 leading-relaxed">
                          {point}
                        </Typography>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Typical Outcomes */}
                <div>
                  <Typography
                    variant="h5"
                    className="text-lg font-bold text-brand-cyan mb-4 flex items-center gap-2"
                  >
                    <FaCheckCircle className="w-4 h-4" />
                    {currentModel.outcomes.title}
                  </Typography>
                  <ul className="space-y-3">
                    {currentModel.outcomes.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-brand-cyan mt-1.5 flex-shrink-0">•</span>
                        <Typography variant="body2" className="text-gray-300 leading-relaxed">
                          {point}
                        </Typography>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Shine Effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
                style={{
                  background: `linear-gradient(to right, transparent, rgba(${glowColor}, 0.5), transparent)`,
                }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  );
}
