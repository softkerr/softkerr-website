import type { Metadata } from 'next';

/**
 * SEO Metadata Configuration
 * Best practices for Google Search visibility
 */

// Base URL - Update this with your production domain
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://softkerr.com';

// Organization info for structured data
export const organizationInfo = {
  name: 'SoftKerr',
  legalName: 'SoftKerr Digital Solutions',
  foundingDate: '2020',
  url: baseUrl,
  logo: `${baseUrl}/logo.svg`,
  email: 'contact@softkerr.com',
  telephone: '+1-555-SOFTKERR',
  address: {
    streetAddress: '123 Tech Boulevard',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94105',
    addressCountry: 'US',
  },
  sameAs: [
    'https://twitter.com/softkerr',
    'https://linkedin.com/company/softkerr',
    'https://github.com/softkerr',
  ],
};

// Default metadata that applies to all pages
export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'SoftKerr - Award-Winning Web Development Agency | Custom Software Solutions',
    template: '%s | SoftKerr',
  },
  description:
    'SoftKerr is an award-winning digital agency specializing in custom web development, UI/UX design, and enterprise software solutions. Transform your business with cutting-edge technology. 5+ years of excellence.',
  keywords: [
    // Primary keywords
    'web development agency',
    'custom software development',
    'ui/ux design services',
    'enterprise web solutions',
    'digital transformation',

    // Service keywords
    'react development',
    'next.js development',
    'full stack development',
    'mobile app development',
    'web application development',

    // Industry keywords
    'software consulting',
    'agile development',
    'cloud solutions',
    'API development',
    'SaaS development',

    // Location keywords (update as needed)
    'web development company',
    'software agency',
    'tech consulting firm',
  ],
  authors: [{ name: 'SoftKerr Team', url: baseUrl }],
  creator: 'SoftKerr',
  publisher: 'SoftKerr',

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'SoftKerr',
    title: 'SoftKerr - Award-Winning Web Development Agency',
    description:
      'Transform your business with custom web development, UI/UX design, and enterprise software solutions. 5+ years of excellence delivering cutting-edge digital experiences.',
    images: [
      {
        url: `${baseUrl}/og-image.png`, // Create this image: 1200x630px
        width: 1200,
        height: 630,
        alt: 'SoftKerr - Web Development Agency',
        type: 'image/png',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@softkerr',
    creator: '@softkerr',
    title: 'SoftKerr - Award-Winning Web Development Agency',
    description:
      'Transform your business with custom web development, UI/UX design, and enterprise software solutions. 5+ years of excellence.',
    images: [`${baseUrl}/twitter-image.png`], // Create this image: 1200x600px
  },

  // Icons and manifest
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',

  // Verification tags (add when you set up Google Search Console, etc.)
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },

  // Additional metadata
  category: 'technology',
  classification: 'Business',

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Alternate languages (add if you support multiple languages)
  alternates: {
    canonical: baseUrl,
    languages: {
      'en-US': baseUrl,
      // 'es-ES': `${baseUrl}/es`,
      // 'fr-FR': `${baseUrl}/fr`,
    },
  },
};

