import type { NextPage } from 'next';
import { Stack, Grid, GridItem } from '@chakra-ui/react';
import { ProjectCard } from '@/components';
import { projects } from '@/constants';

const Projects: NextPage = () => {
  return (
    <Stack h="100%">
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}
        gap="6"
      >
        {projects.map(({ title, description, inProgress, github, website, technologies }) => (
          <GridItem key={title} colSpan={1}>
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
