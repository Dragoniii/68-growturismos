import React, { ReactNode } from "react";
import { Header } from "../../components/functional/Header";
import { Footer } from "../../components/functional/Footer";

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
