export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  github?: string;
  email?: string;
}
export interface TeamMember {
  name: string;
  position: string;
  department: string;
  bio: string;
  image: string;
  skills: string[];
  social: SocialLinks;
  color: string;
  borderColor: string;
  glowColor: string;
}
export const teamMembers: TeamMember[] = [
  {
    name: 'Mariia Lominska',
    position: 'Account Executive',
    department: 'Sales',
    bio: 'Helping businesses to thrive and loving it!',
    image: '/avatars/marialominska.jpeg',
    skills: ['SMM', 'Email Marketing', 'Content Management'],
    social: {
      linkedin: 'https://www.linkedin.com/in/mariia-lominska/',
      email: 'mariia-lominska@softkerr.com',
    },
    color: 'text-brand-violet',
    borderColor: 'border-brand-violet/30',
    glowColor: 'rgba(139, 92, 246, 0.3)',
  },
  {
    name: 'Stas Bakryu',
    position: 'Product Manager',
    department: 'Development',
    bio: 'Strategic thinker driving product vision and ensuring successful delivery for global clients.',
    image: '/avatars/stasbakryu.jpeg',
    skills: ['Strategic Roadmaps', 'Product Development', 'Full-Stack Development'],
    social: {
      linkedin: 'https://www.linkedin.com/in/stas-bakryu-2b59a416b/',
      github: 'https://github.com/Bakryu',
      email: 'stasbakryu@gmail.com',
    },
    color: 'text-brand-pink',
    borderColor: 'border-brand-pink/30',
    glowColor: 'rgba(236, 72, 153, 0.3)',
  },
  {
    name: 'Olga Melnychuk',
    position: 'Ui/Ux Design Lead / Head of Product Design',
    department: 'Design',
    bio: 'Creative leader passionate about crafting beautiful, user-centered digital experiences.',
    image: '/avatars/olgamelnichuk.jpeg',
    skills: ['UI/UX', 'Figma', 'Design Systems'],
    social: {
      linkedin: 'https://www.linkedin.com/in/olga-melnychuk-744a3111a/',
      email: 'olga-melnychuk@softkerr.com',
    },
    color: 'text-brand-cyan',
    borderColor: 'border-brand-cyan/30',
    glowColor: 'rgba(6, 182, 212, 0.3)',
  },
  {
    name: 'Kateryna Derksen',
    position: 'Mobile Development Lead',
    department: 'Development',
    bio: 'Building high-performance native and cross-platform mobile apps for millions of users.',
    image: '/avatars/katerin.jpeg',
    skills: ['React Native', 'iOS', 'Android'],
    social: {
      linkedin: 'https://www.linkedin.com/in/kateryna-derksen/',
      email: 'kateryna-derksen@softkerr.com',
    },
    color: 'text-brand-gold',
    borderColor: 'border-brand-gold/30',
    glowColor: 'rgba(240, 185, 11, 0.3)',
  },
  {
    name: 'Roman Vynohradov',
    position: 'Lead Full-Stack Developer',
    department: 'Development',
    bio: 'Expert in building scalable web applications with React, Node.js, and cloud infrastructure.',
    image: '/avatars/roman.jpeg',
    skills: ['React', 'Node.js', 'AWS'],
    social: {
      linkedin: 'https://www.linkedin.com/in/roman-vynohradov-7b696818a/',
      github: 'https://github.com/RomanVynohradov',
      email: 'roman-vynohradov@softkerr.com',
    },
    color: 'text-brand-violet',
    borderColor: 'border-brand-violet/30',
    glowColor: 'rgba(139, 92, 246, 0.3)',
  },
  {
    name: 'Oleksandra Vlasyuk',
    position: 'HRM',
    department: 'HR',
    bio: 'A full-cycle IT recruitment process managing, participating in the implementation of all HR policies and procedures.',
    image: '/avatars/oleksandra.jpeg',
    skills: ['HR Consulting', 'Interviews', 'Google Workspace'],
    social: {
      linkedin: 'https://www.linkedin.com/in/oleksandravlasiuk/',
      email: 'oleksandravlasiuk@softkerr.com',
    },
    color: 'text-brand-gold',
    borderColor: 'border-brand-gold/30',
    glowColor: 'rgba(240, 185, 11, 0.3)',
  },
];
