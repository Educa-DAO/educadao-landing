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
        <title>
          EducaDAO: O projeto que quer transformar a educação gratuita
        </title>

        <meta
          name="description"
          content="Impulsionadora de conteúdos educacionais, com acesso gratuito e inclusivo para que estudantes se conectem a produtores de conteúdos, tanto consumindo os cursos, quanto sugerindo novos temas."
        />
        <meta
          name="keywords"
          content="educacao educadao tecnologia dao blockchain educação gratuita certificação certificado avaliação quiz aprender"
        />
        <meta name="author" content="EducaDAO" />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:title"
          content="EducaDAO: O projeto que quer transformar a educação gratuita"
        />
        <meta
          property="og:description"
          content="Impulsionadora de conteúdos educacionais, com acesso gratuito e inclusivo para que estudantes se conectem a produtores de conteúdos, tanto consumindo os cursos, quanto sugerindo novos temas."
        />
        <meta property="og:url" content="https://educa-dao.com/" />
        <meta property="og:site_name" content="EducaDAO" />
        <meta
          property="og:image"
          content="https://educa-dao.com/images/meta/og-image-1.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="educa-dao.com" />
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
