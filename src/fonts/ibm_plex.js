// eslint-disable-next-line camelcase
import { IBM_Plex_Sans } from 'next/font/google';

const plexSans = IBM_Plex_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif']
});

export const plexSansClass = plexSans.className;
