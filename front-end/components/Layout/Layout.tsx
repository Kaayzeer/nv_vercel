import * as React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { useAuthContext } from "../../hooks/useAuthContext";
export interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  const { user, authIsReady } = useAuthContext();

  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
