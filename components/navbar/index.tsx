import React from 'react';
import Link from 'next/link';
import { Flex, Box, Stack, Button, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { ActiveLink, ButtonResume } from '@/components';
import { colors } from '@/constants';
import routes from '@/routes';
import { useTheme } from '@/context/theme-context';
import NavbarMobile from './navbar-mobile';
import DarkModeSwitch from './dark-mode-toggle';

const pages = Object.values(routes).map((route, index) => ({ ...route, id: index }));

export const Navbar: React.FC = () => {
  const buttonSize = useBreakpointValue({ base: 'sm', xl: 'md' });
  const { color } = useTheme();
  return (
    <Flex w="100%" h="100%" justifyContent="space-between" alignItems="center">
      <Box display={{ base: 'none', xl: 'inline' }}>
        <Link href={routes.home.href} passHref>
          <Button variant="ghost" color={color}>
            Kenji LAU
          </Button>
        </Link>
      </Box>
      <Stack
        direction="row"
        spacing={{ base: '5', xl: '10' }}
        px="1%"
        py="0.5%"
        bg={useColorModeValue(colors.grayLight, colors.blackGray)}
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
      <Stack direction="row" spacing="4" align="center">
        <DarkModeSwitch />
        <ButtonResume size={buttonSize} />
      </Stack>
    </Flex>
  );
};

export default Navbar;
