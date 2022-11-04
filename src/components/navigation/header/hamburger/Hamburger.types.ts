import React from 'react';

export type HamburgerProps = {
  isOpen: boolean;
  onClick: () => void;
} & React.ComponentPropsWithoutRef<'button'>;
