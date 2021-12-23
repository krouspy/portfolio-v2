import type { NextPage } from 'next';
import { Stack, Icon, Text } from '@chakra-ui/react';
import { GiBlackBook } from 'react-icons/gi';

const Blog: NextPage = () => {
  return (
    <Stack direction="row" justify="center" align="center" py="8%" spacing="10">
      <Icon as={GiBlackBook} fontSize="8xl" />
      <Text fontSize="large">Building the page once I finished writing some blog posts</Text>
    </Stack>
  );
};

export default Blog;
