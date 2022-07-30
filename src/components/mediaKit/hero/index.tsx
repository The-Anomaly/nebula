import * as React from "react";
import styles from "./styles.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroBg}>
      <div className={`siteWrapper ${styles.hero}`}>
        <h1 className={styles.ttl}>Brand MediaKit</h1>
        <p className={styles.txt}>
          Please follow these guidelines when using the Nebula Brand{" "}
        </p>
      </div>
    </section>
  );
};

export { HeroSection };
