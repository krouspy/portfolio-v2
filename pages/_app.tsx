import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from '@/context/theme-context';
import { MainLayout } from '@/components';
import { NextPageWithLayout } from '@/types';
import 'react-notion-x/src/styles.css';
import 'prismjs/themes/prism-okaidia.css';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? MainLayout;
  return (
    <ChakraProvider>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
