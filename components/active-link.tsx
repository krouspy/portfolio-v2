import React from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import { Button, useColorModeValue } from '@chakra-ui/react';
import { colors } from '@/constants';

export const ActiveLink: React.FC<React.PropsWithChildren<LinkProps>> = ({
  href,
  children,
  ...rest
}) => {
  const { asPath } = useRouter();
  const isActive = asPath === href;
  const activeColor = useColorModeValue(colors.blue, colors.violet);
  const inactiveColor = useColorModeValue(colors.black, colors.white);
  const activeBg = useColorModeValue(colors.white, colors.blackLight);
  return (
    <Link href={href} passHref {...rest}>
      <Button
        fontSize={{ base: 'sm', xl: 'md' }}
        fontWeight={isActive ? 'bold' : 'normal'}
        color={isActive ? activeColor : inactiveColor}
        variant="ghost"
        bg={isActive ? activeBg : 'inherit'}
        borderRadius="8"
      >
        {children}
      </Button>
    </Link>
  );
};

export default ActiveLink;
