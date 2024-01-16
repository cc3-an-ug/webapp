'use client';

import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

export function Provider({ children }: { children?: ReactNode }) {
  return (
    <BalancerProvider>
      <ThemeProvider
        enableSystem
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </BalancerProvider>
  );
}
