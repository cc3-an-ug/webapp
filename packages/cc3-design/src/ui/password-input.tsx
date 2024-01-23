'use client';

import { Eye, EyeOff } from 'lucide-react';
import React from 'react';

import { cn } from '@cc3/design/lib/utils';

export type PasswordInput = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
>;

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInput>(
  ({ className, ...props }, ref) => {
    const [show, setShow] = React.useState(false);
    const toggle = React.useCallback(() => setShow((prev) => !prev), []);

    return (
      <div className="border-input focus-within:border-tertiary focus-within:ring-tertiary relative flex items-center overflow-hidden rounded-md border bg-transparent shadow-sm transition-colors focus-within:ring-1">
        <input
          {...props}
          ref={ref}
          type={show ? 'text' : 'password'}
          className={cn(
            'placeholder:text-muted-foreground flex h-9 w-full bg-transparent py-1 pl-3 pr-8 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
        />
        <button
          type="button"
          tabIndex={-1}
          onClick={toggle}
          className="text-muted-foreground absolute inset-y-0 right-2 z-10 w-4"
        >
          {show && <EyeOff className="h-4 w-4" />}
          {!show && <Eye className="h-4 w-4" />}
        </button>
      </div>
    );
  },
);

PasswordInput.displayName = 'Input';
