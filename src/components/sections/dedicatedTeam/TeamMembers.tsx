'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Typography from '@/components/ui/Typography';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from '../../ui';

import { teamMembers, TeamMember, SocialLinks } from '@/data/teamMembers';

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const socialIcons: Record<keyof SocialLinks, React.ReactNode> = {
    linkedin: <FaLinkedin className="w-4 h-4" />,
    twitter: <FaTwitter className="w-4 h-4" />,
    github: <FaGithub className="w-4 h-4" />,
    email: <FaEnvelope className="w-4 h-4" />,
  };

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
        className={`relative h-full backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border ${member.borderColor} rounded-2xl overflow-hidden group`}
      >
        {/* Gradient Glow Effect on Hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${member.glowColor}, transparent 70%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Image Section */}
          <div className="relative h-64 overflow-hidden">
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#02021e] via-[#02021e]/50 to-transparent" />

            {/* Department Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className={`absolute top-4 left-4 px-3 py-1 rounded-full backdrop-blur-sm border ${member.borderColor} bg-black/40`}
            >
              <Typography variant="caption" className={`text-xs font-medium ${member.color}`}>
                {member.department}
              </Typography>
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Name & Position */}
            <Typography variant="h4" className="text-xl font-bold text-white mb-1">
              {member.name}
            </Typography>
            <Typography variant="body2" className={`font-medium mb-4 ${member.color}`}>
              {member.position}
            </Typography>

            {/* Bio */}
            <Typography variant="body2" className="text-gray-300 text-sm mb-4 leading-relaxed">
              {member.bio}
            </Typography>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {member.skills.map((skill, idx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-auto pt-4 border-t border-white/10">
              {Object.entries(member.social).map(([platform, url]) => (
                <motion.a
                  key={platform}
                  href={url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-200 hover:bg-white/10"
                  style={{
                    ['--hover-glow' as string]: member.glowColor,
                  }}
                  onMouseEnter={e => {
                    // Use the glowColor which already has the RGB values
                    const rgbColor = member.glowColor.match(/[\d.]+/g);
                    if (rgbColor) {
                      e.currentTarget.style.color = `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;
                      e.currentTarget.style.borderColor = `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '';
                    e.currentTarget.style.borderColor = '';
                  }}
                >
                  {socialIcons[platform as keyof SocialLinks]}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Corner Glow */}
        <motion.div
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
          style={{ background: member.glowColor }}
        />
        <motion.div
          className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
          style={{ background: member.glowColor }}
        />
      </div>
    </motion.div>
  );
};

export default function TeamMembers() {
  return (
    <Section id="team-members" className="relative py-12 lg:py-32 overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-violet/20 to-brand-pink/20 border border-brand-violet/30 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-violet animate-pulse" />
            <Typography variant="body2" className="text-brand-violet font-medium">
              Meet the Team
            </Typography>
          </motion.div>

          <Typography
            variant="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center"
          >
            Leadership & Key Members
          </Typography>

          <Typography
            variant="body1"
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center"
          >
            Get to know the talented individuals who lead our teams and drive innovation across all
            our projects.
          </Typography>
        </motion.div>

        {/* Team Members Grid - Desktop / Horizontal Scroll - Mobile */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden -mx-4 px-4 overflow-x-auto scrollbar-mobile">
          <div className="flex gap-4 pb-4">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="flex-shrink-0 w-[85vw] max-w-sm">
                <TeamMemberCard member={member} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Typography variant="body2" className="text-gray-400">
            Want to join our team?{' '}
            <Link
              href="/careers"
              className="text-brand-gold hover:text-brand-violet transition-colors underline"
            >
              View open positions
            </Link>
          </Typography>
        </motion.div>
      </Container>
    </Section>
  );
}
