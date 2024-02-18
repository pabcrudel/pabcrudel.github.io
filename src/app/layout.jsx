import { plexSans, plexSerif } from '../fonts/ibm_plex';
import '../style/main.css';

export default function RootLayout ({ children }) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexSerif.variable}`}>
      <head>
        <title>Hello, World!</title>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>

      <body>{ children }</body>
    </html>
  );
}
