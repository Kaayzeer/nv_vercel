import * as React from "react";
import Head from "next/head";

import Nav from "../Nav/Nav";

export interface ILayoutProps {
  children: React.ReactNode;
  title: string | "Next Venture | follow your dreams";
  description: string | "Find the latest and other domains";
  keywords: string | "domain, web, cheap, diverse";
}

export default function Layout({
  children,
  title,
  keywords,
  description,
}: ILayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Nav />
      {children}
    </>
  );
}
