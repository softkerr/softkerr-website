'use client';

import { m } from '@/lib/motion';

import Link from '../ui/Link';
import { Logo } from '../Logo';
import { Typography } from '../ui';

const footerLinks = {
  Services: [
    { name: 'Web Development', href: '/services/?tab=development' },
    { name: 'UI/UX Design', href: '/services/?tab=design' },
    { name: 'Support', href: '/services/?tab=support' },
  ],
  Company: [
    { name: 'Our Team', href: '/dedicated-team#team-members' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contacts', href: '/contacts' },
  ],
  Resources: [
    { name: 'Blog', href: '/resources' },
    { name: 'Case Studies', href: '/projects' },
    { name: 'Pricing', href: '/pricing' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/softkerr/', icon: 'in' },
  { name: 'GitHub', href: 'https://github.com/softkerr', icon: 'gh' },
];

export default function Footer() {
  return (
    <footer className="bg-background text-text-primary">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="text-brand-gold w-10 h-10" />
              <div className="text-xl lg:text-2xl font-semibold leading-tight text-brand-gold font-orbitron font-black tracking-wide">
                SoftKerr
              </div>
            </Link>

            <p className="text-text-secondary mb-6">
              We're a creative digital agency that helps startups and enterprises build exceptional
              web experiences that drive results and inspire users.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <m.a
                  key={social.name}
                  href={social.href}
                  className="w-11 h-11 bg-background-secondary rounded-lg flex items-center justify-center text-text-muted hover:bg-accent-blue hover:text-text-primary transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </m.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="grid-span-1 lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-text-primary transition-colors duration-200 md:py-1 min-h-[32px]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-subtle">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-muted text-sm">© 2025 SoftKerr. All rights reserved.</p>

            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-use"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
