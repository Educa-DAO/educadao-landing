import React from 'react';
import { HamburgerProps } from './Hamburger.types';

export default function Hamburger({
  className,
  isOpen,
  onClick,
  ...props
}: HamburgerProps) {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-sun transition ease transform duration-300`;

  return (
    <button
      className="flex flex-col h-12 w-12 rounded justify-center items-center group sm:hidden"
      onClick={onClick}
      {...props}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
    </button>
  );
}
