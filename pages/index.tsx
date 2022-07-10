import type { NextPage } from 'next';
import { Stack, Text } from '@chakra-ui/react';
import { useTheme } from '@/context/theme-context';
import { SocialIcons } from '@/components';

const Home: NextPage = () => {
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
          <br /> My name is Kenji LAU
        </Text>
        <Text textAlign="center" fontSize="4xl" fontWeight="bold">
          a React/Typescript Engineer
        </Text>
      </Stack>
      <Text textAlign="center" fontSize={{ base: '0.9em', md: '1.2em' }}>
        I&apos;m currently Frontend Engineer at Ledger working on the B2B and building stuff in
        React and Typescript. I like NFTs and currently learning about Layer 2 technologies.
      </Text>
      <SocialIcons />
    </Stack>
  );
};

export default Home;
