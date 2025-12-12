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
    image:
      'https://media.licdn.com/dms/image/v2/D4D03AQEPaJVUYEbl8Q/profile-displayphoto-crop_800_800/B4DZqbskeeKEAI-/0/1763548744369?e=1767225600&v=beta&t=_pFj3OtV87ryv0nzV4I2O9Km0_zC4OeQoVmjPw4czPQ',
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
    image: 'https://avatars.githubusercontent.com/u/42728716?v=4',
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
    image:
      'https://media.licdn.com/dms/image/v2/D4D03AQFdN5HMzvrzmQ/profile-displayphoto-shrink_400_400/B4DZam395qG8Ak-/0/1746556412132?e=1767225600&v=beta&t=13put4HSzgvq1NJyKrNmLO-f2JNVJbTajHx6XciHlNM',
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
    image:
      'https://media.licdn.com/dms/image/v2/D4E03AQH2G_1ZVDKsNQ/profile-displayphoto-shrink_400_400/B4EZP0yhLdHsAg-/0/1734978705256?e=1767225600&v=beta&t=enWKNYJuZ3AgOeXcQ-4CDwIGIHvciObEFVWCA-W6J5Q',
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
    image:
      'https://media.licdn.com/dms/image/v2/C4E03AQGEaax1Qr4Q6g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1651513962134?e=1767225600&v=beta&t=9UMwctA7YUAfi5q-4JGKUSwY_mHp-USNR5WQ9IeITaM',
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
    position: 'HRM Specialist',
    department: 'HR',
    bio: 'A full-cycle IT recruitment process managing; • participating in the implementation of all HR policies and procedures.',
    image:
      'https://media.licdn.com/dms/image/v2/D4E03AQEyFTK1mGTNPg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1673902202491?e=1767225600&v=beta&t=LhdXRYI4oY1Xrb4bFK_4F3CihBi5QkBEPVR4qFCSPKo',
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
