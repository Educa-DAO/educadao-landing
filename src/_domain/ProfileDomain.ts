import { SocialNetworksDomain } from '@_domain/SocialNetworksDomain';

export type ProfileDomain = {
  name: string;
  avatar: string;
  role: string;
  socialNetworks: SocialNetworksDomain;
};
