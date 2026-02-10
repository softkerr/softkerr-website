'use client';

import { m as motion } from '@/lib/motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import { FaArrowRight, FaGlobe, FaUsers, FaChevronDown } from '@/components/icons';
import { HiSparkles } from '@/components/icons';
import { partnershipModels } from '@/data/partnershipModels';

type DedicatedTeamHeroProps = {
  onModelSelect?: (modelId: string) => void;
};

export default function DedicatedTeamHero({ onModelSelect }: DedicatedTeamHeroProps) {
  const handleModelClick = (modelId: string) => {
    // Scroll to ModelsGrid section
    const modelsSection = document.getElementById('partnership-models');
    if (modelsSection) {
      modelsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Select the model tab
    if (onModelSelect) {
      onModelSelect(modelId);
    }
  };
  return (
    <Section className="relative py-12 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-violet/5 to-transparent" />

      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)`,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-violet/20 to-brand-pink/20 border border-brand-violet/30 backdrop-blur-sm"
            >
              <HiSparkles className="w-4 h-4 text-brand-violet" />
              <Typography variant="body2" className="text-brand-violet font-medium">
                Enterprise-Grade Solutions
              </Typography>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography
                variant="h1"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                Scale Your Business with{' '}
                <span className="bg-gradient-to-r from-brand-violet via-brand-pink to-brand-cyan bg-clip-text text-transparent">
                  Elite Development Teams
                </span>
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography variant="body1" className="text-lg text-gray-300 leading-relaxed">
                Partner with dedicated development teams that power global companies serving
                millions of customers every month. We deliver enterprise-grade solutions with the
                agility and innovation.
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 lg:pt-8"
            >
              <Button
                variant="primary"
                size="lg"
                href="/contacts"
                rightIcon={<FaArrowRight />}
                aria-label="Build Your Team"
              >
                Build Your Team
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/pricing"
                leftIcon={<FaGlobe />}
                className="border-white/20 hover:border-brand-violet/50"
                aria-label="View Pricing"
              >
                View Pricing
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Team Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Main Container with 3:4 Aspect Ratio */}
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/20 via-brand-pink/20 to-brand-cyan/20 rounded-3xl" />

              {/* Glass Container */}
              <motion.div
                className="relative h-full backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-50"
                  animate={{
                    background: [
                      'radial-gradient(circle at 0% 0%, rgba(139,92,246,0.3), transparent 50%)',
                      'radial-gradient(circle at 100% 100%, rgba(236,72,153,0.3), transparent 50%)',
                      'radial-gradient(circle at 0% 100%, rgba(6,182,212,0.3), transparent 50%)',
                      'radial-gradient(circle at 0% 0%, rgba(139,92,246,0.3), transparent 50%)',
                    ],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col p-8">
                  {/* Top Section - Team Members Preview */}
                  <div className="flex-1 flex flex-col justify-center space-y-6">
                    {/* Team Icon */}
                    <motion.div
                      className="flex justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-violet to-brand-pink flex items-center justify-center shadow-lg shadow-brand-violet/50">
                        <FaUsers className="w-12 h-12 text-white" />
                      </div>
                    </motion.div>

                    <div className="text-center space-y-2">
                      <Typography variant="h2" className="text-2xl font-bold text-white">
                        Partnership Models
                      </Typography>
                      <Typography variant="body2" className="text-gray-300">
                        How We Work Together
                      </Typography>
                    </div>
                  </div>

                  {/* Bottom Section - Partnership Models List */}
                  <div className="space-y-2">
                    {partnershipModels.map((model, index) => {
                      const ModelIcon = model.icon;
                      const colorMap: Record<string, string> = {
                        'brand-violet': '139, 92, 246',
                        'brand-gold': '240, 185, 11',
                        'brand-cyan': '6, 182, 212',
                      };
                      const glowColor = colorMap[model.color] || '240, 185, 11';

                      return (
                        <motion.button
                          key={model.id}
                          onClick={() => handleModelClick(model.id)}
                          className="w-full flex items-center justify-between gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          whileHover={{ scale: 1.02, x: 4 }}
                          style={{
                            borderColor: `rgba(${glowColor}, 0.2)`,
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center"
                              style={{
                                backgroundColor: `rgba(${glowColor}, 0.2)`,
                              }}
                            >
                              <ModelIcon
                                className="w-4 h-4"
                                style={{ color: `rgb(${glowColor})` }}
                              />
                            </div>
                            <Typography variant="body2" className="text-white text-sm font-medium">
                              {model.title}
                            </Typography>
                          </div>
                          <FaChevronDown
                            className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors duration-300"
                            style={{ transform: 'rotate(-90deg)' }}
                          />
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 bg-brand-violet/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-16 h-16 bg-brand-pink/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.5,
                  }}
                />
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-brand-violet/90 to-brand-pink/90 backdrop-blur-sm border border-white/20 shadow-lg"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Typography variant="body2" className="text-white font-bold">
                  🌍 Global Reach
                </Typography>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full bg-gradient-to-r from-brand-pink/90 to-brand-cyan/90 backdrop-blur-sm border border-white/20 shadow-lg"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
              >
                <Typography variant="body2" className="text-white font-bold">
                  💼 Enterprise Ready
                </Typography>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
