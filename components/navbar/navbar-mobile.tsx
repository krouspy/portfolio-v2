import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { colors } from '@/constants';

interface INavbarMobile {
  pages: {
    id: number;
    name: string;
    href: string;
  }[];
}

export const NavbarMobile: React.FC<INavbarMobile> = ({ pages }) => {
  const { asPath } = useRouter();
  return (
    <Box display={{ base: 'inline', xl: 'none' }}>
      <Menu isLazy id="navbar-menu" closeOnSelect autoSelect={false}>
        <MenuButton
          variant="outline"
          as={IconButton}
          icon={<GiHamburgerMenu color={colors.blue} />}
        />
        <MenuList>
          {pages.map(({ id, name, href }) => {
            const isActive = asPath === href;
            return (
              <Link key={id} href={href}>
                <MenuItem color={isActive ? colors.blue : colors.black}>{name}</MenuItem>
              </Link>
            );
          })}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default NavbarMobile;
