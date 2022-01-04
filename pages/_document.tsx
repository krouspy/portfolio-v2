import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import { theme } from '@/config';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="/fonts/IBMPlexMono/IBMPlexMono-Regular.ttf" rel="stylesheet" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
