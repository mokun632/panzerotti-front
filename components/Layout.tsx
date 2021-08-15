import React, { ReactNode } from "react";
import Footer from "./LV1/Footer";
import { Header } from "./LV1/Header";

type Props = {
  children: ReactNode;
};

const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-1 justify-center items-center flex-col relative z-0">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
