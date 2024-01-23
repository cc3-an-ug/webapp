import React from 'react';

import { cn } from '@cc3/design/lib/utils';

export const Root = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      {...props}
      ref={ref}
      className={cn(
        'w-full caption-bottom border-separate border-spacing-0 text-sm',
        className,
      )}
    />
  </div>
));

Root.displayName = 'Table';

export const Header = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead {...props} ref={ref} className={className} />
));

Header.displayName = 'TableHeader';

export const Body = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    {...props}
    ref={ref}
    className={cn('[&>tr:hover]:bg-muted/40', className)}
  />
));

Body.displayName = 'TableBody';

export const Footer = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    {...props}
    ref={ref}
    className={cn(
      'bg-muted/50 border-t font-medium [&>tr]:last:border-b-0',
      className,
    )}
  />
));

Footer.displayName = 'TableFooter';

export const Row = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr {...props} ref={ref} className={className} />
));

Row.displayName = 'TableRow';

export const Head = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    {...props}
    ref={ref}
    className={cn(
      'bg-muted/50 text-muted-foreground border-y px-4 py-2 text-left align-middle text-xs font-medium first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r',
      className,
    )}
  />
));

Head.displayName = 'TableHead';

export const Cell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    {...props}
    ref={ref}
    className={cn('px-4 py-4 text-left align-middle', className)}
  />
));

Cell.displayName = 'TableCell';

export const Caption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    {...props}
    ref={ref}
    className={cn('text-muted-foreground mt-4 text-sm', className)}
  />
));

Caption.displayName = 'TableCaption';
