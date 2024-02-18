import { plexSans, plexSerif } from '../fonts/ibm_plex';
import '../style/main.css';

export default function RootLayout ({ children }) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexSerif.variable}`}>
      <head>
        <title>Hello, World!</title>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>

      <body>{ children }</body>
    </html>
  );
}
