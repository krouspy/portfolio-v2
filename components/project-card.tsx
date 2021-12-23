import React from 'react';
import { Stack, Flex, Text, Link, Icon, Spacer } from '@chakra-ui/react';
import { FiFolder, FiGithub } from 'react-icons/fi';
import { IProjectCard } from '@/types';
import { colors } from '@/constants';

export const ProjectCard: React.FC<IProjectCard> = ({
  title,
  description,
  inProgress,
  github,
  website,
  technologies,
}) => {
  return (
    <Link
      href={website || github}
      isExternal
      textDecoration="none"
      _hover={{ textDecoration: 'none' }}
    >
      <Stack
        w="100%"
        h={{ base: '280', md: '300' }}
        px="4"
        pt="3"
        pb="2"
        direction="column"
        borderRadius="10px"
        borderColor={colors.blue}
        borderWidth="2px"
        transition="0.5s ease"
        _hover={{ mt: '-7px' }}
      >
        <Flex alignItems="center">
          <Icon as={FiFolder} fontSize={{ base: 'xl', lg: '2xl' }} color={colors.blue} />
          <Spacer />
          <Icon
            as={FiGithub}
            fontSize={{ base: 'xl', lg: 'x-large' }}
            _hover={{ color: colors.blue }}
          />
        </Flex>
        <Flex direction="column" h="100%" py="3">
          <Flex direction="row" alignItems="center" mb="3">
            <Text fontSize={{ base: 'md', lg: 'lg', xl: 'xl' }} fontWeight="bold">
              {title}
            </Text>
            {inProgress && (
              <>
                <Spacer />
                <Text fontSize="xs" color={colors.gray}>
                  Work in progress
                </Text>
              </>
            )}
          </Flex>
          <Text fontSize={{ base: 'xs', md: 'sm', xl: 'md' }}>{description}</Text>
          <Spacer />
          <Text fontSize={{ base: 'xs', md: 'sm' }} textAlign="right" color={colors.gray}>
            {technologies.join(' - ')}
          </Text>
        </Flex>
      </Stack>
    </Link>
  );
};

ProjectCard.defaultProps = {
  inProgress: false,
};

export default ProjectCard;
