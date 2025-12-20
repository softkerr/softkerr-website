import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import PricingContent from '@/components/sections/pricing/PricingContent';

// SEO metadata for pricing page
export const metadata: Metadata = pageMetadata.pricing;

export default function PricingPage() {
  return <PricingContent />;
}
