'use client';

import { m as motion } from '@/lib/motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Typography from '@/components/ui/Typography';
import {
  FaCode,
  FaPalette,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaRocket,
  FaGlobe,
  FaClock,
  FaUsers,
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

interface TeamMember {
  role: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
  count: string;
  color: string;
  borderColor: string;
  iconBg: string;
  glowColor: string;
}

const teamMembers: TeamMember[] = [
  {
    role: 'Full-Stack Developers',
    description: 'Expert engineers building scalable web applications with modern frameworks',
    icon: <FaCode className="w-6 h-6" />,
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python'],
    count: '20+',
    color: 'text-brand-gold',
    borderColor: 'border-brand-gold/30',
    iconBg: 'from-brand-gold/20 to-brand-gold/5',
    glowColor: 'rgba(240, 185, 11, 0.3)',
  },
  {
    role: 'UI/UX Designers',
    description: 'Creative designers crafting beautiful, user-centered digital experiences',
    icon: <FaPalette className="w-6 h-6" />,
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
    count: '12+',
    color: 'text-brand-violet',
    borderColor: 'border-brand-violet/30',
    iconBg: 'from-brand-violet/20 to-brand-violet/5',
    glowColor: 'rgba(139, 92, 246, 0.3)',
  },
  {
    role: 'Mobile Developers',
    description: 'Native and cross-platform mobile app specialists for iOS and Android',
    icon: <FaMobile className="w-6 h-6" />,
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS/Android'],
    count: '15+',
    color: 'text-brand-pink',
    borderColor: 'border-brand-pink/30',
    iconBg: 'from-brand-pink/20 to-brand-pink/5',
    glowColor: 'rgba(236, 72, 153, 0.3)',
  },
  {
    role: 'DevOps Engineers',
    description: 'Infrastructure experts ensuring reliable, scalable cloud deployments',
    icon: <FaCloud className="w-6 h-6" />,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    count: '8+',
    color: 'text-brand-cyan',
    borderColor: 'border-brand-cyan/30',
    iconBg: 'from-brand-cyan/20 to-brand-cyan/5',
    glowColor: 'rgba(6, 182, 212, 0.3)',
  },
  {
    role: 'Backend Architects',
    description: 'Senior engineers designing robust, high-performance backend systems',
    icon: <FaDatabase className="w-6 h-6" />,
    skills: ['Microservices', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Redis'],
    count: '10+',
    color: 'text-brand-gold',
    borderColor: 'border-brand-gold/30',
    iconBg: 'from-brand-gold/20 to-brand-gold/5',
    glowColor: 'rgba(240, 185, 11, 0.3)',
  },
  {
    role: 'Product Managers',
    description: 'Strategic leaders driving product vision and delivery excellence',
    icon: <FaRocket className="w-6 h-6" />,
    skills: ['Agile', 'Product Strategy', 'Roadmapping', 'Stakeholder Management'],
    count: '6+',
    color: 'text-brand-violet',
    borderColor: 'border-brand-violet/30',
    iconBg: 'from-brand-violet/20 to-brand-violet/5',
    glowColor: 'rgba(139, 92, 246, 0.3)',
  },
];

const globalStats = [
  {
    icon: <FaGlobe className="w-6 h-6" />,
    value: '15+',
    label: 'Countries',
    color: 'text-brand-gold',
  },
  {
    icon: <FaClock className="w-6 h-6" />,
    value: '24/7',
    label: 'Coverage',
    color: 'text-brand-violet',
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    value: '70+',
    label: 'Team Members',
    color: 'text-brand-pink',
  },
];

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
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
        className={`relative h-full backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border ${member.borderColor} rounded-2xl p-6 overflow-hidden group`}
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
          {/* Icon and Count */}
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${member.iconBg} border ${member.borderColor} flex items-center justify-center ${member.color} shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {member.icon}
            </motion.div>
            <div className="text-right">
              <Typography variant="h3" className={`text-2xl font-bold ${member.color}`}>
                {member.count}
              </Typography>
              <Typography variant="caption" className="text-gray-500 text-xs">
                Experts
              </Typography>
            </div>
          </div>

          {/* Role */}
          <Typography variant="h5" className="text-lg font-bold text-white mb-2">
            {member.role}
          </Typography>

          {/* Description */}
          <Typography variant="body2" className="text-gray-300 mb-4 text-sm">
            {member.description}
          </Typography>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {member.skills.map((skill, idx) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                className="px-2 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Decorative Corner Glow */}
        <motion.div
          className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
          style={{ background: member.glowColor }}
        />
      </div>
    </motion.div>
  );
};

export default function OurTeamGlobal() {
  return (
    <Section className="relative py-12 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-gold/5 to-transparent" />

        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(240,185,11,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(240,185,11,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-gold/20 to-brand-violet/20 border border-brand-gold/30 backdrop-blur-sm mb-6"
          >
            <HiSparkles className="w-4 h-4 text-brand-gold" />
            <Typography variant="body2" className="text-brand-gold font-medium">
              World-Class Expertise
            </Typography>
          </motion.div>

          <Typography
            variant="h2"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Our Global Team
          </Typography>

          <Typography
            variant="body1"
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            A diverse team of 70+ expert professionals across 15+ countries, working around the
            clock to deliver exceptional results for global enterprises.
          </Typography>

          {/* Global Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            {globalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-xl p-6 hover:border-white/30 transition-colors"
              >
                <div className={`flex justify-center mb-3 ${stat.color}`}>{stat.icon}</div>
                <Typography variant="h3" className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  {stat.label}
                </Typography>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.role} member={member} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <Typography variant="h4" className="text-xl font-bold text-white mb-3">
              Need a Custom Team?
            </Typography>
            <Typography variant="body2" className="text-gray-300 mb-6">
              We can assemble a dedicated team tailored to your specific project requirements and
              technology stack.
            </Typography>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Build Your Team"
                className="px-6 py-3 bg-gradient-to-r from-brand-gold to-brand-violet rounded-lg text-white font-semibold shadow-lg hover:shadow-brand-gold/50 transition-shadow"
              >
                Build Your Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View Case Studies"
                className="px-6 py-3 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/5 transition-colors"
              >
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
