import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { colors } from '@/constants';

export const ButtonResume: React.FC<ButtonProps> = ({ size, ...rest }) => (
  <Button
    as="a"
    href="/Resume.pdf"
    target="_blank"
    color={colors.blue}
    colorScheme={colors.blue}
    variant="outline"
    size={size}
    {...rest}
    _hover={{
      bg: colors.blueLight,
    }}
  >
    Resume
  </Button>
);

ButtonResume.defaultProps = {
  size: 'md',
};

export default ButtonResume;
