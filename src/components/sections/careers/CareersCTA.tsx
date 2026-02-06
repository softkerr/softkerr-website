'use client';

import { m as motion } from '@/lib/motion';
import { Container, Typography, Section } from '@/components/ui';
import { FaEnvelope, FaLinkedin } from '@/components/icons';

export default function CareersCTA() {
  return (
    <Section className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-violet/10 to-transparent" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-brand-violet/10 via-background-secondary/80 to-brand-gold/10 border border-brand-violet/30 text-center">
            <Typography variant="h2" className="mb-4 text-center">
              Interested in a Position?
            </Typography>

            <Typography
              variant="body1"
              color="secondary"
              className="mb-8 max-w-2xl mx-auto text-center"
            >
              If you're interested in any of our vacancies or would like to join our team, reach out
              to us via email or LinkedIn. We'd love to hear from you!
            </Typography>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:sales@softkerr.online"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-violet text-text-primary hover:bg-brand-violet/90 transition-all duration-300 font-medium"
              >
                <FaEnvelope className="text-xl" />
                <span>Email Us</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-violet/40 text-text-primary hover:border-brand-violet hover:bg-brand-violet/10 transition-all duration-300"
              >
                <FaLinkedin className="text-xl" />
                <span className="font-medium">Message on LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
