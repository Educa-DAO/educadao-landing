import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JoinButton from '@components/buttons/JoinButton';
import { HeaderProps } from './Header.types';

export default function Header({ className, ...headerProps }: HeaderProps) {
  return (
    <header
      {...headerProps}
      className="flex justify-center pt-4 pb-6 px-6 shadow-xl shadow-white/5"
    >
      <div className="max-w-[1128px] w-full flex justify-between items-center">
        <Link href="/src/pages">
          <Image
            src="/images/logo.svg"
            alt="Educa.DAO logo"
            width={138}
            height={138}
          />
        </Link>
        <JoinButton />
      </div>
    </header>
  );
}
