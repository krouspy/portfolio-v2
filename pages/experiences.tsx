import type { NextPage } from 'next';
import { Stack, Divider } from '@chakra-ui/react';
import { Experience } from '@/components';
import { IExperience } from '@/types';

const Experiences: NextPage = () => {
  return (
    <Stack h="100%" px="5%" spacing="12">
      {experiences.map(({ id, jobTitle, company, websiteUrl, dates, details }) => (
        <Stack key={id} direction="column" spacing="12">
          <Experience
            jobTitle={jobTitle}
            company={company}
            websiteUrl={websiteUrl}
            dates={dates}
            details={details}
          />
          <Divider />
        </Stack>
      ))}
    </Stack>
  );
};

export default Experiences;

const experiences: IExperience[] = [
  {
    id: 0,
    jobTitle: 'Full-Stack & Blockchain Developer',
    company: 'Wakam',
    websiteUrl: 'https://www.wakam.com/en/',
    dates: 'October 2019 - August 2021',
    details: [
      {
        id: 0,
        content: 'Built internal tools around our Quorum Blockchain',
      },
      {
        id: 1,
        content: 'Wrote smart contracts based on the ERC20, ERC721, ERC1155 standards',
      },
      {
        id: 2,
        content:
          'Worked with a variety of languages, platforms and frameworks: Solidity, React, Node.js, Typescript, Microsoft Azure, C# and Docker',
      },
    ],
  },
  {
    id: 1,
    jobTitle: 'Backend Engineer',
    company: 'SopraBankingSoftware',
    websiteUrl: 'https://www.soprabanking.com/',
    dates: 'October 2020 - January 2021',
    details: [
      {
        id: 0,
        content: 'Developed a collocation platform on a private blockchain Hyperledger Besu',
      },
      {
        id: 1,
        content:
          'Designed the architecture and wrote the backend in Node.js, Express, Mongoose and Solidity',
      },
      {
        id: 2,
        content:
          'Explored tools to monitor blockchain events: Eventeum and the ELK Stack (ElasticSearch, Logstach, Kibana)',
      },
    ],
  },
];
