import React from 'react';
import { FooterProps } from './Footer.types';

export default function Footer({ className, ...footerProps }: FooterProps) {
  return <footer {...footerProps}></footer>;
}
