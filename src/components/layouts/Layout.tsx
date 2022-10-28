import Head from "next/head";
import Header from "../navigation/header/Header";
import React from "react";
import { PrimaryLayoutProps } from "./Layout.types";

function PrimaryLayout({
  children,
  justify = "items-center",
  ...divProps
}: PrimaryLayoutProps) {
  return (
    <>
      <Head>
        <title>Educa.DAO</title>
      </Head>

      <div
        {...divProps}
        className={`min-h-screen flex flex-col bg-daisyBush ${justify}`}
      >
        <div className="w-full">
          <Header />
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}

export default PrimaryLayout;
