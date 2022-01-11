import React from 'react';
import NextHead from 'next/head';

export const Head: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content="Kenji LAU's Portfolio" />
      <link rel="icon" href="/logo.svg" />
    </NextHead>
  );
};

Head.defaultProps = {
  title: 'Kenji LAU',
};

export default Head;
