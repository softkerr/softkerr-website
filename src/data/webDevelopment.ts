import { ProcessStep } from '@/components/sections/ProcessSteps';

export const webDevSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Initial Research',
    description: 'Understanding your business and target audience',
    points: [
      "Identify client's business goals and purposes of the website",
      'Determine the target audience',
      'Conduct competitive analysis',
    ],
  },
  {
    number: '02',
    title: 'Website Specification',
    description: 'Defining technical requirements and project scope',
    points: [
      'Identify required technical functionality',
      'Classify content types',
      'Create sitemap and architecture',
      'Define technical scope',
      'Document main site features and the scope in detail',
    ],
  },
  {
    number: '03',
    title: 'Design',
    description: 'Creating beautiful and functional user interfaces',
    points: [
      "Review client's brand standards",
      'Identify colors and fonts',
      'Design graphic elements',
      'Create homepage mockups',
      'Design sub-pages based on the home page approved by the customer',
    ],
  },
  {
    number: '04',
    title: 'Frontend and Backend Coding',
    description: 'Building the technical foundation of your website',
    points: [
      'Convert PSD to HTML and CSS',
      'Set up CMS',
      'Program any custom functionality, special features and interactivity',
      'Customize backend',
    ],
  },
  {
    number: '05',
    title: 'Testing and Deployment',
    description: 'Ensuring quality and launching your website',
    points: [
      'Populate the website pages with relevant content',
      'Test performance on different devices and browsers',
      'Track and correct bugs',
      'Upload website files to a hosting server',
      'Check site components on the live server',
      'Assign user roles and train client on CMS',
    ],
  },
  {
    number: '06',
    title: 'Support and Maintenance',
    description: 'Keeping your website secure, updated, and performing optimally',
    points: [
      'Monitor the site',
      'Fix any bugs or errors',
      'Update content',
      'Keep the software updated',
      'Create online marketing strategy',
    ],
  },
];

export const webDevConfig = {
  heading: 'Web Development Steps',
  subheading: 'to Perfect Website',
};
