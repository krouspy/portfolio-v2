import type { NextPage } from 'next';
import { Stack, Grid, GridItem, Text } from '@chakra-ui/react';
import { colors } from '@/constants';
import { LineSpacer } from '@/components';

const About: NextPage = () => {
  return (
    <Stack h="100%" px="7%" pt="12%" spacing="8">
      <Grid templateColumns="repeat(2, 1fr)" gap="6">
        <GridItem colSpan={1} px="12%">
          <Text fontSize="3xl" color={colors.blue} fontWeight="bold">
            A bit about myself
          </Text>
          <LineSpacer lines={1} />
          <Text fontSize="lg">
            I am from Tahiti, French Polynesia. I recently graduated with a Master in Financial
            Engineering from ESILV, an engineering school in Paris.
            <LineSpacer />I discovered cryptocurrencies in 2018 starting with Bitcoin then overtime,
            the more I learned about it, the more I understood the benefits of this technology and
            the importance to build around it.
          </Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Text fontSize="lg" px="10%">
            Fast-forward to today, I had the opportunity to work at an Insurance company and to
            collaborate on a student project with a Banking company. My goal is to keep learning
            everyday and build things around DeFi and NFTs while exploring other ecosystems such
            Polkadot, Avalanche, Solana and Layer 2 technologies.
            <LineSpacer />
            Aside from that, I really enjoy video games like League of Legends and Valorant and
            watching animes such as Jujutsu Kaisen, Demon Slayer and Owari no Seraph
          </Text>
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default About;
