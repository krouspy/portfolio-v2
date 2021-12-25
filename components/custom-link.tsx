import React from 'react';
import { Link } from '@chakra-ui/react';
import { colors } from '@/constants';

export const CustomLink: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <Link href={href} isExternal color={colors.blue} _hover={{ textDecoration: 'none' }}>
      {children}
    </Link>
  );
};

export default CustomLink;
