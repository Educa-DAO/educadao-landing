import React from "react";
import { FooterProps } from "./Footer.types";

function Footer({ className, ...footerProps }: FooterProps) {
  return <footer {...footerProps}></footer>;
}

export default Footer;
