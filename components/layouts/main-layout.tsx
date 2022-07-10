import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { Head, Navbar } from '@/components';

const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Head />
      <VStack
        minH="100vh"
        maxW="100vw"
        fontFamily="IBMPlexMono"
        spacing="0"
        px={{ base: '7%', lg: '15%' }}
      >
        <Box w="100%" maxW="100%" h="10vh" maxH="10vh">
          <Navbar />
        </Box>
        <Box w="100%" maxW="100%" h="100%" minH="90vh" px="1%" pt="5%" pb="5%">
          {children}
        </Box>
      </VStack>
    </div>
  );
};

export { MainLayout };
