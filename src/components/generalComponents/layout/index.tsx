import * as React from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import styles from "./styles.module.css";

export interface LayoutProps {
  children: any;
}

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
