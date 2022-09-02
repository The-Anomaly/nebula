import {
  LogoWithDarkText,
  LogoWithLightText,
  MenuClose,
  MenuOpen,
} from "assets";
import { Button } from "components";
import * as React from "react";
import { Link } from "react-router-dom";
import { Routes } from "router";
import styles from "./styles.module.css";

export interface NavbarProps {
  type: "light" | "dark";
  active: "home" | "support" | "about" | "media-kit" | "";
  cluster?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ type, active, cluster }) => {
  const [showNav, setShowNav] = React.useState(false);
  const [overrideType, setOverrideType] = React.useState("");

  const handleScroll = () => {
    if (
      active == "home" &&
      window.scrollY > Number(localStorage.getItem("pos"))
    ) {
      setOverrideType("dark");
    } else {
      setOverrideType(type);
    }
  };
  window.addEventListener("scroll", handleScroll);

  React.useEffect(() => {
    setOverrideType(active === "home" ? "light" : "");
  }, [active]);
  return (
    <>
      {cluster ? (
        <header className={`${styles.navBg} ${styles.dark}`}>
          <nav className={`siteWrapper ${styles.nav} ${styles.clusterMobile}`}>
            <Link to={Routes.home}>
              <LogoWithLightText className={styles.logo} />{" "}
            </Link>
            <Button type="blue" onClick={() => {}}>
              Download
            </Button>
          </nav>
        </header>
      ) : (
        <header
          className={`${styles.navBg} ${
            overrideType ? styles[overrideType] : styles[type]
          } ${showNav ? styles.openNav : ""}`}
        >
          <nav className={`siteWrapper ${styles.nav}`}>
            {type === "light" && overrideType === "light" ? (
              <Link to={Routes.home}>
                <LogoWithDarkText className={styles.logo} />
              </Link>
            ) : (
              <Link to={Routes.home}>
                <LogoWithLightText className={styles.logo} />{" "}
              </Link>
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
            <Button
              type="blue"
              onClick={() =>
                window.open("https://docs.nebulawallet.io/", "_blank")
              }
            >
              API DOCS
            </Button>
          </nav>
          <nav className={`${styles.mobileNav} ${styles[type]}`}>
            <div className={styles.header}>
              {type === "light" ? (
                <Link to={Routes.home}>
                  <LogoWithDarkText className={styles.logo} />
                </Link>
              ) : (
                <Link to={Routes.home}>
                  <LogoWithLightText className={styles.logo} />{" "}
                </Link>
              )}

              {!showNav ? (
                <MenuOpen
                  onClick={() => setShowNav(true)}
                  role="button"
                  className={styles.menuBtn}
                />
              ) : (
                <MenuClose
                  onClick={() => setShowNav(false)}
                  role="button"
                  className={styles.menuBtnClose}
                />
              )}
            </div>
            {showNav ? (
              <ul className={styles.navItems}>
                <li className={active === "home" ? styles.activeItem : ""}>
                  <Link onClick={() => setShowNav(false)} to={Routes.home}>
                    Home
                  </Link>
                </li>
                <li className={active === "support" ? styles.activeItem : ""}>
                  <Link onClick={() => setShowNav(false)} to={Routes.support}>
                    Support
                  </Link>
                </li>
                <li className={active === "about" ? styles.activeItem : ""}>
                  <Link onClick={() => setShowNav(false)} to={Routes.about}>
                    About
                  </Link>
                </li>
                <li className={active === "media-kit" ? styles.activeItem : ""}>
                  <Link onClick={() => setShowNav(false)} to={Routes.mediaKit}>
                    Media Kit
                  </Link>
                </li>
                <li>
                  <a
                    onClick={() => setShowNav(false)}
                    href="https://docs.nebulawallet.io/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    API Docs
                  </a>
                </li>
              </ul>
            ) : (
              ""
            )}
          </nav>
        </header>
      )}
    </>
  );
};

export { Navbar };
