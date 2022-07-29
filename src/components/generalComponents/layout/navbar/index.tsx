import { LogoWithDarkText, LogoWithLightText } from "assets";
import { Button } from "components";
import * as React from "react";
import { Link } from "react-router-dom";
import { Routes } from "router";
import styles from "./styles.module.css";

export interface NavbarProps {
  type: "light" | "dark";
  active: "home" | "support" | "about" | "media-kit";
}

const Navbar: React.FC<NavbarProps> = ({ type, active }) => {
  return (
    <header className={`${styles.navBg} ${styles[type]}`}>
      <nav className={`siteWrapper ${styles.nav}`}>
        {type === "light" ? (
          <LogoWithDarkText className={styles.logo} />
        ) : (
          <LogoWithLightText className={styles.logo} />
        )}
        <ul className={styles.navItems}>
          <li className={active === "home" ? styles.activeItem : ""}>
            <Link to={Routes.home}>Home</Link>
          </li>
          <li className={active === "support" ? styles.activeItem : ""}>
            <Link to={Routes.support}>Support</Link>
          </li>
          <li className={active === "about" ? styles.activeItem : ""}>
            <Link to={Routes.about}>About</Link>
          </li>
          <li className={active === "media-kit" ? styles.activeItem : ""}>
            <Link to={Routes.mediaKit}>Media Kit</Link>
          </li>
        </ul>
        <Button type="blue" onClick={() => {}}>
          API DOCS
        </Button>
      </nav>
    </header>
  );
};

export { Navbar };
