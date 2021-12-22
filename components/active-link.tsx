import React from 'react';
import { useRouter } from 'next/router';
import NextLink, { LinkProps } from 'next/link';
import { Button } from '@chakra-ui/react';
import { colors } from '@/constants';

const ActiveLink: React.FC<React.PropsWithChildren<LinkProps>> = ({ href, children, ...rest }) => {
  const { asPath } = useRouter();
  const isActive = asPath === href;
  return (
    <NextLink href={href} passHref {...rest}>
      <Button
        fontSize="md"
        fontWeight={isActive ? 'bold' : 'normal'}
        color={isActive ? colors.blue : colors.black}
        variant={'ghost'}
        bg={isActive ? '#fff' : 'inherit'}
        borderRadius="8"
      >
        {children}
      </Button>
    </NextLink>
  );
};

export default ActiveLink;
