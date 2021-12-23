import React from 'react';
import Link from 'next/link';
import { Flex, Stack, Spacer, Button } from '@chakra-ui/react';
import ActiveLink from './active-link';
import ButtonResume from './button-resume';
import { colors } from '@/constants';
import routes from '@/routes';

const pages = Object.values(routes).map((route, index) => ({ ...route, id: index }));

export const Navbar: React.FC = () => {
  return (
    <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
      <Link href={routes.home.href} passHref>
        <Button variant="ghost" color={colors.blue}>
          Kenji LAU
        </Button>
      </Link>
      <Spacer />
      <Stack direction="row" spacing="10" px="1%" py="0.5%" bg="#F4F8FF" borderRadius="10">
        {pages.map(({ id, name, href }) => (
          <ActiveLink key={id} href={href}>
            {name}
          </ActiveLink>
        ))}
      </Stack>
      <Spacer />
      <ButtonResume />
    </Flex>
  );
};

export default Navbar;
