import React from 'react';
import Link from 'next/link';
import { Flex, Box, Stack, Button, useBreakpointValue } from '@chakra-ui/react';
import { ActiveLink, ButtonResume } from '@/components';
import { colors } from '@/constants';
import routes from '@/routes';
import NavbarMobile from './navbar-mobile';

const pages = Object.values(routes).map((route, index) => ({ ...route, id: index }));

export const Navbar: React.FC = () => {
  const buttonSize = useBreakpointValue({ base: 'sm', xl: 'md' });
  return (
    <Flex w="100%" h="100%" justifyContent="space-between" alignItems="center">
      <Box display={{ base: 'none', xl: 'inline' }}>
        <Link href={routes.home.href} passHref>
          <Button variant="ghost" color={colors.blue}>
            Kenji LAU
          </Button>
        </Link>
      </Box>
      <Stack
        direction="row"
        spacing={{ base: '5', xl: '10' }}
        px="1%"
        py="0.5%"
        bg={colors.grayLight}
        borderRadius="10"
        display={{ base: 'none', xl: 'inline' }}
      >
        {pages.map(({ id, name, href }) => (
          <ActiveLink key={id} href={href}>
            {name}
          </ActiveLink>
        ))}
      </Stack>
      <NavbarMobile pages={pages} />
      <ButtonResume size={buttonSize} />
    </Flex>
  );
};

export default Navbar;
