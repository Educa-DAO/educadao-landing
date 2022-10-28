import React from 'react';
import Link from 'next/link';
import { JoinButtonProps } from './JoinButton.types';

function JoinButton({ className, ...buttonProps }: JoinButtonProps) {
  return (
    <Link href="https://discord.gg/VFqEnrdvgB" target={'_blank'}>
      <button
        className="bg-sun px-4 sm:px-6 py-2 text-daisyBush font-semibold rounded-sm text-sm sm:text-base"
        {...buttonProps}
      >
        Entre na Comunidade
      </button>
    </Link>
  );
}

export default JoinButton;
