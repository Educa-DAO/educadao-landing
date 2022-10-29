import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LogoProps } from './Logo.types';

export default function Logo({
  theme,
  link = '/',
  title = 'Ir para a página inicial',
  width = 138,
  height = 44,
  alt = 'EducaDAO logo',
  className,
  ...props
}: LogoProps) {
  return (
    <Link href={link} title={title}>
      <Image
        className={className}
        src={`/images/logos/logo-${theme}.svg`}
        alt={alt}
        width={width}
        height={height}
        {...props}
      />
    </Link>
  );
}
