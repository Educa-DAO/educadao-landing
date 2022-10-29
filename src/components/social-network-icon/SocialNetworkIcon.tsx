import Discord from '/public/images/social-media/discord.svg';
import GitHub from '/public/images/social-media/github.svg';
import Instagram from '/public/images/social-media/instagram.svg';
import LinkedIn from '/public/images/social-media/linkedin.svg';
import Twitter from '/public/images/social-media/twitter.svg';
import YouTube from '/public/images/social-media/youtube.svg';
import { SocialNetworkIconProps } from '@components/social-network-icon/SocialNetworkIcon.types';
import { SocialNetworksDomain } from '@_domain/SocialNetworksDomain';
import { ReactElement } from 'react';

export function SocialNetworkIcon({
  socialNetwork,
  ...props
}: SocialNetworkIconProps): ReactElement {
  const socialNetworkLogos: Record<keyof SocialNetworksDomain, ReactElement> = {
    discord: <Discord {...props} />,
    github: <GitHub {...props} />,
    instagram: <Instagram {...props} />,
    linkedin: <LinkedIn {...props} />,
    twitter: <Twitter {...props} />,
    youtube: <YouTube {...props} />,
  };

  return (
    socialNetworkLogos[socialNetwork as keyof SocialNetworksDomain] || (
      <div>Icon not found</div>
    )
  );
}
