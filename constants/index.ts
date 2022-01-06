import { IProjectCard } from '@/types';

export const colors = {
  white: '#fff',
  black: '#323232',
  blackLight: '#1A202C',
  blackGray: '#202532',
  blue: '#001AFF',
  blueLight: '#F0F1FF',
  violet: '#5667FF',
  gray: '#77839F',
  grayLight: '#F4F8FF',
};

export const urls = {
  companies: {
    wakam: 'https://www.wakam.com/en/',
    sopraBankingSoftware: 'https://www.soprabanking.com/',
  },
  videoGames: {
    leagueOfLegends: 'https://www.leagueoflegends.com/en-us/',
    valorant: 'https://playvalorant.com/fr-fr/',
  },
  animes: {
    demonSlayer: 'https://www.crunchyroll.com/demon-slayer-kimetsu-no-yaiba',
    jujutsuKaisen: 'https://www.crunchyroll.com/jujutsu-kaisen',
    thatTimeIGotReincarnatedAsASlime:
      'https://www.crunchyroll.com/that-time-i-got-reincarnated-as-a-slime',
  },
};

export const projects: IProjectCard[] = [
  {
    title: 'coingecko-rs',
    description: 'Building a Coingecko Rust client',
    inProgress: true,
    github: 'https://github.com/krouspy/coingecko-rs',
    technologies: ['Rust', 'Reqwest'],
  },
  {
    title: 'Twitter Clone',
    description: 'Building a Twitter clone with Next.js, trpc, prisma and PlanetScale',
    inProgress: true,
    github: 'https://github.com/krouspy/twitter-clone',
    technologies: ['Next.js', 'tRPC', 'Prisma'],
  },
  {
    title: 'Portfolio V2',
    description: 'Second version of my personal website',
    inProgress: false,
    github: 'https://github.com/krouspy/portfolio-v2',
    technologies: ['Next.js', 'Vercel', 'Chakra UI'],
  },
  {
    title: 'Schedular Multisig',
    description: 'Upgradeable contract behind a Multisig contract on Acala',
    inProgress: false,
    github: 'https://github.com/krouspy/schedular-multisig',
    technologies: ['Solidity', 'Hardhat', 'Acala'],
  },
  {
    title: 'Portfolio',
    description: 'First version of my personal website built with Next.js and hosted on Vercel',
    inProgress: false,
    github: 'https://github.com/krouspy/portfolio',
    technologies: ['Next.js', 'Vercel', 'Chakra UI'],
  },
  {
    title: 'Colloc-Chain',
    description: 'Collocation platform built on a Hyperledger Besu private blockchain',
    inProgress: false,
    github: 'https://github.com/colloc-chain',
    technologies: ['Solidity', 'Node.js', 'Mongo'],
  },
  {
    title: 'Monnaies Numeriques',
    description:
      'Receive bitcoin payments through the lightning network and writing smart contracts on Ethereum',
    inProgress: false,
    github: 'https://github.com/krouspy/monnaies-numeriques',
    technologies: ['Bitcoin', 'Ethereum'],
  },
  {
    title: 'Ethereum - Selfish Mining',
    description: 'Website that explains how selfish mining on Ethereum works and its impact',
    inProgress: false,
    github: 'https://github.com/krouspy/selfish-mining',
    website: 'https://krouspy.selfish-mining.com/',
    technologies: ['Ethereum', 'React', 'Netlify'],
  },
  {
    title: 'CLightning',
    description:
      'Documentation explaining how to write a plugin in python for the Clightning client',
    inProgress: false,
    github: 'https://github.com/krouspy/clightning-plugin',
    technologies: ['Lightning', 'Python'],
  },
];
