import React, { useState } from 'react';
import Link from 'next/link';
import { HeaderProps } from './Header.types';

import Logo from '@components/logo/Logo';
import Hamburger from './hamburger/Hamburger';

export default function Header({ className, ...headerProps }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        {...headerProps}
        className="pt-4 pb-6 px-6 shadow-xl shadow-white/5 sticky top-0 z-50 bg-daisyBush"
      >
        <div className="flex justify-center">
          <div className="max-w-[1128px] w-full flex justify-between items-center">
            <Logo theme="wide-for-purple-bg-white-text" />
            <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

            <div className="gap-x-12 text-white font-semibold hidden sm:flex sm:flex-row">
              <Link
                className="transition opacity-80 hover:opacity-100"
                href="https://docs.educa-dao.com/"
                target="_blank"
              >
                Documentação
              </Link>

              <Link
                className="transition opacity-80 hover:opacity-100"
                href="https://discord.gg/PaB2qJ5a6j"
                target="_blank"
              >
                Entre na comunidade
              </Link>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="flex justify-center sm:hidden pt-4 pb-6 px-6 shadow-xl shadow-white/5 sticky top-0 z-50 bg-daisyBush">
            <div className="flex flex-col justify-center items-center text-white font-semibold text-lg gap-y-2">
              <Link
                className="transition opacity-80 hover:opacity-100"
                href="https://docs.educa-dao.com/"
                target="_blank"
              >
                Documentação
              </Link>

              <Link
                className="transition opacity-80 hover:opacity-100"
                href="https://discord.gg/PaB2qJ5a6j"
                target="_blank"
              >
                Entre na comunidade
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
