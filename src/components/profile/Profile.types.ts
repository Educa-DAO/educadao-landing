type SocialNetworks = {
  discord?: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
};

export type ProfileProps = {
  name: string;
  avatar: string;
  role: string;
  socialNetworks: SocialNetworks;
};
