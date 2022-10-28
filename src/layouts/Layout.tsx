import React from 'react';
import Head from 'next/head';
import { PrimaryLayoutProps } from './Layout.types';
import Header from '@components/navigation/header/Header';
import Footer from '@components/navigation/footer/Footer';

export default function PrimaryLayout({
  children,
  justify = 'items-center',
  ...divProps
}: PrimaryLayoutProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Educa.DAO</title>
      </Head>

      <div
        {...divProps}
        className={`min-h-screen flex flex-col bg-daisyBush ${justify}`}
      >
        <div className="w-full">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
