import type { NextPage } from 'next';
import { Stack, Divider } from '@chakra-ui/react';
import { Experience } from '@/components';
import { IExperience } from '@/types';
import { urls } from '@/constants';

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
    jobTitle: 'Frontend Engineer',
    company: 'Ledger',
    websiteUrl: urls.companies.ledger,
    dates: 'May 2022 - Now',
    details: [
      {
        id: 0,
        content:
          'Owning the migration of our codebase to a monorepo with modern tools such as pnpm, turborepo and changesets',
      },
      {
        id: 1,
        content: 'Writing unit tests with jest for our CLI',
      },
      {
        id: 2,
        content: 'Working in an agile environment',
      },
      {
        id: 3,
        content: 'Exploring the migration of our frontend from Flow to Typescript',
      },
    ],
  },
  {
    id: 1,
    jobTitle: 'Blockchain Developer',
    company: 'Wakam',
    websiteUrl: urls.companies.wakam,
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
];
