export default function RootLayout ({ children }) {
  return (
    <html lang="en">
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
