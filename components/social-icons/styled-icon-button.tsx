import React from 'react';
import { IconButton, Link } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';
import { colors } from '@/constants';

interface IStyledIconButton {
  Icon: IconType;
  ariaLabel: string;
  href: string;
}

const StyledIconButton: React.FC<IStyledIconButton> = ({ Icon, ariaLabel, href, ...rest }) => {
  return (
    <Link href={href} isExternal>
      <IconButton
        icon={<Icon color={colors.blue} size="1.7em" />}
        aria-label={ariaLabel}
        size="lg"
        variant="ghost"
        {...rest}
      />
    </Link>
  );
};

export { StyledIconButton };
