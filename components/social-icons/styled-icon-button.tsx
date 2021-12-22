import React from 'react';
import { IconType } from 'react-icons/lib';
import { IconButton } from '@chakra-ui/react';
import { colors } from '@/constants';

interface IStyledIconButton {
  Icon: IconType;
  ariaLabel: string;
}

const StyledIconButton: React.FC<IStyledIconButton> = ({ Icon, ariaLabel, ...rest }) => {
  return (
    <IconButton
      icon={<Icon color={colors.blue} size="1.7em" />}
      aria-label={ariaLabel}
      size="lg"
      variant="ghost"
      {...rest}
    />
  );
};

export { StyledIconButton };
