import { ReactNode, type ComponentType } from 'react';
import {
  FaAws,
  FaNodeJs,
  FaReact,
  FaUsers,
  FaBolt,
  FaLock,
  FaTooth,
  FaGlobeAmericas,
  FaStar,
  FaChartLine,
} from '@/components/icons';
import {
  SiRedux,
  SiMui,
  SiRedis,
  SiPostgresql,
  SiGatsby,
  SiGraphql,
  SiTailwindcss,
} from '@/components/icons';

// Project type definition
export type IconType = ComponentType<{ className?: string }>;

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  technologies: Array<{
    name: string;
    icon: ReactNode;
  }>;
  // For showcase display (simple string array)
  techStack?: string[];
  metrics: Array<{
    icon: IconType | string;
    value: string;
    label: string;
  }>;
  video?: {
    src?: string;
    type?: string;
    mobileSrc?: string;
    mobileType?: string;
    desktop?: string;
    mobile?: string;
    previewImage?: string;
  };
  challenge?: string;
  solution?: string;
  results?: string[];
  features?: Array<{
    title: string;
    description: string;
  }>;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  };
}

export const projects: Project[] = [
  {
    id: 'dreamhost-website',
    title: 'DreamHost Website',
    description:
      "Complete rebuild of DreamHost's main website, creating a modern, high-performance platform that drives customer acquisition and enhances user experience. Features optimized conversion funnels, advanced SEO, and seamless integration with their hosting infrastructure.",
    category: 'Web Development',
    image: '/projects/dreamhost-main.jpg',
    technologies: [
      { name: 'Gatsby.js', icon: <SiGatsby className="text-2xl text-brand-violet" /> },
      { name: 'GraphQL', icon: <SiGraphql className="text-2xl text-brand-blue" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-2xl text-brand-blue" /> },
      { name: 'AWS', icon: <FaAws className="text-2xl text-brand-gold" /> },
    ],
    techStack: ['Gatsby.js', 'Tailwind CSS', 'GraphQL'],
    metrics: [
      { icon: FaUsers, value: '50K+', label: 'New Customers/Month' },
      { icon: FaBolt, value: '95+', label: 'Performance Score' },
      { icon: FaChartLine, value: '200%', label: 'Conversion Increase' },
    ],
    video: {
      src: '/movies/dreamhost-website.mp4',
      type: 'video/mp4',
      mobileSrc: '/movies/dreamhost-website.mp4',
      mobileType: 'video/mp4',
      desktop: '/movies/dreamhost-website.mp4',
      mobile: '/movies/dreamhost-website.mp4',
      previewImage: '/movies/dreamhost-website-preview.webp',
    },
    challenge:
      "DreamHost's website needed a complete overhaul to improve conversion rates, enhance user experience, and achieve top performance scores. The existing site was slow, difficult to navigate, and not optimized for modern SEO practices.",
    solution:
      'We rebuilt the entire website using Next.js and TypeScript for optimal performance and maintainability. Tailwind CSS was used for consistent, responsive design. We implemented advanced SEO strategies, optimized conversion funnels, and integrated seamlessly with their hosting infrastructure. The site was deployed on Vercel for edge performance.',
    results: [
      'Attracted 50,000+ new customers per month',
      'Achieved 95+ performance score on Google Lighthouse',
      'Increased conversion rate by 200%',
      'Reduced bounce rate by 45%',
      'Improved organic search traffic by 180%',
      'Decreased page load time by 65%',
    ],
    features: [
      {
        title: 'Optimized Conversion Funnels',
        description: 'Strategically designed user flows that guide visitors to become customers.',
      },
      {
        title: 'Advanced SEO',
        description: 'Technical SEO implementation with structured data and meta optimization.',
      },
      {
        title: 'Performance Optimization',
        description:
          'Edge caching, image optimization, and lazy loading for lightning-fast speeds.',
      },
      {
        title: 'Seamless Integration',
        description:
          'Direct integration with hosting infrastructure for real-time account management.',
      },
    ],
    testimonial: {
      quote:
        "The new DreamHost website has been a game-changer for our business. We're seeing record numbers of new customers, and our conversion rates have skyrocketed. The team at SoftKerr delivered beyond our wildest expectations.",
      author: 'Brian Glassman',
      role: 'Director of SEO',
      company: 'DreamHost',
      avatar: '/avatars/brian-glasman-avatar.jpeg',
    },
  },
  {
    id: 'turkiyedental',
    title: 'TürkiyeDental',
    description:
      'A comprehensive dental tourism platform connecting international patients with top dental clinics in Turkey. Features include clinic discovery, treatment planning, appointment booking, and seamless coordination of medical travel services.',
    category: 'Healthcare',
    image: '/projects/turkiyedental.jpg',
    technologies: [
      { name: 'Next.js', icon: <FaReact className="text-2xl text-brand-blue" /> },
      { name: 'TypeScript', icon: <SiRedux className="text-2xl text-brand-violet" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-2xl text-brand-blue" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-2xl text-brand-violet" /> },
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    metrics: [
      { icon: FaTooth, value: '15K+', label: 'Treatments Booked' },
      { icon: FaGlobeAmericas, value: '70+', label: 'Countries' },
      { icon: FaStar, value: '4.9/5', label: 'Patient Rating' },
    ],
    video: {
      src: '/movies/türkiye-dental.mp4',
      type: 'video/mp4',
      mobileSrc: '/movies/türkiye-dental.mp4',
      mobileType: 'video/webm',
      desktop: '/movies/türkiye-dental.mp4',
      mobile: '/movies/türkiye-dental.mp4',
      previewImage: '/movies/türkiye-dental-preview.webp',
    },
    challenge:
      'TürkiyeDental needed a modern platform to bridge the gap between international patients seeking quality dental care and Turkish dental clinics. The challenge was to create a trustworthy, multilingual platform that simplifies the medical tourism journey from discovery to post-treatment follow-up.',
    solution:
      'We developed a comprehensive healthcare platform using Next.js and TypeScript for robust type safety and optimal performance. The platform features multilingual support, integrated payment processing with Stripe, real-time clinic availability, and secure patient data management. We implemented advanced search filters, virtual consultations, and treatment cost calculators.',
    results: [
      'Successfully facilitated 15,000+ dental treatments',
      'Connected patients from 50+ countries with verified clinics',
      'Achieved 4.9/5 patient satisfaction rating',
      'Reduced booking time by 70% compared to traditional methods',
      'Increased clinic partner revenue by 150%',
      'Processed over €5M in secure transactions',
    ],
    features: [
      {
        title: 'Smart Clinic Matching',
        description:
          'AI-powered matching system that connects patients with the best clinics based on treatment needs, budget, and preferences.',
      },
      {
        title: 'Virtual Consultations',
        description: 'Secure video consultation platform for initial assessments and follow-ups.',
      },
      {
        title: 'Treatment Planning',
        description:
          'Interactive treatment cost calculator with detailed breakdowns and financing options.',
      },
      {
        title: 'Travel Coordination',
        description:
          'Integrated services for flight booking, hotel accommodation, and airport transfers.',
      },
    ],
    testimonial: {
      quote:
        'SoftKerr built us an exceptional platform that has revolutionized how we connect with international patients. The user experience is seamless, and our booking rates have increased dramatically.',
      author: 'Dr. Mehmet Yılmaz',
      role: 'Medical Director',
      company: 'TürkiyeDental',
      avatar: '/avatars/mahmet-avatar.jpeg',
    },
  },

  {
    id: 'dreamhost-panel',
    title: 'DreamHost Panel',
    description:
      'A modern, intuitive control panel for DreamHost users to manage websites, domains, and hosting with ease. Features include one-click installs, advanced DNS management, and real-time resource monitoring.',
    category: 'Web Hosting',
    image: '/projects/dreamhost.jpg',
    technologies: [
      { name: 'React', icon: <FaReact className="text-2xl text-brand-blue" /> },
      { name: 'Redux', icon: <SiRedux className="text-2xl text-brand-violet" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-2xl text-brand-green" /> },
      { name: 'AWS', icon: <FaAws className="text-2xl text-brand-gold" /> },
      { name: 'MUI', icon: <SiMui className="text-2xl text-brand-blue" /> },
    ],
    techStack: ['React', 'Redux', 'Node.js', 'AWS'],
    metrics: [
      { icon: FaUsers, value: '2M+', label: 'Active Customers' },
      { icon: FaBolt, value: '1s', label: 'Avg. Response' },
      { icon: FaLock, value: '100%', label: 'SSL Coverage' },
    ],
    video: {
      src: 'https://dwagloaw4bttd.cloudfront.net/video/optimized/dashboard/dashboard.mp4',
      type: 'video/mp4',
      mobileSrc: 'https://dwagloaw4bttd.cloudfront.net/video/optimized/dashboard/dashboard.webm',
      mobileType: 'video/webm',
      desktop: 'https://dwagloaw4bttd.cloudfront.net/video/optimized/dashboard/dashboard.mp4',
      mobile: 'https://dwagloaw4bttd.cloudfront.net/video/optimized/dashboard/dashboard_small.mp4',
      previewImage: '/movies/dreamhost-panel-preview.webp',
    },
    challenge:
      'DreamHost needed to modernize their control panel to handle millions of users while maintaining blazing-fast performance and industry-leading uptime. The existing system was outdated, difficult to navigate, and lacked real-time monitoring capabilities.',
    solution:
      'We built a completely new control panel using React and Redux for state management, ensuring a responsive and intuitive user interface. The backend was powered by Node.js with AWS infrastructure for scalability. We implemented real-time resource monitoring, one-click installations, and advanced DNS management tools.',
    results: [
      'Increased user satisfaction by 45% within the first quarter',
      'Reduced average response time to under 1 second',
      'Achieved 99.99% uptime for over 2 million active customers',
      '100% SSL coverage across all hosted domains',
      'Decreased support tickets by 35% due to improved UX',
    ],
    features: [
      {
        title: 'One-Click Installs',
        description:
          'Install popular applications like WordPress, Joomla, and Drupal with a single click.',
      },
      {
        title: 'Advanced DNS Management',
        description:
          'Full control over DNS settings with an intuitive interface for managing records.',
      },
      {
        title: 'Real-Time Monitoring',
        description:
          'Track resource usage, uptime, and performance metrics in real-time dashboards.',
      },
      {
        title: 'Security Dashboard',
        description:
          'Comprehensive security overview with SSL certificate management and threat detection.',
      },
    ],
    testimonial: {
      quote:
        'The new DreamHost Panel has transformed how our customers interact with their hosting services. The intuitive design and powerful features have significantly reduced support requests while increasing customer satisfaction.',
      author: 'John H.',
      role: 'Customer Experience Manager',
      company: 'DreamHost',
      avatar: '/avatars/john-h-avatar.jpeg',
    },
  },
];

// Helper function to get featured projects (for showcase)
export const getFeaturedProjects = () => projects;

// Helper function to get project by ID
export const getProjectById = (id: string) => projects.find(p => p.id === id);

// Helper function to get all project IDs
export const getProjectIds = () => projects.map(p => p.id);
