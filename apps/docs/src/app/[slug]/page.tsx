import { Content } from '@cc3/design/ui/content';

import { cms, getPostBySlug, getPostsPreview } from '@/server/cms';

import { Aside } from './aside';

export const runtime = 'edge';

export const dynamic = 'force-dynamic';

export const revalidate = 0;

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
              <Content content={post.body} client={cms} />
              {/* <DocsBanner title={post.title} />
                  <DocsHeader title={post.title} />
                  <DocsHidden type={post.type} date={post.date} />
                  <DocsContent date={post.date} content={post.body} /> */}
            </div>
            {/* <DocsTOC content={post.toc} /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
