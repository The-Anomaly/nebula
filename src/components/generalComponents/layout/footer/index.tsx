import {
  LogoWithLightText,
  MediumIcon,
  TelegramIcon,
  TiktokIcon,
  TwitterIcon,
} from "assets";
import * as React from "react";
import { Link } from "react-router-dom";
import { Routes } from "router";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerBg}>
      <div className={`siteWrapper ${styles.footer}`}>
        <div className={styles.sec1}>
          <LogoWithLightText className={styles.logo} />
          <div className={styles.socials}>
            <a>
              <TwitterIcon />
            </a>
            <a>
              <TelegramIcon />
            </a>
            <a>
              <TiktokIcon />
            </a>
            <a>
              <MediumIcon />
            </a>
          </div>
        </div>
        <div className={styles.links}>
          <p>Company</p>
          <ul>
            <li>
              <Link to={Routes.about}>About</Link>
            </li>
            <li>
              <Link to={Routes.mediaKit}>Media kit</Link>{" "}
            </li>
            <li>
              <Link to={Routes.privacy}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={Routes.terms}>Terms of service</Link>
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <p>Get help</p>
          <ul>
            <li>
              <Link to={Routes.support}>Support</Link>
            </li>
            <li>
              <a>API Docs</a>
            </li>
            <li>
              <a>Partnerships</a>
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <p>Download</p>
          <ul>
            <li>
              <a className={styles.diabledLink}>Andriod</a>
            </li>
            <li>
              <a className={styles.diabledLink}>IOS</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
