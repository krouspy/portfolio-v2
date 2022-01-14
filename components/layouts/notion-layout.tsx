import React from 'react';
import { Head } from '@/components';

const NotionLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Head />
      {children}
    </div>
  );
};

export { NotionLayout };
