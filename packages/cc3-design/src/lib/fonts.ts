import { JetBrains_Mono, Poppins } from 'next/font/google';

import { cn } from './utils';

export const PoppinsFont = Poppins({
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
  PoppinsFont.className,
  PoppinsFont.variable,
  JetBrainsMonoFont.variable,
);
