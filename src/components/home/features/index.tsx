import { KeyIcon } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

const FeatureCard = () => {
  return (
    <div className={styles.feature}>
      <div className={styles.featureIcon}>
        <KeyIcon />
      </div>
      <p className={styles.featureTtl}>Non-Custodial</p>
      <p className={styles.featureTxt}>
        You have complete control of your private keys.
      </p>
    </div>
  );
};

const Features = () => {
  return (
    <>
      <section className={styles.featuresBg}>
        <div className={`siteWrapper ${styles.features}`}>
          <h2 className={styles.featuresTtl}>
            The first <span>NFT-focused</span> wallet
          </h2>
          <p className={styles.featuresTxt}>
            Nebula has all important features to help you navigate the Ethereum
            and Solana ecosystems seamlessly
          </p>
          <div className={styles.featuresWrap}>
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </div>
        </div>
      </section>
    </>
  );
};

export { Features };
