import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@components/button/Button';
import { HeaderProps } from './Header.types';

export default function Header({ className, ...headerProps }: HeaderProps) {
  return (
    <header
      {...headerProps}
      className="flex justify-center pt-4 pb-6 px-6 shadow-xl shadow-white/5 sticky top-0 z-50 bg-daisyBush"
    >
      <div className="max-w-[1128px] w-full flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo-small-white-text.svg"
            alt="EducaDAO logo"
            width={138}
            height={44}
          />
        </Link>

        <div className="flex flex-row">
          <Button
            link="https://educadao.gitbook.io/educa-dao/"
            theme="tertiary"
            className="mr-4 hidden md:block"
          >
            Documentação
          </Button>

          <Button link="https://discord.gg/PaB2qJ5a6j">
            Entre na comunidade
          </Button>
        </div>
      </div>
    </header>
  );
}
