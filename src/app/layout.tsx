import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BookCallModalProvider } from '@/contexts/BookCallModalContext';
import BookCallModal from '@/components/BookCallModal';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'SoftKerr - We Build Web Experiences',
  description:
    'A creative digital agency helping startups and enterprises build exceptional web experiences that drive results and inspire users.',
  keywords: 'web development, ui/ux design, digital agency, startup, enterprise, web design',
  authors: [{ name: 'SoftKerr' }],
  openGraph: {
    title: 'SoftKerr - We Build Web Experiences',
    description:
      'A creative digital agency helping startups and enterprises build exceptional web experiences that drive results and inspire users.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoftKerr - We Build Web Experiences',
    description:
      'A creative digital agency helping startups and enterprises build exceptional web experiences that drive results and inspire users.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} `}>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        <BookCallModalProvider>
          <Header />
          <main className="pt-16 lg:pt-20 overflow-hidden">{children}</main>
          <Footer />
          <BookCallModal />
        </BookCallModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
