'use client';

import type { ReactNode } from 'react';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

export function RootLayoutProvider({ children }: { children?: ReactNode }) {
  return <BalancerProvider>{children}</BalancerProvider>;
}
