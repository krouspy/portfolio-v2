import React from 'react';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import { useTheme } from '@/context/theme-context';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { color } = useTheme();
  return (
    <IconButton
      icon={colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
      aria-label="dark-mode"
      variant="ghost"
      color={color}
      fontSize="2xl"
      onClick={toggleColorMode}
    />
  );
};

export default DarkModeSwitch;
