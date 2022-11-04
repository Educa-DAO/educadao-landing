import { SocialMediaLinkDomain } from '@_domain/SocialMediaLinkDomain';

import Discord from '/public/images/social-media/discord.svg';
import GitHub from '/public/images/social-media/github.svg';
import Twitter from '/public/images/social-media/twitter.svg';

export const socialMediaLinks: SocialMediaLinkDomain[] = [
  {
    name: 'GitHub',
    link: 'https://github.com/Educa-DAO',
    icon: GitHub,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/educa_dao',
    icon: Twitter,
  },
  {
    name: 'Discord',
    link: 'https://discord.gg/PaB2qJ5a6j',
    icon: Discord,
  },
];
