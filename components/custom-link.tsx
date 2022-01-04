import React from 'react';
import { Link } from '@chakra-ui/react';
import { useTheme } from '@/context/theme-context';

export const CustomLink: React.FC<{ href: string }> = ({ href, children }) => {
  const { color } = useTheme();
  return (
    <Link href={href} isExternal color={color} _hover={{ textDecoration: 'none' }}>
      {children}
    </Link>
  );
};

export default CustomLink;
