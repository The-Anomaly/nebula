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
            <a href="https://twitter.com/walletnebula?s=21&t=8y6nK6Lug38PUeBOrFBzXg" target="_blank" rel="noreferrer" >
              <TwitterIcon />
            </a>
            <a href="https://t.me/nebulawallet" target="_blank" rel="noreferrer" >
              <TelegramIcon />
            </a>
            <a href="https://vm.tiktok.com/ZMN44rUNH/" target="_blank" rel="noreferrer" >
              <TiktokIcon />
            </a>
            <a href="https://medium.com/@media_26466" target="_blank" rel="noreferrer" >
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
              <a href="https://docs.nebulawallet.io/" target="_blank" rel="noreferrer" >API Docs</a>
            </li>
            <li>
              <a href="https://www.solarsoft.io/contact" target="_blank" rel="noreferrer" >Partnerships</a>
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
