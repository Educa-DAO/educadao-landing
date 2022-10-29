import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterProps } from './Footer.types';

import Discord from '/public/images/social-media/discord.svg';
import GitHub from '/public/images/social-media/github.svg';
import Twitter from '/public/images/social-media/twitter.svg';

export default function Footer({ className, ...footerProps }: FooterProps) {
  return (
    <footer
      className="flex flex-row justify-evenly align-center p-10 bg-sun text-daisyBush shadow-t-md shadow-white/30"
      {...footerProps}
    >
      <div>
        <Link href="/">
          <Image
            className="invert"
            src="/images/logos/logo-alt-wide-for-black-bg.png"
            alt="EducaDAO logo"
            width={138}
            height={44}
          />
        </Link>
      </div>

      <div>
        <div className="flex gap-x-8 text-daisyBush">
          <Link
            href="https://github.com/Educa-DAO"
            target="_blank"
            title="Ir para o GitHub"
          >
            <GitHub
              color="#000000"
              alt="github logo"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </Link>

          <Link
            href="https://twitter.com/EducaDAOBR"
            target="_blank"
            title="Ir para o Twitter"
          >
            <Twitter
              color="#000000"
              alt="twitter logo"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </Link>

          <Link
            href="https://discord.gg/PaB2qJ5a6j"
            target="_blank"
            title="Ir para o Discord"
          >
            <Discord
              color="#000000"
              alt="discord logo"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
