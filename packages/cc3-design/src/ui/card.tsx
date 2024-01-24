import React from 'react';

import { cn } from '@cc3/design/lib/utils';

export const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn(
      'bg-card text-card-foreground rounded-xl border shadow',
      className,
    )}
  />
));

Root.displayName = 'Card';

export const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
  />
));

Header.displayName = 'CardHeader';

export const Title = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    {...props}
    ref={ref}
    className={cn('font-semibold leading-none tracking-tight', className)}
  />
));

Title.displayName = 'CardTitle';

export const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    {...props}
    ref={ref}
    className={cn('text-muted-foreground text-sm', className)}
  />
));

Description.displayName = 'CardDescription';

export const Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div {...props} ref={ref} className={cn('p-6 pt-0', className)} />
));

Content.displayName = 'CardContent';

export const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
  />
));

Footer.displayName = 'CardFooter';
