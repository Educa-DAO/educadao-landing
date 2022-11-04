import React, { useState } from 'react';
import Link from 'next/link';
import { HeaderProps } from './Header.types';

import Logo from '@components/logo/Logo';
import Hamburger from './hamburger/Hamburger';

export default function Header({ className, ...headerProps }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  function getLinks() {
    return (
      <>
        <Link
          className="transition opacity-80 hover:opacity-100"
          href="https://docs.educa-dao.com/"
          target="_blank"
          title="Ir para a documentação"
        >
          Documentação
        </Link>

        <Link
          className="transition opacity-80 hover:opacity-100"
          href="https://discord.gg/PaB2qJ5a6j"
          target="_blank"
          title="Ir para o Discord"
        >
          Entre na comunidade
        </Link>
      </>
    );
  }

  return (
    <>
      <header
        {...headerProps}
        className="shadow-xl shadow-white/5 sticky top-0 z-50 bg-daisyBush"
      >
        <div className="p-6 flex justify-center">
          <div className="max-w-[1128px] w-full flex justify-between items-center">
            <Logo theme="wide-for-purple-bg-white-text" />

            <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

            <div className="gap-x-12 text-white font-semibold hidden sm:flex sm:flex-row">
              {getLinks()}
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="flex justify-center sm:hidden pb-6 px-6 shadow-xl shadow-white/5 sticky top-0 z-50 bg-daisyBush">
            <div className="flex flex-col justify-center items-center text-white font-semibold text-lg gap-y-2">
              {getLinks()}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
