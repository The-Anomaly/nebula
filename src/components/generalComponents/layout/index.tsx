import * as React from "react";
import { Footer } from "./footer";
import { Navbar, NavbarProps } from "./navbar";
import styles from "./styles.module.css";

export interface LayoutProps extends NavbarProps {
  [key: string]: any;
}

const Layout: React.FC<LayoutProps> = ({ children, type, active }) => {
  return (
    <>
      <Navbar type={type} active={active} />
      <main className={styles.wrapper}>{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
