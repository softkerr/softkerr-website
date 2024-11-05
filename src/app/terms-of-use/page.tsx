import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { termsOfUse } from '@/data/termsOfUse';

export const metadata = {
  title: 'Terms of Use - SoftKerr',
  description: 'SoftKerr Terms of Use - Terms and conditions for using our website and services.',
};

export default function TermsOfUsePage() {
  return (
    <Section className="py-12 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-text-primary lg:text-5xl">
              {termsOfUse.title}
            </h1>
            <p className="text-sm text-text-secondary">{termsOfUse.lastUpdated}</p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {termsOfUse.content.map((section, index) => (
              <div key={index} className="space-y-4">
                {section.title && (
                  <h2 className="text-2xl font-semibold text-text-primary">{section.title}</h2>
                )}

                {section.listTitle && (
                  <p className="text-base leading-relaxed text-text-secondary">
                    {section.listTitle}
                  </p>
                )}

                {section.list && section.list.length > 0 && (
                  <ul className="ml-6 list-disc space-y-3">
                    {section.list.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-base leading-relaxed text-text-secondary">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.description && (
                  <div className="space-y-4">
                    {section.description.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-base leading-relaxed text-text-secondary">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-16 border-t border-border-subtle pt-8 text-center">
            <p className="text-sm text-text-muted">
              If you have any questions about these Terms of Use, please contact us.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
