import Image from 'next/image';
import { motion } from 'framer-motion';
import { Typography, Section, ScrollReveal } from '@/components/ui';

// Trusted companies logos (using files from public/)
const trustedCompanies = [
  { name: 'DreamHost', src: '/DreamHost.svg', alt: 'DreamHost logo' },
  { name: 'GoDaddy', src: '/GoDaddy.svg', alt: 'GoDaddy logo' },
  { name: 'Heineken', src: '/Heineken.svg', alt: 'Heineken logo' },
  { name: 'DHL', src: '/DHL.svg', alt: 'DHL logo' },
  { name: 'Bayer', src: '/Bayer.svg', alt: 'Bayer logo' },
  { name: 'PROM', src: '/PROM.svg', alt: 'PROM logo' },
];

export default function TrustedCompanies() {
  return (
    <Section variant="muted" padding="lg">
      <ScrollReveal>
        <div className="relative border border-solid rounded-3xl border-text-secondary p-4 lg:p-12">
          <div className="absolute bg-background px-4 xl:px-6 top-0 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
            <Typography variant="body1" color="secondary" className="text-lg">
              Trusted by innovative companies
            </Typography>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {trustedCompanies.map((company, index) => (
              <motion.div
                key={company.name}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-12 flex items-center justify-center">
                  {/* Using next/image for optimized loading; SVGs will render fine */}
                  <Image
                    src={company.src}
                    alt={company.alt}
                    width={180}
                    height={64}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
