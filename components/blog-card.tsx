import React from 'react';
import Link from 'next/link';
import { Stack, Text, Image } from '@chakra-ui/react';
import { BlogPostCard } from '@/types';

const unixTimestampToFullDate = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp);
  return date.toLocaleDateString('en-us', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const BlogCard: React.FC<BlogPostCard> = ({
  pageId,
  coverUrl,
  title,
  creationDateTimestamp,
}) => {
  const creationDate = unixTimestampToFullDate(creationDateTimestamp);
  const href = `/blog/${pageId}`;
  return (
    <Link href={href} passHref>
      <Stack direction="column" transition="0.5s ease" _hover={{ cursor: 'pointer', mt: '-7px' }}>
        <Image src={coverUrl} alt={title} />
        <Text fontSize={{ base: 'xs', md: 'lg', xl: 'xl' }} fontWeight="bold">
          {title}
        </Text>
        <Text fontSize={{ base: 'xx-small', md: 'sm', lg: 'md' }}>{creationDate}</Text>
      </Stack>
    </Link>
  );
};

export default BlogCard;
