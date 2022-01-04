import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { useTheme } from '@/context/theme-context';
import { colors } from '@/constants';

export const ButtonResume: React.FC<ButtonProps> = ({ size, ...rest }) => {
  const { colorMode, color } = useTheme();
  return (
    <Button
      as="a"
      href="/Resume.pdf"
      target="_blank"
      color={color}
      colorScheme={color}
      variant="outline"
      size={size}
      {...rest}
      _hover={{
        bg: colorMode === 'light' ? colors.blueLight : 'inherit',
        opacity: colorMode === 'light' ? 1 : 0.8,
      }}
    >
      Resume
    </Button>
  );
};

ButtonResume.defaultProps = {
  size: 'md',
};

export default ButtonResume;
