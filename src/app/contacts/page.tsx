import type { Metadata } from 'next';
import ContactFormHero from '@/components/sections/contacts/ContactFormHero';
import QuickContactInfo from '@/components/sections/contacts/QuickContactInfo';
import FAQSection from '@/components/sections/FAQ';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata.contacts;

export default function ContactsPage() {
  return (
    <>
      <ContactFormHero />
      <QuickContactInfo />
      <FAQSection page="contacts" />
    </>
  );
}
