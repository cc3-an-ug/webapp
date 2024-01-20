import { DocsBanner } from '@/components/docs-banner';
import { DocsContent } from '@/components/docs-content';
import { DocsHeader } from '@/components/docs-header';
import { DocsTOC } from '@/components/docs-toc';
import { getPostBySlug } from '@/lib/cms';

export default async function DocPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  return (
    <div className="flex w-full">
      <div className="relative w-full pt-8 2xl:w-[calc(100%-20rem)]">
        <DocsBanner title={post.title} />
        <DocsHeader title={post.title} />
        <DocsContent content={post.body} />
      </div>
      <DocsTOC content={post.toc} />
    </div>
  );
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
