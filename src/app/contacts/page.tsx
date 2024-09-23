'use client';

import ContactFormHero from '@/components/sections/contacts/ContactFormHero';
import QuickContactInfo from '@/components/sections/contacts/QuickContactInfo';
import FAQSection from '@/components/sections/FAQ';

export default function ContactsPage() {
  return (
    <>
      <ContactFormHero />
      <QuickContactInfo />

      <FAQSection page="contacts" />
    </>
  );
}
