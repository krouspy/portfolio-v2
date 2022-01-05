import type { NextPage } from 'next';
import { Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import { useTheme } from '@/context/theme-context';
import { SocialIcons, ButtonResume } from '@/components';

const Home: NextPage = () => {
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });
  const { color } = useTheme();
  return (
    <Stack h="100%" align="center" mt="6%" px="7%" spacing="8">
      <Stack direction="column">
        <Text
          textAlign="center"
          color={color}
          fontSize={{ base: '3xl', md: '4xl' }}
          fontWeight="bold"
        >
          Hi
          <br /> I am Kenji LAU
        </Text>
        <Text fontSize={{ base: '4xl', md: '5xl' }} fontWeight="bold">
          a Blockchain Developer
        </Text>
      </Stack>
      <Text align="center" fontSize={{ base: '0.9em', md: '1.2em' }}>
        I&apos;m a Full-Stack & Blockchain developer located in Paris with a high interest in
        cryptocurrencies and blockchain-based products. I build things around Ethereum in React and
        Solidity and I&apos;m open to explore other ecosystems
      </Text>
      <ButtonResume size={buttonSize} />
      <SocialIcons />
    </Stack>
  );
};

export default Home;
