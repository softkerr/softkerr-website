import { FC } from 'react';
import ProcessSteps from './ProcessSteps';
import { webDevSteps, webDevConfig } from '@/data/webDevelopment';

export const WebDevSteps: FC = () => {
  return (
    <ProcessSteps
      heading={webDevConfig.heading}
      subheading={webDevConfig.subheading}
      steps={webDevSteps}
    />
  );
};

export default WebDevSteps;
