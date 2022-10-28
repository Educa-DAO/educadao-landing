import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@components/button/Button';
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
            src="/images/logo-small-white-text.svg"
            alt="EducaDAO logo"
            width={138}
            height={44}
          />
        </Link>

        <Button link="https://discord.gg/VFqEnrdvgB">
          Entre na comunidade
        </Button>
      </div>
    </header>
  );
}
