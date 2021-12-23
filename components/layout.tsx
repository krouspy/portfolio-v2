import React from 'react';
import Head from 'next/head';
import { Box, VStack } from '@chakra-ui/react';
import Navbar from './navbar';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Kenji LAU</title>
        <meta name="description" content="Kenji LAU's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack minH="100vh" maxW="100vw" fontFamily="IBMPlexMono" spacing="0" px="15%">
        <Box w="100%" maxW="100%" h="8vh" maxH="8vh">
          <Navbar />
        </Box>
        <Box w="100%" maxW="100%" h="100%" minH="92vh" px="5%" pb="5%">
          {children}
        </Box>
      </VStack>
    </div>
  );
};

export { Layout };
