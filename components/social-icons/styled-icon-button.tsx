import React from 'react';
import { IconButton, Link } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';
import { useTheme } from '@/context/theme-context';

interface IStyledIconButton {
  Icon: IconType;
  ariaLabel: string;
  href: string;
}

const StyledIconButton: React.FC<IStyledIconButton> = ({ Icon, ariaLabel, href, ...rest }) => (
  <Link href={href} isExternal>
    <IconButton
      icon={<Icon color={useTheme().color} size="1.7em" />}
      aria-label={ariaLabel}
      size="lg"
      variant="ghost"
      {...rest}
    />
  </Link>
);

export { StyledIconButton };
