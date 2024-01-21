import { JetBrains_Mono, Work_Sans } from 'next/font/google';

import { cn } from './utils';

export const WorkSansFont = Work_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const JetBrainsMonoFont = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const Fonts = cn(
  WorkSansFont.className,
  WorkSansFont.variable,
  JetBrainsMonoFont.variable,
);
