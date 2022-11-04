import React from 'react';
import Link from 'next/link';
import { SocialMediaLinksProps } from './SocialMediaLinks.types';
import { socialMediaLinks } from '@_config/social-media-links';

export default function SocialMediaLinks({ className }: SocialMediaLinksProps) {
  return (
    <div className={`flex gap-x-8 ${className}`}>
      {socialMediaLinks.map((socialMediaLink, index) => (
        <Link
          key={`social-media-link-${index}`}
          href={socialMediaLink.link}
          target="_blank"
          title={`Ir para ${socialMediaLink.name}`}
        >
          <socialMediaLink.icon
            alt={`Ícone de ${socialMediaLink.name}`}
            className="relative w-8 h-8 sm:w-10 sm:h-10 transition hover:brightness-75 transition-transform hover:translate-y-[-2px]"
          />
        </Link>
      ))}
    </div>
  );
}
