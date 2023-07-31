import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="h-full bg-cover bg-no-repeat bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100 to-teal-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}