import Head from 'next/head';
import React, { CSSProperties } from 'react';
import { IBaseProps } from '../../_core/models/base.model';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }: IBaseProps) {
  return (
    <>
      <Head>
        <title>CEDDEX Software Development</title>
      </Head>

      <Navbar />

      <div style={styles}>{children}</div>

      <Footer />
    </>
  );
}

const styles: CSSProperties = {
  minHeight: '100vh'
};

export default Layout;
