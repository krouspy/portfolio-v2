import React from 'react';
import { Stack } from '@chakra-ui/react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { CgMail } from 'react-icons/cg';
import { StyledIconButton } from './styled-icon-button';

const buttons = [
  {
    id: 0,
    icon: CgMail,
    ariaLabel: 'icon-gmail',
  },
  {
    id: 1,
    icon: AiFillGithub,
    ariaLabel: 'icon-github',
  },
  {
    id: 2,
    icon: AiOutlineTwitter,
    ariaLabel: 'icon-twitter',
  },
  {
    id: 3,
    icon: AiFillLinkedin,
    ariaLabel: 'icon-linkedin',
  },
];

const SocialIcons: React.FC = () => {
  return (
    <Stack direction="row">
      {buttons.map(({ id, icon, ariaLabel }) => (
        <StyledIconButton key={id} Icon={icon} ariaLabel={ariaLabel} />
      ))}
    </Stack>
  );
};

export { SocialIcons };
