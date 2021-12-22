import React from 'react';
import Link from 'next/link';
import { Flex, Stack, Spacer, Button, Text } from '@chakra-ui/react';
import ActiveLink from './active-link';
import ButtonResume from './button-resume';
import { colors } from '@/constants';

const pages = [
  {
    id: 0,
    label: 'Home',
    href: '/',
  },
  {
    id: 1,
    label: 'Blog',
    href: '/blog',
  },
  {
    id: 2,
    label: 'Experiences',
    href: '/experiences',
  },
  {
    id: 3,
    label: 'Projects',
    href: '/projects',
  },
];

export const Navbar: React.FC = () => {
  return (
    <Flex w="60vw" h="100%" justifyContent="center" alignItems="center">
      <Link href="/">
        <Button variant="ghost" color={colors.blue}>
          Kenji LAU
        </Button>
      </Link>
      <Spacer />
      <Stack direction="row" spacing="10" px="1%" py="0.5%" bg="#F4F8FF" borderRadius="10">
        {pages.map(({ id, label, href }) => (
          <ActiveLink key={id} href={href}>
            {label}
          </ActiveLink>
        ))}
      </Stack>
      <Spacer />
      <ButtonResume />
    </Flex>
  );
};

export default Navbar;
