import { ImageProps } from 'next/image';

export type LogoProps = {
  link?: string;
  theme:
    | 'alt-square-for-black-bg'
    | 'alt-wide-for-black-bg'
    | 'wide-for-purple-bg-yellow-text'
    | 'wide-for-purple-bg-white-text';
  alt?: string;
} & Omit<ImageProps, 'src' | 'alt'>;
