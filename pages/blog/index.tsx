import type { NextPage, GetStaticProps } from 'next';
import { Stack, Grid, GridItem, Text } from '@chakra-ui/react';
import { NotionAPI } from 'notion-client';
import { getPageTitle, parsePageId } from 'notion-utils';
import { ExtendedRecordMap } from 'notion-types';
import { notionPageIds } from '@/constants';
import { BlogCard } from '@/components';
import { BlogPostCard } from '@/types';

const notion = new NotionAPI();

const Blog: NextPage<{ blogPosts: BlogPostCard[] }> = ({ blogPosts }) => {
  return (
    <Stack direction="column" alignItems="center" spacing={{ base: 5, md: 8 }}>
      <Text fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }} fontWeight="bold">
        Blog
      </Text>
      <Text textAlign="center" fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
        Sometimes I write about crypto and coding
      </Text>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }} gap={3}>
        {blogPosts.map(({ pageId, coverUrl, title, creationDateTimestamp }) => (
          <GridItem key={pageId}>
            <BlogCard
              pageId={pageId}
              title={title}
              coverUrl={coverUrl}
              creationDateTimestamp={creationDateTimestamp}
            />
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const promises: Promise<ExtendedRecordMap>[] = [];

  notionPageIds.forEach(pageId => {
    promises.push(notion.getPage(parsePageId(pageId)));
  });

  const recordMaps = await Promise.all(promises);
  const blogPosts: BlogPostCard[] = [];

  recordMaps.forEach((recordMap, index) => {
    const pageId = parsePageId(notionPageIds[index]);
    const block = recordMap.block[pageId].value;
    let coverUrl = '';

    if (block.type === 'page' && block.format.page_cover) {
      const cover = block.format.page_cover;
      coverUrl = `https://www.notion.so/image/${encodeURIComponent(cover)}/?table=block&id=${
        block.id
      }`;
    }

    blogPosts.push({
      pageId,
      title: getPageTitle(recordMap),
      coverUrl: coverUrl,
      creationDateTimestamp: recordMap.block[pageId].value.created_time,
    });
  });

  return {
    props: {
      blogPosts,
    },
    revalidate: 10,
  };
};
