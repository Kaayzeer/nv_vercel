import * as React from "react";
import Nav from "../Nav/Nav";

export interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
