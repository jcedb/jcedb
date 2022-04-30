import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import smoothscroll from 'smoothscroll-polyfill';
import Layout from '../_comps/layouts/Layout';
import { useEffect, useState } from 'react';
import { RxIf } from '../_core/components/RxIf';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== undefined) {
      smoothscroll.polyfill();

      document.fonts.onloadingdone = () => {
        setFontsLoaded(true);
      };
    }
  }, []);

  const [fontsLoaded, setFontsLoaded] = useState(false);

  return (
    <RxIf condition={fontsLoaded}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RxIf>
  );
}

export default MyApp;