// Page-specific metadata configurations
export const pageMetadata = {
  home: {
    title: 'SoftKerr - Award-Winning Web Development Agency | Custom Software Solutions',
    description:
      "Transform your business with SoftKerr's award-winning web development services. Expert team delivering custom software, UI/UX design, and enterprise solutions. 5+ years of excellence. Get your free consultation today!",
    openGraph: {
      title: 'SoftKerr - Award-Winning Web Development Agency',
      description:
        'Transform your business with custom web development, UI/UX design, and enterprise software solutions. 5+ years of excellence.',
      url: baseUrl,
    },
  },

  services: {
    title: 'Our Services - Web Development, UI/UX Design & Software Consulting',
    description:
      'Comprehensive web development services: Custom software development, UI/UX design, React/Next.js development, API integration, cloud solutions, and digital transformation. Trusted by startups and enterprises.',
    keywords: [
      'web development services',
      'custom software development',
      'UI/UX design agency',
      'React development services',
      'Next.js development',
      'API development',
      'cloud solutions',
      'digital consulting',
    ],
    openGraph: {
      title: 'Our Services - Web Development & Software Consulting',
      description:
        'Comprehensive web development services including custom software, UI/UX design, React/Next.js development, and cloud solutions.',
      url: `${baseUrl}/services`,
    },
  },

  projects: {
    title: 'Our Projects - Case Studies & Success Stories | Portfolio',
    description:
      "Explore SoftKerr's portfolio of successful web development projects. Real results, proven expertise. See how we've helped startups and enterprises achieve their digital goals through innovative solutions.",
    keywords: [
      'web development portfolio',
      'case studies',
      'project showcase',
      'client success stories',
      'software development examples',
    ],
    openGraph: {
      title: 'Our Projects - Case Studies & Success Stories',
      description:
        'Explore our portfolio of successful web development projects. Real results, proven expertise.',
      url: `${baseUrl}/projects`,
    },
  },

  dedicatedTeam: {
    title: 'Dedicated Development Team - Hire Expert Developers | Staff Augmentation',
    description:
      'Hire a dedicated development team from SoftKerr. Expert developers, designers, and engineers working exclusively on your project. Flexible, scalable, and cost-effective. Scale your team in days, not months.',
    keywords: [
      'dedicated development team',
      'hire developers',
      'staff augmentation',
      'remote development team',
      'outsourcing services',
      'team extension',
    ],
    openGraph: {
      title: 'Dedicated Development Team - Hire Expert Developers',
      description:
        'Hire expert developers, designers, and engineers working exclusively on your project. Flexible and scalable.',
      url: `${baseUrl}/partnership`,
    },
  },

  pricing: {
    title: 'Pricing - Transparent Web Development Costs | Get a Quote',
    description:
      'Transparent pricing for web development services. No hidden fees. Custom quotes based on your project needs. Budget-friendly packages for startups to enterprise solutions. Get your free estimate today!',
    keywords: [
      'web development pricing',
      'software development cost',
      'development rates',
      'project quote',
      'web design pricing',
    ],
    openGraph: {
      title: 'Pricing - Transparent Web Development Costs',
      description:
        'Transparent pricing for web development services. Custom quotes based on your needs. No hidden fees.',
      url: `${baseUrl}/pricing`,
    },
  },

  careers: {
    title: 'Careers - Join Our Team of Expert Developers | Jobs at SoftKerr',
    description:
      "Join SoftKerr's team of expert developers and designers. Remote-friendly positions, competitive salary, growth opportunities. We're hiring talented engineers passionate about building exceptional digital experiences.",
    keywords: [
      'web developer jobs',
      'software engineer careers',
      'remote developer jobs',
      'UI/UX designer jobs',
      'tech jobs',
      'engineering careers',
    ],
    openGraph: {
      title: 'Careers - Join Our Team of Expert Developers',
      description:
        'Join our team of expert developers and designers. Remote-friendly, competitive salary, growth opportunities.',
      url: `${baseUrl}/careers`,
    },
  },

  resources: {
    title: 'Resources - Web Development Guides, Tutorials & Best Practices',
    description:
      'Expert web development resources, tutorials, and guides. Learn best practices for React, Next.js, UI/UX design, and modern web technologies. Free knowledge base from industry experts.',
    keywords: [
      'web development tutorials',
      'React guides',
      'Next.js tutorials',
      'UI/UX best practices',
      'programming resources',
      'tech blog',
    ],
    openGraph: {
      title: 'Resources - Web Development Guides & Tutorials',
      description:
        'Expert web development resources, tutorials, and best practices. Learn from industry experts.',
      url: `${baseUrl}/resources`,
    },
  },

  contacts: {
    title: "Contact Us - Get Your Free Consultation | Let's Build Together",
    description:
      "Contact SoftKerr for a free consultation. Discuss your project with our experts. Fast response time, no obligations. Email, phone, or schedule a call. Let's transform your business together!",
    keywords: [
      'contact web development agency',
      'free consultation',
      'get a quote',
      'project inquiry',
      'software development contact',
    ],
    openGraph: {
      title: 'Contact Us - Get Your Free Consultation',
      description:
        "Contact us for a free consultation. Fast response, no obligations. Let's build something great together!",
      url: `${baseUrl}/contacts`,
    },
  },
};

/**
 * Generate JSON-LD structured data for better SEO
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organizationInfo.name,
    legalName: organizationInfo.legalName,
    url: organizationInfo.url,
    logo: organizationInfo.logo,
    foundingDate: organizationInfo.foundingDate,
    email: organizationInfo.email,
    telephone: organizationInfo.telephone,
    address: {
      '@type': 'PostalAddress',
      ...organizationInfo.address,
    },
    sameAs: organizationInfo.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: organizationInfo.telephone,
      contactType: 'Customer Service',
      email: organizationInfo.email,
      availableLanguage: ['English'],
    },
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: organizationInfo.name,
    url: organizationInfo.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${organizationInfo.url}/resources?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
