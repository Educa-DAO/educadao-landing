import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderProps } from './Header.types';
import Button from '@components/button/Button';

import GitBook from '/public/images/social-media/gitbook.svg';
import Discord from '/public/images/social-media/discord.svg';
import Logo from '@components/logo/Logo';

export default function Header({ className, ...headerProps }: HeaderProps) {
  return (
    <header
      {...headerProps}
      className="flex justify-center pt-4 pb-6 px-6 shadow-xl shadow-white/5 sticky top-0 z-50 bg-daisyBush"
    >
      <div className="max-w-[1128px] w-full flex justify-between items-center">
        <Logo theme="wide-for-purple-bg-white-text" />

        <div className="flex flex-row">
          <Button
            link="https://educadao.gitbook.io/educa-dao/"
            theme="tertiary"
            className="mr-4 hidden md:flex"
            title="Ir para a documentação"
          >
            <GitBook
              color="daisyBush"
              alt="discord logo"
              width={24}
              height={24}
              className="mr-2"
            />
            Documentação
          </Button>

          <Button link="https://discord.gg/PaB2qJ5a6j" className="flex">
            <Discord
              color="#FFFFFF"
              alt="discord logo"
              width={24}
              height={24}
              className="mr-2 hidden md:block"
              title="Ir para o Discord"
            />

            <div>Entre na comunidade</div>
          </Button>
        </div>
      </div>
    </header>
  );
}
