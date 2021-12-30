import type { NextPage } from 'next';
import { Stack, Grid, GridItem } from '@chakra-ui/react';
import { ProjectCard } from '@/components';
import { IProjectCard } from '@/types';

const Projects: NextPage = () => {
  return (
    <Stack h="100%">
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}
        gap="6"
      >
        {projects.map(({ id, title, description, inProgress, github, website, technologies }) => (
          <GridItem key={id} colSpan={1}>
            <ProjectCard
              title={title}
              description={description}
              inProgress={inProgress}
              github={github}
              website={website}
              technologies={technologies}
            />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

export default Projects;

const projects: IProjectCard[] = [
  {
    id: 0,
    title: 'Twitter Clone',
    description: 'Building a Twitter clone with Next.js, trpc, prisma and PlanetScale',
    inProgress: true,
    github: 'https://github.com/krouspy/twitter-clone',
    technologies: ['Next.js', 'Trpc', 'Prisma', 'MySQL'],
  },
  {
    id: 1,
    title: 'Portfolio V2',
    description: 'Second version of my personal website',
    inProgress: true,
    github: 'https://github.com/krouspy/portfolio-v2',
    technologies: ['Next.js', 'Vercel', 'Chakra UI'],
  },
  {
    id: 2,
    title: 'Schedular Multisig',
    description: 'Upgradeable contract behind a Multisig contract on Acala',
    inProgress: false,
    github: 'https://github.com/krouspy/schedular-multisig',
    technologies: ['Solidity', 'Hardhat', 'Acala'],
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'First version of my personal website built with Next.js and hosted on Vercel',
    inProgress: false,
    github: 'https://github.com/krouspy/portfolio',
    technologies: ['Next.js', 'Vercel', 'Chakra UI'],
  },
  {
    id: 4,
    title: 'Colloc-Chain',
    description: 'Collocation platform built on a Hyperledger Besu private blockchain',
    inProgress: false,
    github: 'https://github.com/colloc-chain',
    technologies: ['Solidity', 'Node.js', 'Mongo'],
  },
  {
    id: 5,
    title: 'Monnaies Numeriques',
    description:
      'Receive bitcoin payments through the lightning network and writing smart contracts on Ethereum',
    inProgress: false,
    github: 'https://github.com/krouspy/monnaies-numeriques',
    technologies: ['Bitcoin', 'Ethereum'],
  },
  {
    id: 6,
    title: 'Ethereum - Selfish Mining',
    description: 'Website that explains how selfish mining on Ethereum works and its impact',
    inProgress: false,
    github: 'https://github.com/krouspy/selfish-mining',
    website: 'https://krouspy.selfish-mining.com/',
    technologies: ['Ethereum', 'React', 'Netlify'],
  },
  {
    id: 7,
    title: 'CLightning',
    description:
      'Documentation explaining how to write a plugin in python for the Clightning client',
    inProgress: false,
    github: 'https://github.com/krouspy/clightning-plugin',
    technologies: ['Lightning', 'Python'],
  },
];
