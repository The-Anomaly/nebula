import * as React from "react";
import styles from "./styles.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroBg}>
      <div className={`siteWrapper ${styles.hero}`}>
        <h1 className={styles.ttl}>
          We’re on a mission to make NFTs easy and friendly
        </h1>
        <p className={styles.txt}>
          We’re building the world’s first NFT focused wallet with the goal of
          bringing ease to the management of digital assets across multiple
          blockchains. We’re removing the complexities of web3 and providing
          both an aesthetically pleasing and functional app to help
        </p>
      </div>
    </section>
  );
};

export { HeroSection };
