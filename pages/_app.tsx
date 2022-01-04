import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from '@/components';
import { ThemeProvider } from '@/context/theme-context';

function MyApp({ Component, pageProps }: AppProps) {
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
