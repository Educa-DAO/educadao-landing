import Link from 'next/link';
import React from 'react';
import { FooterProps } from './Footer.types';

export default function Footer({ className, ...footerProps }: FooterProps) {
  return (
    <footer
      className="flex flex-col items-center p-10 bg-sun text-daisyBush"
      {...footerProps}
    >
      <div>EducaDAO — 2022</div>
      <div>
        <Link
          className="underline hover:no-underline"
          href="https://github.com/Educa-DAO/educadao-landing"
          target="_blank"
        >
          Acesse o código-fonte deste site
        </Link>
      </div>
    </footer>
  );
}
