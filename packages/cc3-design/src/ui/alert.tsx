import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '@cc3/design/lib/utils';

export const AlertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof AlertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    role="alert"
    className={cn(AlertVariants({ variant }), className)}
  />
));

Root.displayName = 'Alert';

export const Title = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    {...props}
    ref={ref}
    className={cn('mb-2 font-medium leading-none tracking-tight', className)}
  />
));

Title.displayName = 'AlertTitle';

export const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
  />
));

Description.displayName = 'AlertDescription';
