import React, { createContext, useContext } from 'react';
import { ColorMode, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { colors } from '@/constants';

const ThemeContext = createContext<{ colorMode: ColorMode; color: string }>({
  colorMode: 'light',
  color: colors.blue,
});

export const ThemeProvider: React.FC = ({ children }) => {
  const { colorMode } = useColorMode();
  const color = useColorModeValue(colors.blue, colors.violet);
  return <ThemeContext.Provider value={{ colorMode, color }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
