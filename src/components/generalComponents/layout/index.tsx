import * as React from "react";
import { Preloader } from "../preloader";
import { Footer } from "./footer";
import { Navbar, NavbarProps } from "./navbar";
import styles from "./styles.module.css";

export interface LayoutProps extends NavbarProps {
  [key: string]: any;
  noFooter?: boolean;
  cluster?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  type,
  active,
  noFooter = false,
  cluster = false,
}) => {
  const [loading, setLoading] = React.useState({ show: true, white: true });

  React.useEffect(() => {
    setTimeout(() => {
      setLoading({ show: false, white: true });
    }, 3000);
  }, []);

  return (
    <>
      <Preloader loading={loading.show} white={loading.white} />
      <Navbar type={type} active={active} cluster={cluster} />
      <main className={styles.wrapper}>{children}</main>
      {!noFooter ? <Footer /> : ""}
    </>
  );
};

export { Layout };
