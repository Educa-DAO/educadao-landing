import React, { ReactElement } from 'react';

export type ButtonProps = {
  link: string;
  theme?: 'primary' | 'secondary' | 'tertiary';
  target?: '_self' | '_blank' | '_parent' | '_top';
} & React.ComponentPropsWithoutRef<'button'>;
