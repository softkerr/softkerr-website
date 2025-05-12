'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  FaPaintBrush,
  FaLaptopCode,
  FaBullhorn,
  FaMobileAlt,
  FaRocket,
  FaCode,
  FaLightbulb,
  FaComments,
  FaCogs,
  FaCheckCircle,
  FaTools,
  FaArrowRight,
  FaBrain,
  FaLifeRing,
  FaWrench,
  FaServer,
} from 'react-icons/fa';
import { servicesData, servicesArray } from '@/data/services';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ReactNode> = {
  'ui-ux-design': <FaPaintBrush className="w-8 h-8" />,
  'web-design': <FaLaptopCode className="w-8 h-8" />,
  'landing-page-design': <FaBullhorn className="w-8 h-8" />,
  'mobile-app-design': <FaMobileAlt className="w-8 h-8" />,
  'web-development': <FaRocket className="w-8 h-8" />,
  'software-development': <FaCode className="w-8 h-8" />,
  'mvp-development': <FaLightbulb className="w-8 h-8" />,
  'chatbot-development': <FaComments className="w-8 h-8" />,
  'cms-development': <FaCogs className="w-8 h-8" />,
  'ai-integration': <FaBrain className="w-8 h-8" />,
  'ongoing-support': <FaLifeRing className="w-8 h-8" />,
  maintenance: <FaWrench className="w-8 h-8" />,
  hosting: <FaServer className="w-8 h-8" />,
};

interface ServiceCardProps {
  service: any;
  index: number;
  categoryColor: string;
  glowColor: string;
  bgClass: string;
}

