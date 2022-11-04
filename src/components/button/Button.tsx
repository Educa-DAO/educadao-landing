import React from 'react';
import Link from 'next/link';
import { ButtonProps } from './Button.types';

export default function Button({
  className,
  link,
  theme = 'primary',
  target = '_blank',
  children,
  ...props
}: ButtonProps) {
  const classNameForThemes: Record<
    NonNullable<ButtonProps['theme']>,
    string
  > = {
    primary: 'bg-sun text-daisyBush',
    secondary: 'bg-daisyBush text-sun',
    tertiary: 'bg-lightGray text-daisyBush',
  };

  return (
    <Link href={link} target={target}>
      <button
        className={`px-4 sm:px-6 py-2 font-semibold rounded-sm text-sm sm:text-base transition hover:brightness-90 ${classNameForThemes[theme]} ${className}`}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
}
