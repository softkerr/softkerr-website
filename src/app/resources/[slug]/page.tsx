import { notFound } from 'next/navigation';
import { resources } from '@/data/resources';
import ResourcePageClient from './ResourcePageClient';

// Template type definition
interface PageTemplate {
  title?: string;
  description?: string;
  desc?: string;
  content?: Array<{
    title?: string;
    description?: string;
    listTitle?: string;
    list?: (string | React.ReactNode)[];
    listFooter?: string;
  }>;
  footer?: string;
  lastUpdated?: string;
}

// Map of available pages (combine policy pages and service resources)
const pages: Record<string, PageTemplate> = resources;

// Generate static params for all available pages
export function generateStaticParams() {
  return Object.keys(pages).map(slug => ({
    slug,
  }));
}

export default function ResourcePage({ params }: { params: { slug: string } }) {
  const pageData = pages[params.slug];

  if (!pageData) {
    notFound();
  }

  return <ResourcePageClient pageData={pageData} slug={params.slug} />;
}