const ServiceCard = ({ service, index, categoryColor, glowColor, bgClass }: ServiceCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Active state combines hover (desktop) or in-view (mobile)
  const isActive = isHovered || isInView;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      viewport={{ margin: '-100px', amount: 0.5 }}
      className={`group relative h-full rounded-2xl`}
      whileHover={{ scale: 1.02 }}
    >
      {/* Spotlight Effect Following Mouse */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${glowColor}, 0.15), transparent 40%)`,
        }}
      />

      {/* Mobile: Center Spotlight when in viewport */}
      <motion.div
        className="md:hidden absolute inset-0 rounded-2xl transition-opacity duration-300"
        animate={{ opacity: isInView ? 1 : 0 }}
        style={{
          background: `radial-gradient(400px circle at 50% 50%, rgba(${glowColor}, 0.15), transparent 40%)`,
        }}
      />

      {/* Glass Card */}
      <motion.div
        className="relative h-full backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border rounded-2xl p-8 overflow-hidden transition-all duration-300"
        style={{
          borderColor: isActive ? `rgba(${glowColor}, 0.6)` : 'rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* Animated Border Glow */}
        <motion.div
          className={`absolute -inset-[1px] rounded-2xl opacity-0 linear-gradient(135deg, rgba(${glowColor}, 0.3), transparent, rgba(${glowColor}, 0.3))`}
          animate={{
            opacity: isActive ? 0.5 : 0,
            backgroundPosition: isActive ? ['0% 0%', '100% 100%'] : '0% 0%',
          }}
          transition={{
            opacity: { duration: 0.3 },
            backgroundPosition: {
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            {/* Icon with Conic Gradient */}
            <motion.div
              className="relative mb-6 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon Container */}
              <div
                className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm flex items-center justify-center border border-white/30`}
              >
                <motion.span className={categoryColor}>{iconMap[service.id]}</motion.span>
              </div>
            </motion.div>

            {/* Title & Description */}
            <div className="mb-6">
              <Typography
                variant="h3"
                className="text-xl font-bold mb-3 text-white flex items-center gap-2"
              >
                {service.title}
              </Typography>

              <Typography variant="body1" className="text-gray-300 leading-relaxed">
                {service.fullDescription}
              </Typography>
            </div>

            {/* Features Grid */}
            <div className="space-y-3 mb-6">
              {service.features.slice(0, 4).map((feature: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + idx * 0.08 }}
                  className="flex items-center gap-3 group/item"
                >
                  <motion.div
                    className={`flex-shrink-0 w-6 h-6 rounded-lg ${categoryColor} bg-opacity-20 backdrop-blur-sm flex items-center justify-center`}
                  >
                    <FaCheckCircle className={`${categoryColor} w-3 h-3`} />
                  </motion.div>
                  <span className="text-sm text-gray-400 group-hover/item:text-white transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button with Shimmer Effect */}
          <Link href={`/resources/${service.id}`}>
            <Button
              variant="shimmer"
              glowColor={glowColor}
              colorClass={categoryColor}
              className="w-full px-6 py-3"
              rightIcon={<FaArrowRight />}
            >
              View Details
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ServicesDetailed() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('development');

  // Read tab from URL parameter on mount
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['development', 'design', 'support'].includes(tabParam)) {
      setActiveTab(tabParam);
      // Scroll to section after a small delay to ensure it's rendered
      setTimeout(() => {
        const element = document.getElementById('services-detailed');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [searchParams]);

  const activeCategory = useMemo(() => {
    return servicesArray.find(cat => cat.id === activeTab) || servicesData.development;
  }, [activeTab]);

  const tabs = [
    {
      id: 'development',
      label: 'Development',
      icon: FaRocket,
      color: servicesData.development.glowColor,
      bgClass: servicesData.development.bgClass,
    },
    {
      id: 'design',
      label: 'Design',
      icon: FaPaintBrush,
      color: servicesData.design.glowColor,
      bgClass: servicesData.design.bgClass,
    },
    {
      id: 'support',
      label: 'Support',
      icon: FaTools,
      color: servicesData.support.glowColor,
      bgClass: servicesData.support.bgClass,
    },
  ];

  // Update URL when tab changes
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    // Update URL without page reload
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', tabId);
    router.push(`/services?${params.toString()}`, { scroll: false });
  };

  return (
    <Section id="services-detailed" className="relative py-12 lg:py-32 overflow-hidden">
      {/* Dynamic Background Based on Active Tab */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 0%, rgba(${activeCategory.glowColor}, 0.15), transparent 70%), linear-gradient(180deg, #000000 0%, #0a0a0a 100%)`,
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography
            variant="h1"
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-center"
          >
            Our Services
          </Typography>
          <Typography
            variant="body1"
            className="text-xl text-gray-400 max-w-3xl mx-auto text-center"
          >
            Comprehensive solutions designed to transform your digital presence and drive business
            growth
          </Typography>
        </motion.div>

        {/* Tab Navigation - Desktop Only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden md:flex justify-center mb-16"
        >
          <div className="grid grid-cols-3 gap-2 p-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={cn(
                    'relative px-8 py-4 rounded-xl font-medium transition-all duration-300 border-2',
                    isActive && 'bg-gradient-to-br from-white/20 to-white/10'
                  )}
                  whileHover={{
                    scale: 1.02,
                    borderColor: isActive ? undefined : `rgba(${tab.color}, 0.3)`,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    borderColor: isActive ? `rgba(${tab.color}, 0.6)` : 'transparent',
                  }}
                >
                  {/* Content */}
                  <span className="relative z-10 flex items-center justify-center gap-3 text-white">
                    <Icon
                      className="w-5 h-5 transition-colors duration-300 flex-shrink-0"
                      style={{ color: isActive ? `rgb(${tab.color})` : 'white' }}
                    />
                    <span className="whitespace-nowrap">{tab.label}</span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Desktop: Services Grid with Tab Content */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-12">
                <motion.div
                  className={`w-3 h-16 ${activeCategory.bgClass} rounded-full`}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                <div>
                  <Typography
                    variant="h2"
                    className="text-4xl md:text-5xl font-bold text-white mb-2"
                  >
                    {activeCategory.title}
                  </Typography>
                  <Typography variant="body1" className="text-xl text-gray-400">
                    {activeCategory.description}
                  </Typography>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeCategory.services.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                    categoryColor={activeCategory.colorClass}
                    glowColor={activeCategory.glowColor}
                    bgClass={activeCategory.bgClass}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: All Categories with Horizontal Scroll */}
        <div className="md:hidden space-y-12">
          {servicesArray.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 px-4">
                <motion.div
                  className={`w-2 h-12 ${category.bgClass} rounded-full`}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                <div>
                  <Typography variant="h2" className="text-3xl font-bold text-white mb-1">
                    {category.title}
                  </Typography>
                  <Typography variant="body1" className="text-base text-gray-400">
                    {category.description}
                  </Typography>
                </div>
              </div>

              {/* Horizontal Scrolling Cards */}
              <div className="relative">
                <div className="overflow-x-auto scrollbar-mobile pb-4">
                  <div className="flex gap-4">
                    {category.services.map((service, index) => (
                      <div key={service.id} className="flex-shrink-0 w-[75vw] max-w-[320px]">
                        <ServiceCard
                          service={service}
                          index={index}
                          categoryColor={category.colorClass}
                          glowColor={category.glowColor}
                          bgClass={category.bgClass}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Typography variant="h3" className="text-2xl font-bold text-white mb-4 text-center ">
            Ready to get started?
          </Typography>
          <Typography variant="body1" className="text-gray-400 mb-8 text-center ">
            Let's discuss how we can help bring your project to life
          </Typography>
          <Link href="/contacts">
            <Button variant="primary" size="lg">
              Schedule a Consultation
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
