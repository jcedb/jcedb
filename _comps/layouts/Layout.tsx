import Head from 'next/head';
import React, { CSSProperties } from 'react';
import { cdxColors } from '../../_core/config/colors.config';
import { IBaseProps } from '../../_core/models/base.model';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }: IBaseProps) {
  return (
    <>
      <Head>
        <title>John Cedrick Bermejo</title>
      </Head>

      <Navbar />

      <main style={styles}>{children}</main>

      <Footer />
    </>
  );
}

const styles: CSSProperties = {
  minHeight: '100vh',
  backgroundColor: cdxColors.white
};

export default Layout;
