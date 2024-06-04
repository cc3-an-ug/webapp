import {
  getAllPostPreviews,
  getPostBySlug,
  getPostsPreview,
} from '@/server/cms';

import { Aside } from './aside';
import { Banner } from './banner';
import { Content } from './content';
import { Header } from './header';
import { Hidden } from './hidden';
import { TOC } from './toc';

export async function generateStaticParams() {
  const posts = await getAllPostPreviews();

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  return {
    title: post.title,
  };
}

export default async function DocPage({
  params,
}: {
  params: { slug: string };
}) {
  const [preview, post] = await Promise.all([
    getPostsPreview(),
    getPostBySlug(params.slug),
  ]);

  return (
    <main className="w-full pt-16">
      <div className="mx-auto flex w-full max-w-screen-2xl px-4 md:px-8 lg:px-16">
        <Aside {...preview} />
        <div className="w-full lg:flex lg:w-[calc(100%-20rem)] lg:items-start">
          <div className="flex w-full">
            <div className="relative w-full pt-8 2xl:w-[calc(100%-20rem)]">
              <Banner title={post.title} />
              <Header title={post.title} />
              <Hidden type={post.type} date={post.date} />
              <Content body={post.body} date={post.date} />
            </div>
            <TOC toc={post.toc} />
          </div>
        </div>
      </div>
    </main>
  );
}
