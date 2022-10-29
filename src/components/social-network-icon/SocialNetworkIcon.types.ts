import { SocialNetworksDomain } from '@_domain/SocialNetworksDomain';
import { SVGProps } from 'react';

export type SocialNetworkIconProps = {
  socialNetwork: keyof SocialNetworksDomain | string;
} & SVGProps<SVGSVGElement>;
