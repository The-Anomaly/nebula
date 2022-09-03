import { phone1, phone2, PlayIcon } from "assets";
import { Button } from "components";
import * as React from "react";
import styles from "./styles.module.css";

const HeroSection = () => {
  const [showVid, setShowVid] = React.useState(false);
  return (
    <>
      <section className={styles.heroBg}>
        <div className={`siteWrapper ${styles.hero}`}>
          <h1 className={styles.heroTtl}>
            All your NFTs, in one <span>place</span>
          </h1>
          <p className={styles.heroTxt}>
            Nebula is the best place to store, receive and send NFTs on the
            Ethereum and Solana blockchains
          </p>
          <Button
            onClick={() => setShowVid(true)}
            type="dark"
            className={styles.playBtn}
          >
            <PlayIcon /> Play Demo
          </Button>
          <img className={styles.heroImg1} src={phone1} alt="iphone" />
          <img className={styles.heroImg2} src={phone2} alt="iphone" />
        </div>
      </section>
      <div
        className={`${styles.youtubeVid} ${
          showVid ? styles.show : styles.hide
        }`}
      >
        <Button
          onClick={() => setShowVid(false)}
          type="dark"
          className={styles.closeBtn}
        >
          Close
        </Button>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/X5Gyq5PrxXM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          scrolling="no"
        ></iframe>
      </div>
    </>
  );
};

export { HeroSection };
