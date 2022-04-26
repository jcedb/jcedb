import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import smoothscroll from 'smoothscroll-polyfill';
import Layout from '../_comps/layouts/layout';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== undefined) {
      smoothscroll.polyfill();
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
