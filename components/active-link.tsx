import React from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import { Button } from '@chakra-ui/react';
import { colors } from '@/constants';

export const ActiveLink: React.FC<React.PropsWithChildren<LinkProps>> = ({
  href,
  children,
  ...rest
}) => {
  const { asPath } = useRouter();
  const isActive = asPath === href;
  return (
    <Link href={href} passHref {...rest}>
      <Button
        fontSize={{ base: 'sm', xl: 'md' }}
        fontWeight={isActive ? 'bold' : 'normal'}
        color={isActive ? colors.blue : colors.black}
        variant="ghost"
        bg={isActive ? colors.white : 'inherit'}
        borderRadius="8"
      >
        {children}
      </Button>
    </Link>
  );
};

export default ActiveLink;
