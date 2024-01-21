import { cn } from '@cc3/design/lib/utils';

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...props}
      className={cn('bg-primary/10 block animate-pulse rounded-md', className)}
    />
  );
}
