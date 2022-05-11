import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
// import '@fontsource/inter/';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
