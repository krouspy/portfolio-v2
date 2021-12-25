import React from 'react';
import { Stack, Grid, GridItem, Text, Icon, Link } from '@chakra-ui/react';
import { FaReact, FaNodeJs, FaHardHat, FaDocker } from 'react-icons/fa';
import { SiSolidity, SiTypescript, SiNextdotjs, SiMongodb } from 'react-icons/si';

export const TechStack: React.FC = () => {
  return (
    <Stack spacing="8" px="15%">
      <Text fontSize={{ base: 'xl', lg: '2xl' }} fontWeight="bold" textAlign="center" py="0.7em">
        Technologies I frequently use
      </Text>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={{ base: '4', lg: '6' }}
      >
        {technologies.map(({ id, icon, color, url }) => (
          <Link key={id} href={url} justifySelf="center" isExternal>
            <GridItem colSpan={1}>
              <Icon as={icon} fontSize={{ base: '3xl', lg: '4xl' }} color={color} />
            </GridItem>
          </Link>
        ))}
      </Grid>
    </Stack>
  );
};

export default TechStack;

const technologies = [
  {
    id: 0,
    icon: FaReact,
    color: 'blue.500',
    url: 'https://reactjs.org/',
  },
  {
    id: 1,
    icon: SiNextdotjs,
    color: 'black',
    url: 'https://nextjs.org/',
  },
  {
    id: 2,
    icon: SiSolidity,
    color: 'black',
    url: 'https://docs.soliditylang.org/en/v0.8.11/',
  },
  {
    id: 3,
    icon: FaHardHat,
    color: 'yellow.400',
    url: 'https://hardhat.org/',
  },
  {
    id: 4,
    icon: SiTypescript,
    color: 'blue.500',
    url: 'https://www.typescriptlang.org/',
  },
  {
    id: 5,
    icon: FaNodeJs,
    color: 'green.500',
    url: 'https://nodejs.org/',
  },
  {
    id: 6,
    icon: SiMongodb,
    color: 'green.500',
    url: 'https://www.mongodb.com/',
  },
  {
    id: 7,
    icon: FaDocker,
    color: 'blue.500',
    url: 'https://www.docker.com/',
  },
];
