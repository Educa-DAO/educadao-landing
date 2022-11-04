import React from 'react';
import Link from 'next/link';
import { SocialMediaLinksProps } from './SocialMediaLinks.types';

import Discord from '/public/images/social-media/discord.svg';
import GitHub from '/public/images/social-media/github.svg';
import Twitter from '/public/images/social-media/twitter.svg';

export default function SocialMediaLinks({ className }: SocialMediaLinksProps) {
  return (
    <div className={`flex gap-x-8 ${className}`}>
      <Link
        href="https://github.com/Educa-DAO"
        target="_blank"
        title="Ir para o GitHub"
      >
        <GitHub
          alt="github logo"
          className="w-8 h-8 sm:w-10 sm:h-10 transition hover:brightness-75"
        />
      </Link>

      <Link
        href="https://twitter.com/EducaDAOBR"
        target="_blank"
        title="Ir para o Twitter"
      >
        <Twitter
          alt="twitter logo"
          className="w-8 h-8 sm:w-10 sm:h-10 transition hover:brightness-75"
        />
      </Link>

      <Link
        href="https://discord.gg/PaB2qJ5a6j"
        target="_blank"
        title="Ir para o Discord"
      >
        <Discord
          alt="discord logo"
          className="w-8 h-8 sm:w-10 sm:h-10 transition hover:brightness-75"
        />
      </Link>
    </div>
  );
}
