import { desc } from 'framer-motion/client';
import Link from 'next/link';
import { list } from 'postcss';
import { title } from 'process';

export const cookiePolicy = {
  title: 'SoftKerr Cookie Policy',
  desc: 'At SoftKerr, we use cookies to enhance your user experience on our website. This Cookie Policy explains how we use cookies and other similar technologies to collect information about your use of our website and to provide a more personalized experience.',
  content: [
    {
      description:
        'In the European Economic Area (EEA) and the United Kingdom (UK), we set non-essential cookies (e.g., analytics and advertising) only with your consent collected via our cookie banner/consent management platform. You can grant, refuse, or withdraw consent at any time via the “Manage cookies” link in the site footer. Rejecting non-essential categories will not affect access to core site functions, though certain features may be limited.This Policy applies to cookies and similar technologies used on our Website. For how we process personal data, see our Privacy Policy.',
    },
    {
      title: 'What are Cookies?',
      description:
        'Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide a better user experience. Cookies enable websites to remember your preferences and settings, to analyze how you use the website, and to serve personalized content. “First-party” cookies are set by SoftKerr; “third-party” cookies are set by providers such as analytics, advertising, or CRM tools. Some cookies last only during your session (session cookies); others persist for a defined period (persistent cookies).',
    },
    {
      title: 'Types of Cookies We Use',
      listTitle: 'We use the following types of cookies on our website:',

      list: [
        'Necessary cookies: These cookies are essential for the website to function properly. They enable basic functions such as page navigation, security, and access to certain areas of the website. Without these cookies, the website cannot function properly.',
        'Analytics cookies: These cookies collect information about how you use our website, such as which pages you visit most often and whether you receive any error messages. This information helps us improve the performance of our website and provide a better user experience (e.g., Google Analytics 4, Microsoft Clarity, Crazy Egg).',
        'Functional cookies: These cookies remember your preferences and settings, such as language preferences and font size. They enable us to provide a more personalized experience and to remember your preferences for future visits.',
        'Advertising cookies: These cookies are used to deliver personalized advertisements to you based on your interests and browsing behavior. They enable us to serve relevant ads and measure the effectiveness of our advertising campaigns.',
      ],
      description:
        'We also use similar technologies (e.g., localStorage, sessionStorage, IndexedDB, pixels/beacons). Non-essential technologies are activated only after consent in the EEA/UK. Key providers: Google Analytics 4, Microsoft Clarity, Crazy Egg (analytics); Google Ads (advertising); HubSpot (forms/CRM).',
    },
    {
      title: 'Managing Cookies',
      listTitle:
        'You can control cookies through your browser settings and other tools. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, if you choose to disable cookies, some features of our website may not function properly. Your browser usually informs you how to refuse, delete or block cookies. You can find this information for some of the most commonly used browsers through the following links:',
      list: [
        <Link
          href="https://support.google.com/chrome/answer/95647"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Chrome
        </Link>,
        <Link
          href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mozilla Firefox
        </Link>,
        <Link
          href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple Safari
        </Link>,
        <Link
          href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies"
          target="_blank"
          rel="noopener noreferrer"
        >
          Microsoft Edge
        </Link>,
        <Link
          href="https://help.opera.com/en/latest/web-preferences/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Opera
        </Link>,
      ],
      description: `If you need help disabling cookies, please refer to the instructions provided by your browser. Additionally, you can find information on how to disable third-party cookies from Google Analytics through ad settings or by visiting
${(
  <Link href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
    https://adssettings.google.com.
  </Link>
)}

Necessary cookies are always active and cannot be switched off via the banner because they are essential for core functionality (security, load balancing, consent logging). You can change or withdraw your choices for non-essential categories at any time via the persistent “Manage cookies” link in the footer; we retain consent records for compliance. Our banner provides “Accept all”, “Reject all”, and granular category choices. Rejecting all non-essential categories will not affect access to core site functions, though some features may be limited.`,
    },
    {
      title: 'Opting Out of Personalized Ads',
      description:
        'When you visit our website, non-essential cookies and similar technologies may be used to measure campaigns and show more relevant ads. In the EEA/UK, these technologies are activated only after your consent via our cookie banner. You can opt out of or control personalized ads via the cookie banner: choose “Reject all” or switch off “Advertising” (and “Analytics,” if you wish); you can adjust your choices later via the “Manage cookies” link in the footer.',
    },
    {
      title: '‍Advertising & Remarketing',
      description:
        'We use advertising tags and pixels (e.g., Google Ads, Microsoft Advertising/Bing, Meta/Facebook, LinkedIn) to measure campaigns, build/serve audiences, and attribute conversions. These technologies may collect information such as page URLs and referrers, timestamp, cookie or device identifiers (e.g., _gcl_au, MUID, _fbp, bcookie), coarse IP-based location, and basic device/browser details. In the EEA/UK, these run only after you give consent via our cookie banner.',
    },
    {
      title: 'Third-Party Cookies',
      listTitle:
        'We use third-party service providers to help us analyze how you use our website. These providers may use cookies and other tracking technologies to collect information about your use of our website. We do not have access to or control over these third-party cookies. Please review their privacy and cookie policies for details:',
      list: [
        `Google Analytics 4 / Google Ads - 
        ${(
          <Link
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy policy;
          </Link>
        )}
        ${(
          <Link
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Technologies & ads;
          </Link>
        )}
        `,
        `Microsoft - 
        ${(
          <Link
            href="https://www.microsoft.com/lv-lv/privacy/privacystatement"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy policy;
          </Link>
        )}
        ${(
          <Link
            href="https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-cookies"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookies;
          </Link>
        )}
        `,
        `LinkedIn -
        ${(
          <Link
            href="https://ru.linkedin.com/legal/privacy-policy?"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy policy;
          </Link>
        )}
        ${(
          <Link
            href="https://ru.linkedin.com/legal/cookie-policy?"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookie Policy;
          </Link>
        )}
        `,
        `Meta -
        ${(
          <Link
            href="https://www.facebook.com/privacy/policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy policy;
          </Link>
        )}
        ${(
          <Link
            href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookie Policy;
          </Link>
        )}
        `,
      ],
    },
    {
      title: 'Updates to This Cookie Policy',
      description:
        'We may update this Cookie Policy from time to time in response to changing legal, technical, or business developments. If we make material changes (e.g., add new categories or providers), we will provide reasonable notice (banner/notice on the Website) and update the “Last updated” date below.',
    },
  ],
  lastUpdated: 'Last updated: September 20, 2025',
};
