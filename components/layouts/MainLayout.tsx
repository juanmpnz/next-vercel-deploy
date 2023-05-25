import React from "react";
import { Navbar } from "../Navbar";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

interface props {
   children?: JSX.Element|JSX.Element[];
}

export const MainLayout = ({ children }: props) => {
  return (
    <div>
      <Head>
        <title>Home de mi sitio</title>
        <meta name="description" content="Home de mi sitio de venta de algo." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`main ${inter.className}`}>
        <Navbar />
        {children}
      </main>
    </div>
  );
};
