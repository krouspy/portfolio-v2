import React from 'react';
import { Stack, Grid, GridItem, Text, UnorderedList, ListItem, Link } from '@chakra-ui/react';
import { useTheme } from '@/context/theme-context';
import { IExperience } from '@/types';

export const Experience: React.FC<IExperience> = ({
  jobTitle,
  company,
  websiteUrl,
  dates,
  details,
}) => {
  const { color } = useTheme();
  return (
    <Stack w="100%">
      <Grid gap="6" templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(2, 1fr)' }}>
        <GridItem colSpan={1} justifyItems="center">
          <Stack direction="column" spacing={2}>
            <Text fontSize={{ base: 'lg', md: '2xl' }} color={color} fontWeight="bold">
              {jobTitle}
            </Text>
            <Text fontSize={{ base: 'sm', xl: 'md' }} color={color} fontWeight="bold">
              <Link href={websiteUrl} isExternal>
                @{company}
              </Link>
            </Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>{dates}</Text>
          </Stack>
        </GridItem>
        <GridItem colSpan={1}>
          <UnorderedList spacing="6" fontSize={{ base: 'sm', md: 'md' }}>
            {details.map(({ id, content }) => (
              <ListItem key={id}>{content}</ListItem>
            ))}
          </UnorderedList>
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default Experience;
