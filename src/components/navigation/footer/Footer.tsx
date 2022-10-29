import React from 'react';
import { FooterProps } from './Footer.types';

export default function Footer({ className, ...footerProps }: FooterProps) {
  return (
    <footer
      className="flex flex-col items-center p-10 bg-sun text-daisyBush shadow-t-md shadow-white/30"
      {...footerProps}
    >
      <div>EducaDAO — 2022</div>
    </footer>
  );
}
