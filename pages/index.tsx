import type { NextPage } from 'next';
import Image from 'next/image';
import { Stack, Text } from '@chakra-ui/react';
import { SocialIcons, ButtonResume } from '@/components';
import { colors } from '@/constants';

const Home: NextPage = () => {
  return (
    <Stack h="100%" align="center" px="7%" spacing="8" pt="12%">
      <Text fontSize="4xl" fontWeight="bold" align="center">
        <span style={{ color: colors.blue }}>
          Hi <Image src="/waving-hand.jpg" alt="waving-hand" width="25" height="25" /> <br /> I am
          Kenji LAU
        </span>
        <br />
        <span style={{ fontSize: '1.2em' }}>a Blockchain Developer</span>
      </Text>
      <Text align="center" fontSize="1.2em">
        I&apos;m a Full-Stack & Blockchain developer located in Paris with a high interest in
        cryptocurrencies and blockchain-based products. I build things around Ethereum in React and
        Solidity and I&apos;m open to explore other ecosystems
      </Text>
      <ButtonResume size="lg" />
      <SocialIcons />
    </Stack>
  );
};

export default Home;
