// Metadata mapping for resources to enable category filtering and styling
export interface ResourceMetadata {
  category: 'design' | 'development' | 'support';
  categoryTitle: string;
  colorClass: string;
  bgClass: string;
  glowColor: string;
  readTime: string;
  date: string;
  image: string; // Unsplash image URL
}

export const resourcesMeta: Record<string, ResourceMetadata> = {
  // Design Services
  'ui-ux-design': {
    category: 'design',
    categoryTitle: 'Design',
    colorClass: 'text-brand-violet',
    bgClass: 'bg-brand-violet',
    glowColor: '139, 92, 246',
    readTime: '8 min read',
    date: '2025-04-15',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80', // UX design workspace
  },
  'web-design': {
    category: 'design',
    categoryTitle: 'Design',
    colorClass: 'text-brand-violet',
    bgClass: 'bg-brand-violet',
    glowColor: '139, 92, 246',
    readTime: '7 min read',
    date: '2025-04-18',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80', // Web design mockups
  },
  'landing-page-design': {
    category: 'design',
    categoryTitle: 'Design',
    colorClass: 'text-brand-violet',
    bgClass: 'bg-brand-violet',
    glowColor: '139, 92, 246',
    readTime: '9 min read',
    date: '2025-02-20',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80', // Landing page analytics
  },
  'mobile-app-design': {
    category: 'design',
    categoryTitle: 'Design',
    colorClass: 'text-brand-violet',
    bgClass: 'bg-brand-violet',
    glowColor: '139, 92, 246',
    readTime: '8 min read',
    date: '2025-01-22',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80', // Mobile app screens
  },

  // Development Services
  'web-development': {
    category: 'development',
    categoryTitle: 'Development',
    colorClass: 'text-brand-gold',
    bgClass: 'bg-brand-gold',
    glowColor: '240, 185, 11',
    readTime: '10 min read',
    date: '2025-06-25',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80', // Code on screen
  },
  'software-development': {
    category: 'development',
    categoryTitle: 'Development',
    colorClass: 'text-brand-gold',
    bgClass: 'bg-brand-gold',
    glowColor: '240, 185, 11',
    readTime: '9 min read',
    date: '2025-07-28',
    image:
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop&q=80', // Coding workspace
  },
  'mvp-development': {
    category: 'development',
    categoryTitle: 'Development',
    colorClass: 'text-brand-gold',
    bgClass: 'bg-brand-gold',
    glowColor: '240, 185, 11',
    readTime: '8 min read',
    date: '2025-03-01',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80', // Startup planning
  },
  'chatbot-development': {
    category: 'development',
    categoryTitle: 'Development',
    colorClass: 'text-brand-gold',
    bgClass: 'bg-brand-gold',
    glowColor: '240, 185, 11',
    readTime: '8 min read',
    date: '2025-03-05',
    image:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=80', // AI/chatbot concept
  },
  'cms-development': {
    category: 'development',
    categoryTitle: 'Development',
    colorClass: 'text-brand-gold',
    bgClass: 'bg-brand-gold',
    glowColor: '240, 185, 11',
    readTime: '9 min read',
    date: '2025-04-08',
    image:
      'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&auto=format&fit=crop&q=80', // Dashboard/CMS interface
  },
  'ai-integration': {
    category: 'development',
    categoryTitle: 'Development',
    colorClass: 'text-brand-gold',
    bgClass: 'bg-brand-gold',
    glowColor: '240, 185, 11',
    readTime: '10 min read',
    date: '2025-06-10',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80', // AI technology
  },

  // Support Services
  'ongoing-support': {
    category: 'support',
    categoryTitle: 'Support & Maintenance',
    colorClass: 'text-brand-blue',
    bgClass: 'bg-brand-blue',
    glowColor: '37, 99, 235',
    readTime: '7 min read',
    date: '2025-06-12',
    image:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=80', // Support workspace
  },
  maintenance: {
    category: 'support',
    categoryTitle: 'Support & Maintenance',
    colorClass: 'text-brand-blue',
    bgClass: 'bg-brand-blue',
    glowColor: '37, 99, 235',
    readTime: '6 min read',
    date: '2025-02-14',
    image:
      'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80', // Server maintenance
  },
  hosting: {
    category: 'support',
    categoryTitle: 'Support & Maintenance',
    colorClass: 'text-brand-blue',
    bgClass: 'bg-brand-blue',
    glowColor: '37, 99, 235',
    readTime: '8 min read',
    date: '2025-05-16',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80', // Server room/hosting
  },
};
