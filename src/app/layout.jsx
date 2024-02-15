import { plexSansClass } from '../fonts/ibm_plex';

export default function RootLayout ({ children }) {
  return (
    <html lang="en" className={plexSansClass}>
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
