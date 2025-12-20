'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Typography from '@/components/ui/Typography';
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
  FaMapMarkerAlt,
  FaClock,
  FaCheck,
  FaGlobeEurope,
} from 'react-icons/fa';

const contactMethods = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'softkerr@gmail.com',
    action: 'copy',
    link: 'mailto:softkerr@gmail.com',
    color: 'brand-gold',
    bgGradient: 'from-brand-gold/20 to-brand-gold/5',
    borderColor: 'border-brand-gold/30',
    hoverBorder: 'hover:border-brand-gold/50',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+380633415718',
    action: 'copy',
    link: 'tel:+380633415718',
    color: 'brand-violet',
    bgGradient: 'from-brand-violet/20 to-brand-violet/5',
    borderColor: 'border-brand-violet/30',
    hoverBorder: 'hover:border-brand-violet/50',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+380633415718',
    action: 'open',
    link: 'https://wa.me/380633415718',
    color: 'green-500',
    bgGradient: 'from-green-500/20 to-green-500/5',
    borderColor: 'border-green-500/30',
    hoverBorder: 'hover:border-green-500/50',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/company/softkerr',
    action: 'open',
    link: 'https://www.linkedin.com/company/softkerr/',
    color: 'brand-cyan',
    bgGradient: 'from-brand-cyan/20 to-brand-cyan/5',
    borderColor: 'border-brand-cyan/30',
    hoverBorder: 'hover:border-brand-cyan/50',
  },
];

const officeLocations = [
  {
    icon: FaMapMarkerAlt,
    flag: '🇺🇦',
    title: 'Kyiv Office (Main HQ)',
    address: 'Volodymyrska St, 101, Kyiv, 01033, Ukraine',
    hours: 'Mon–Fri, 9:00 – 18:00 (EET)',
    timezone: 'UTC +2 / +3 (summer)',
    color: 'brand-gold',
  },
  {
    icon: FaGlobeEurope,
    flag: '🇨🇾',
    title: 'Cyprus Office (European Branch)',
    address: 'Arch. Makariou III Avenue, 155, Limassol, 3026, Cyprus',
    hours: 'Mon–Fri, 8:00 – 17:00 (EET)',
    timezone: 'UTC +2',
    color: 'brand-violet',
  },
];

export default function QuickContactInfo() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleAction = async (method: (typeof contactMethods)[0]) => {
    if (method.action === 'copy') {
      try {
        await navigator.clipboard.writeText(method.value);
        setCopiedItem(method.label);
        setTimeout(() => setCopiedItem(null), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    } else if (method.action === 'open') {
      window.open(method.link, '_blank');
    }
  };

  return (
    <Section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-transparent to-black/20">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Typography variant="h2" className="text-3xl md:text-4xl font-bold text-white mb-3">
            Get in{' '}
            <span className="bg-gradient-to-r from-brand-gold to-brand-violet bg-clip-text text-transparent">
              Touch
            </span>
          </Typography>
          <Typography variant="body2" className="text-gray-400">
            Multiple ways to connect with our team
          </Typography>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const isCopied = copiedItem === method.label;

            return (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleAction(method)}
                className={`
                  relative backdrop-blur-xl bg-gradient-to-br ${method.bgGradient}
                  border ${method.borderColor} ${method.hoverBorder}
                  rounded-xl p-6 cursor-pointer transition-colors group flex flex-col justify-between
                `}
              >
                {/* Icon */}
                <div>
                  <div
                    className={`
                    w-12 h-12 rounded-full bg-gradient-to-br ${method.bgGradient}
                    border ${method.borderColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform tranasition-duration-300
                    `}
                  >
                    <Icon className={`w-5 h-5 text-${method.color}`} />
                  </div>

                  {/* Label */}
                  <Typography variant="h3" className="text-white font-semibold mb-2">
                    {method.label}
                  </Typography>

                  {/* Value */}
                  <Typography variant="body2" className="text-gray-300 mb-3 break-words">
                    {method.value}
                  </Typography>
                </div>
                {/* Action Button/Indicator */}
                <div className="flex items-center gap-2">
                  {isCopied ? (
                    <>
                      <FaCheck className="w-3 h-3 text-green-400" />
                      <Typography variant="caption" className="text-green-400 text-xs">
                        Copied!
                      </Typography>
                    </>
                  ) : (
                    <Typography variant="caption" className={`text-${method.color} text-xs`}>
                      {method.action === 'copy' ? 'Click to copy' : 'Click to open'}
                    </Typography>
                  )}
                </div>

                {/* Hover Effect */}
              </motion.div>
            );
          })}
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {officeLocations.map((office, index) => {
            const Icon = office.icon;

            return (
              <motion.div
                key={office.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-2xl p-6 md:p-8 hover:border-brand-gold/30 transition-colors"
              >
                {/* Header with Flag and Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{office.flag}</span>
                  <div
                    className={`
                    w-10 h-10 rounded-full bg-${office.color}/20 border border-${office.color}/30
                    flex items-center justify-center
                  `}
                  >
                    <Icon className={`w-4 h-4 text-${office.color}`} />
                  </div>
                </div>

                {/* Office Title */}
                <Typography variant="h5" className="text-white font-bold mb-4">
                  {office.title}
                </Typography>

                {/* Address */}
                <div className="flex items-start gap-3 mb-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" />
                  <div>
                    <Typography
                      variant="caption"
                      className="text-gray-400 text-xs uppercase mb-1 block"
                    >
                      Address
                    </Typography>
                    <Typography variant="body2" className="text-gray-300">
                      {office.address}
                    </Typography>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3 mb-3">
                  <FaClock className="w-4 h-4 text-brand-violet mt-1 flex-shrink-0" />
                  <div>
                    <Typography
                      variant="caption"
                      className="text-gray-400 text-xs uppercase mb-1 block"
                    >
                      Working Hours
                    </Typography>
                    <Typography variant="body2" className="text-gray-300">
                      {office.hours}
                    </Typography>
                  </div>
                </div>

                {/* Timezone */}
                <div className="flex items-start gap-3">
                  <FaGlobeEurope className="w-4 h-4 text-brand-pink mt-1 flex-shrink-0" />
                  <div>
                    <Typography
                      variant="caption"
                      className="text-gray-400 text-xs uppercase mb-1 block"
                    >
                      Timezone
                    </Typography>
                    <Typography variant="body2" className="text-gray-300">
                      {office.timezone}
                    </Typography>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <Typography variant="caption" className="text-gray-500">
            💡 Prefer a different channel? We're flexible! Reach out however works best for you.
          </Typography>
        </motion.div>
      </Container>
    </Section>
  );
}
