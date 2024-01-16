import { JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const SatoshiFont = localFont({
  variable: '--font-sans',
  src: [
    {
      path: '../../public/fonts/Satoshi-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Satoshi-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
});

export const JetBrainsMonoFont = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const PlusJakartaFont = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});
