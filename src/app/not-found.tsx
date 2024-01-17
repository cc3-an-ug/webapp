import { NotFoundSearch } from '@/components/not-found-search';

export const metadata = {
  title: '404 | CC3 AN',
};

export default async function CC3AN404() {
  return (
    <main className="w-full pt-16">
      <NotFoundSearch />
    </main>
  );
}
