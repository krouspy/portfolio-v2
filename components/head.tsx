import React from 'react';
import NextHead from 'next/head';

export const Head: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta name="author" content="Kenji LAU" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content="Kenji LAU" />
      <meta property="og:description" content="I'm a Blockchain & Fullstack Developer" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://kenjilau.xyz/preview.png" />

      <link rel="icon" href="/logo.svg" />
    </NextHead>
  );
};

Head.defaultProps = {
  title: 'Kenji LAU',
};

export default Head;
