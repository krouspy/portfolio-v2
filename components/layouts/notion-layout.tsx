import React from 'react';
import { Box } from '@chakra-ui/react';
import { Head } from '@/components';

const NotionLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Head />
      <Box
        w="100vw"
        maxW={{ base: '95vw', md: '97vw', lg: '98vw', xl: '99vw' }}
        h="100%"
        minH="90vh"
        overflowX="hidden"
      >
        {children}
      </Box>
    </div>
  );
};

export { NotionLayout };
