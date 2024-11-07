import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { cookiePolicy } from '@/data/cookiePolicy';

export const metadata = {
  title: 'Cookie Policy - SoftKerr',
  description:
    'SoftKerr Cookie Policy - Learn how we use cookies and similar technologies on our website.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <Section className="py-12 lg:py-32">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-text-primary lg:text-5xl">
                {cookiePolicy.title}
              </h1>
              <p className="text-sm text-text-secondary">{cookiePolicy.lastUpdated}</p>
            </div>

            {/* Description */}
            {cookiePolicy.desc && (
              <div className="mb-12">
                <p className="text-lg leading-relaxed text-text-secondary">{cookiePolicy.desc}</p>
              </div>
            )}

            {/* Content */}
            <div className="space-y-12">
              {cookiePolicy.content.map((section: any, index) => (
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
                      {section.list.map((item: any, itemIndex: number) => (
                        <li
                          key={itemIndex}
                          className="text-base leading-relaxed text-text-secondary"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.description && (
                    <div className="space-y-4 text-base leading-relaxed text-text-secondary">
                      {typeof section.description === 'string'
                        ? section.description
                            .split('\n\n')
                            .map((paragraph: string, pIndex: number) => (
                              <p key={pIndex}>{paragraph}</p>
                            ))
                        : section.description}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-16 border-t border-border-subtle pt-8 text-center">
              <p className="text-sm text-text-muted">
                If you have any questions about this Cookie Policy, please contact us.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
