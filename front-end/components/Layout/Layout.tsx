import * as React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

export interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
