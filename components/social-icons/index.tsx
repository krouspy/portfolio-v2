import React from 'react';
import { Stack } from '@chakra-ui/react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { CgMail } from 'react-icons/cg';
import { StyledIconButton } from './styled-icon-button';

export const SocialIcons: React.FC = () => {
  return (
    <Stack direction="row">
      {buttons.map(({ id, icon, ariaLabel, url }) => (
        <StyledIconButton key={id} Icon={icon} ariaLabel={ariaLabel} href={url} />
      ))}
    </Stack>
  );
};

export default SocialIcons;

const buttons = [
  {
    id: 0,
    icon: AiFillGithub,
    ariaLabel: 'icon-github',
    url: 'https://github.com/krouspy',
  },
  {
    id: 1,
    icon: AiOutlineTwitter,
    ariaLabel: 'icon-twitter',
    url: 'https://twitter.com/Krouspy2',
  },
  {
    id: 2,
    icon: AiFillLinkedin,
    ariaLabel: 'icon-linkedin',
    url: 'https://www.linkedin.com/in/kenjilau/',
  },
  {
    id: 3,
    icon: CgMail,
    ariaLabel: 'icon-gmail',
    url: 'mailto: raednn@protonmail.com',
  },
];
