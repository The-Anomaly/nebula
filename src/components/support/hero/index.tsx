import { PlusIcon, SearchIcon } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroBg}>
      <div className={styles.hero}>
        <h1 className={styles.ttl}>Frequently Asked Questions</h1>
        <div className={styles.searchWrap}>
          <SearchIcon className={styles.icon1} />
          <input type="text" placeholder="Search for a keyword" />
          <PlusIcon className={styles.icon2} />
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
