import React from 'react';
import NextHead from 'next/head';

export const Head: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="author" content="Kenji LAU" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Kenji LAU's Portfolio" />
      <meta property="image" content="/preview.png" />
      <link rel="icon" href="/logo.svg" />
    </NextHead>
  );
};

Head.defaultProps = {
  title: 'Kenji LAU',
};

export default Head;
