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

export const notionPageIds = ['Capture-The-Ether-034e627de8394db7aafe52e4e8cbe534'];

export const urls = {
  companies: {
    ledger: 'https://www.ledger.com/',
    wakam: 'https://www.wakam.com/en/',
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
    title: 'Shadowy',
    description: 'PoC - Tokenize Github contributions',
    inProgress: true,
    github: 'https://github.com/0xshadowy',
    technologies: ['Next', 'Tailwind', 'Solidity'],
  },
  {
    title: 'Starky',
    description: 'Starknet Typescript library',
    inProgress: false,
    github: 'https://github.com/krouspy/starky',
    technologies: ['Typescript', 'Turborepo'],
  },
  {
    title: 'Ishgar',
    description: 'NFT marketplace on Starknet',
    inProgress: false,
    github: 'https://github.com/ishgarproject',
    technologies: ['Next', 'Typescript', 'Cairo'],
  },
  {
    title: 'Capture The Ether',
    description: 'CTF - Smart contract challenges',
    inProgress: false,
    github: 'https://github.com/krouspy/capture-the-ether',
    technologies: ['Solidity', 'Hardhat'],
  },
  {
    title: 'coingecko-rs',
    description: 'Learning Rust by building a Coingecko Rust client',
    inProgress: false,
    github: 'https://github.com/krouspy/coingecko-rs',
    technologies: ['Rust', 'Reqwest'],
  },
  {
    title: 'Twitter Clone',
    description: 'Learning new tools by building a Twitter clone',
    inProgress: false,
    github: 'https://github.com/krouspy/twitter-clone',
    technologies: ['Next', 'tRPC', 'Prisma'],
  },
  {
    title: 'Portfolio V2',
    description: 'Second version of my personal website',
    inProgress: false,
    github: 'https://github.com/krouspy/portfolio-v2',
    technologies: ['Next', 'Vercel', 'Chakra UI'],
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
    description: 'First version of my personal website built with Next and hosted on Vercel',
    inProgress: false,
    github: 'https://github.com/krouspy/portfolio',
    technologies: ['Next', 'Vercel', 'Chakra UI'],
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
