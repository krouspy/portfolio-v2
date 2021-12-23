import type { NextPage } from 'next';
import { Stack, Text } from '@chakra-ui/react';
import { colors } from '@/constants';
import { LineSpacer } from '@/components';

const About: NextPage = () => {
  return (
    <Stack spacing="8">
      <Text fontSize={{ base: '2xl', md: '3xl' }} color={colors.blue} fontWeight="bold">
        A bit about myself
      </Text>
      <Text fontSize={{ base: 'sm', md: 'md', xl: 'lg' }}>
        I am from Tahiti, French Polynesia. I recently graduated with a Master in Financial
        Engineering from ESILV, an engineering school in Paris.
        <LineSpacer />I discovered cryptocurrencies in 2018 starting with Bitcoin then overtime, the
        more I learned about it, the more I understood the benefits of this technology and the
        importance to build around it.
      </Text>
      <Text fontSize={{ base: 'sm', md: 'md', xl: 'lg' }}>
        Fast-forward to today, I had the opportunity to work at an Insurance company and to
        collaborate on a student project with a Banking company. My goal is to keep learning
        everyday and build things around DeFi and NFTs while exploring other ecosystems such
        Polkadot, Avalanche, Solana and Layer 2 technologies.
        <LineSpacer />
        Aside from that, I really enjoy video games like League of Legends and Valorant and watching
        animes such as Jujutsu Kaisen, Demon Slayer and Owari no Seraph
      </Text>
    </Stack>
  );
};

export default About;
