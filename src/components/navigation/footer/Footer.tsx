import React from 'react';
import { FooterProps } from './Footer.types';
import Logo from '@components/logo/Logo';
import SocialMediaLinks from '@components/social-media-links/SocialMediaLinks';

export default function Footer({ className, ...footerProps }: FooterProps) {
  return (
    <footer
      className="flex flex-col md:flex-row justify-evenly items-center gap-y-4 p-10 bg-sun text-daisyBush shadow-t-md shadow-white/30"
      {...footerProps}
    >
      <div>
        <Logo theme="alt-wide-for-black-bg" className="invert" />
      </div>

      <div>
        <SocialMediaLinks className="text-black" />
      </div>
    </footer>
  );
}
