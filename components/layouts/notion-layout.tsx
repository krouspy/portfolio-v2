import React from 'react';
import { Box } from '@chakra-ui/react';
import { Head } from '@/components';

const NotionLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Head />
      <Box w="100%" maxW="100%" h="100%" minH="90vh" px={{ md: '5%' }}>
        {children}
      </Box>
    </div>
  );
};

export { NotionLayout };
