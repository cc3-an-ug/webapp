import { DocsBanner } from '@/components/docs-banner';
import { DocsContent } from '@/components/docs-content';
import { DocsHeader } from '@/components/docs-header';
import { DocsHidden } from '@/components/docs-hidden';
import { DocsTOC } from '@/components/docs-toc';
import { getPostBySlug } from '@/lib/cms';

export default async function DocPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  console.log(
    typeof post.date,
    new Date(),
    new Date() < new Date(post.date || ''),
  );

  return (
    <div className="flex w-full">
      <div className="relative w-full pt-8 2xl:w-[calc(100%-20rem)]">
        <DocsBanner title={post.title} />
        <DocsHeader title={post.title} />
        <DocsHidden type={post.type} date={post.date} />
        <DocsContent date={post.date} content={post.body} />
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
