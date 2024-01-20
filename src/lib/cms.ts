import { notFound } from 'next/navigation';
import { cache } from 'react';
import type {
  PortableTextBlock,
  PortableTextSpan,
  PortableTextTextBlock,
} from 'sanity';

import { client } from '@/config/sanity';

export type Post = {
  _id: string;
  type: 'lab' | 'project' | 'tutorial';
  title: string;
  date: string | null;
  slug: { current: string };
  excerpt: Array<PortableTextBlock>;
  body: Array<PortableTextBlock>;
  toc: Array<PortableTextTextBlock<PortableTextSpan>>;
  _createdAt: string;
  _updatedAt: string;
};

export type PostPreview = Pick<Post, '_id' | 'type' | 'title' | 'slug'>;

export type PostsPreview = {
  labs: Array<PostPreview>;
  projects: Array<PostPreview>;
  tutorials: Array<PostPreview>;
};

export const getPostsPreview = cache(async (): Promise<PostsPreview> => {
  const data = await client.fetch<Array<PostPreview>>(`
    *[ _type == "post" && visible == true ] | order(_createdAt asc) {
      _id,
      type,
      title,
      slug,
    }
  `);

  const labs = data.filter((post) => post.type === 'lab');
  const projects = data.filter((post) => post.type === 'project');
  const tutorials = data.filter((post) => post.type === 'tutorial');

  return {
    labs,
    projects,
    tutorials,
  };
});

export const getPostBySlug = cache(async (slug: string): Promise<Post> => {
  const data = await client.fetch<Post>(`
    *[ _type == "post" && visible == true && slug.current == "${slug}" ][0] {
      _id,
      type,
      title,
      date,
      slug,
      excerpt,
      body,
      "toc": body[length(style) == 2 && string::startsWith(style, "h")],
      _createdAt,
      _updatedAt,
    }
  `);

  if (!data) notFound();

  return data;
});
