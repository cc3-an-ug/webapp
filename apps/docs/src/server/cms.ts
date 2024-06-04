import { notFound } from 'next/navigation';
import { createClient } from 'next-sanity';
import type {
  PortableTextBlock,
  PortableTextSpan,
  PortableTextTextBlock,
} from 'sanity';

import { SanityConfig } from '@/config/sanity';

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

export const cms = createClient(SanityConfig);

export async function getAllPostPreviews(): Promise<Array<PostPreview>> {
  return await cms.fetch<Array<PostPreview>>(`
    *[ _type == "post" && visible == true ] | order(_createdAt asc) {
      _id,
      type,
      title,
      slug,
    }
  `);
}

export async function getPostsPreview(): Promise<PostsPreview> {
  const data = await cms.fetch<Array<PostPreview>>(`
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
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const data = await cms.fetch<Post>(`
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
}
