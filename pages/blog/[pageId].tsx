import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NotionAPI } from 'notion-client';
import { getPageTitle, parsePageId } from 'notion-utils';
import { Collection, CollectionRow, NotionRenderer } from 'react-notion-x';
import { ExtendedRecordMap } from 'notion-types';
import { Head, NotionLayout } from '@/components';
import { useTheme } from '@/context/theme-context';
import { NextPageWithLayout } from '@/types';
import { notionPageIds } from '@/constants';

const notion = new NotionAPI();

const Blog: NextPageWithLayout<{ recordMap: ExtendedRecordMap }> = ({ recordMap }) => {
  if (!recordMap) {
    return null;
  }

  const { colorMode } = useTheme();
  const title = getPageTitle(recordMap);

  return (
    <>
      <Head title={title} />
      <NotionRenderer
        disableHeader={true}
        recordMap={recordMap}
        fullPage={true}
        darkMode={colorMode === 'dark'}
        showTableOfContents={true}
        components={{
          collection: Collection,
          collectionRow: CollectionRow,
        }}
      />
    </>
  );
};

Blog.Layout = NotionLayout;

export default Blog;

export const getStaticProps: GetStaticProps = async context => {
  const pageId = context.params?.pageId as string;

  if (!pageId) {
    return {
      props: {},
    };
  }

  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pageIds = notionPageIds.map(pageId => parsePageId(pageId));
  const paths = pageIds.map(pageId => `/blog/${pageId}`);

  return {
    paths,
    fallback: false,
  };
};
