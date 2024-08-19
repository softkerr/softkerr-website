'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from '../ui/Link';
import { Logo } from '../Logo';
import { Typography } from '../ui';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services/' },
  { name: 'Projects', href: '/projects/' },
  { name: 'Dedicated Team', href: '/dedicated-team/' },
  { name: 'Resources', href: '/resources/' },
  { name: 'Pricing', href: '/pricing/' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md shadow-lg "
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <Logo className="text-brand-gold w-12 h-12" />
              <Typography
                variant="h4"
                className="text-brand-gold font-orbitron font-black tracking-wide"
              >
                SoftKerr
              </Typography>
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-accent-yellow'
                      : 'text-text-secondary hover:text-accent-yellow'
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-yellow"
                      layoutId="activeTab"
                      initial={false}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block ml-4">
              {/* Variant 2: Glassmorphic Button with Orbiting Dots */}
              <Link
                href="/contacts"
                className="group relative inline-flex items-center px-7 py-2 font-semibold text-text-primary bg-background-secondary/60 backdrop-blur-md rounded-2xl shadow-xl border border-brand-gold/60 hover:border-brand-gold transition-all duration-300 overflow-hidden"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                }}
              >
                <span className="relative z-10 flex items-center gap-4">
                  <span className="drop-shadow-lg">Contact Us</span>
                  {/* <AnimatedLogo variant="pulse" className="text-brand-gold w-8 h-8" /> */}
                </span>
                {/* Glass shine */}
                <span className="absolute left-0 top-0 w-full h-full pointer-events-none">
                  <span className="absolute left-[-60%] top-0 w-1/2 h-full bg-gradient-to-r from-brand-blue/0 via-brand-blue/60 to-brand-blue/0 opacity-60 animate-shine3d" />
                </span>
                <style jsx>{`
                  @keyframes shine3d {
                    0% {
                      left: -60%;
                    }
                    100% {
                      left: 120%;
                    }
                  }
                  .animate-shine3d {
                    animation: shine3d 2.5s linear infinite;
                  }
                `}</style>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative p-3 rounded-xl bg-background-secondary/50 backdrop-blur-md border border-brand-gold/30 hover:border-brand-gold/60 transition-all duration-300 group z-[70]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <motion.div
                animate={isMobileMenuOpen ? 'open' : 'closed'}
                className="w-5 h-5 flex flex-col justify-center items-center relative"
              >
                <motion.span
                  className="absolute w-5 h-0.5 bg-brand-gold rounded-full"
                  variants={{
                    closed: { rotate: 0, y: -4, opacity: 1 },
                    open: { rotate: 45, y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
                <motion.span
                  className="absolute w-5 h-0.5 bg-brand-gold rounded-full"
                  variants={{
                    closed: { opacity: 1, scale: 1 },
                    open: { opacity: 0, scale: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute w-5 h-0.5 bg-brand-gold rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 4, opacity: 1 },
                    open: { rotate: -45, y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              </motion.div>

              {/* Glow effect on hover */}
              <span className="absolute inset-0 rounded-xl bg-brand-gold/0 group-hover:bg-brand-gold/10 transition-colors duration-300" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu - Outside header */}
      <motion.div
        className="lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-xl z-[60]"
        initial={false}
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, x: 0, pointerEvents: 'auto' },
          closed: { opacity: 0, x: '100%', pointerEvents: 'none' },
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/5 via-transparent to-brand-gold/5" />

        <div className="relative h-full flex flex-col justify-between p-8 overflow-y-auto">
          {/* Navigation Links */}
          <div className="space-y-6 pt-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: isMobileMenuOpen ? index * 0.1 : 0 }}
              >
                <Link
                  href={item.href}
                  className={`block text-2xl font-semibold transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-brand-gold'
                      : 'text-text-secondary hover:text-brand-gold'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: isMobileMenuOpen ? 0.6 : 0 }}
            className="pb-8"
          >
            <Link
              href="/contacts"
              className="block w-full text-center px-8 py-4 font-semibold text-text-primary bg-brand-gold rounded-2xl hover:bg-brand-gold/90 transition-all duration-300 shadow-lg shadow-brand-gold/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
