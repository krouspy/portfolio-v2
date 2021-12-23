import React from 'react';
import { Stack, Grid, GridItem, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import { IExperience } from '@/types';
import { colors } from '@/constants';

export const Experience: React.FC<IExperience> = ({ jobTitle, company, dates, details }) => {
  return (
    <Stack w="100%">
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(2, 1fr)' }}>
        <GridItem colSpan={1} justifyItems="center">
          <Stack direction="column" spacing={2}>
            <Text fontSize="2xl" color={colors.blue} fontWeight="bold">
              {jobTitle}
            </Text>
            <Text fontSize={{ base: 'sm', xl: 'md' }} color={colors.blue} fontWeight="bold">
              @{company}
            </Text>
            <Text fontSize="md">{dates}</Text>
          </Stack>
        </GridItem>
        <GridItem colSpan={1}>
          <UnorderedList spacing="6">
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
