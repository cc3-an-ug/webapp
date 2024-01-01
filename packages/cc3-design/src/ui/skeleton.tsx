import { cn } from '@cc3/design/lib/utils';

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn('bg-primary/10 animate-pulse rounded-md', className)}
    />
  );
}
