import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import '@fontsource/inter/';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color='#A7BFFB' />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
