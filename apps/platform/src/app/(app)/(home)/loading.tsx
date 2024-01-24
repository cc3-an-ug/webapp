import { Skeleton } from '@cc3/design/ui/skeleton';

export default function HomeLoading() {
  return (
    <div className="w-full space-y-8">
      <Skeleton className="h-9 w-full rounded-md" />
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Skeleton className="h-72 w-full rounded-xl" />
        <Skeleton className="h-72 w-full rounded-xl" />
        <Skeleton className="h-72 w-full rounded-xl" />
      </div>
    </div>
  );
}
