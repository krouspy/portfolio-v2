import { NextPage } from 'next';
import React from 'react';

export type NextPageWithLayout<T = {}> = NextPage<T> & {
  Layout?: React.FC;
};
export interface IExperience {
  id?: number;
  jobTitle: string;
  company: string;
  websiteUrl: string;
  dates: string;
  details: {
    id: number;
    content: string;
  }[];
}

export interface IProjectCard {
  id?: number;
  title: string;
  description: string;
  github: string;
  website?: string;
  technologies: string[];
  inProgress?: boolean;
}

export interface BlogPostCard {
  pageId: string;
  coverUrl: string;
  title: string;
  creationDateTimestamp: number;
}
