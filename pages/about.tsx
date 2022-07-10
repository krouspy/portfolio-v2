import type { NextPage } from 'next';
import { Stack, Text } from '@chakra-ui/react';
import { useTheme } from '@/context/theme-context';
import { TechStack, CustomLink, LineSpacer } from '@/components';
import { urls } from '@/constants';

const About: NextPage = () => {
  const { color } = useTheme();
  return (
    <Stack spacing="8">
      <Text fontSize={{ base: '2xl', md: '3xl' }} color={color} fontWeight="bold">
        A bit about myself
      </Text>
      <Text fontSize={{ base: 'sm', md: 'md', xl: 'lg' }}>
        I am a React/Typescript Developer originally from Tahiti and very passionate about
        cryptocurrencies. I discovered cryptocurrencies in 2018 with Bitcoin then overtime, the more
        I learned about it, the more I understood the benefits of this technology and the importance
        to build around it.
        <LineSpacer />
        Fast-forward to today, I had the opportunity to work as a React/Typescript engineer at{' '}
        <CustomLink href={urls.companies.ledger}>Ledger</CustomLink> and as a Blockchain developer
        at <CustomLink href={urls.companies.wakam}>Wakam</CustomLink>. My goal is to keep learning
        everyday and build things around DeFi and NFTs while exploring other ecosystems such as
        Polkadot, Avalanche, Solana and Layer 2 technologies.
        <LineSpacer />
        My main Tech stack is currently focused on the web and I am looking to dive deep into other
        languages like Rust and Golang.
        <LineSpacer />
        Aside from that, I really enjoy video games like{' '}
        <CustomLink href={urls.videoGames.leagueOfLegends}>League of Legends</CustomLink> and{' '}
        <CustomLink href={urls.videoGames.valorant}>Valorant</CustomLink> and I&apos;m a big fan of
        animes such as <CustomLink href={urls.animes.jujutsuKaisen}>Jujutsu Kaisen</CustomLink>,{' '}
        <CustomLink href={urls.animes.demonSlayer}>Demon Slayer</CustomLink> and{' '}
        <CustomLink href={urls.animes.thatTimeIGotReincarnatedAsASlime}>
          {' '}
          That time I got reincarnated as a slime
        </CustomLink>
      </Text>
      <TechStack />
    </Stack>
  );
};

export default About;
