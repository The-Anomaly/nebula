import { phone1, phone2, PlayIcon } from "assets";
import { Button } from "components";
import * as React from "react";
import styles from "./styles.module.css";

const HeroSection = () => {
  return (
    <>
      <section className={styles.heroBg}>
        <div className={`siteWrapper ${styles.hero}`}>
          <h1 className={styles.heroTtl}>
            All your NFTs, in one <span>place</span>
          </h1>
          <p className={styles.heroTxt}>
            Nebula is the best place to store, receive and send NFTs on the
            Ethereum and Solana
          </p>
          <Button onClick={() => {}} type="dark" className={styles.playBtn}>
            <PlayIcon /> Play Demo
          </Button>
          <img className={styles.heroImg1} src={phone1} alt="iphone" />
          <img className={styles.heroImg2} src={phone2} alt="iphone" />
        </div>
      </section>
    </>
  );
};

export { HeroSection };