import {
  Dapps1,
  Dapps2,
  Dapps3,
  Dapps4,
  EthIcon,
  nft1,
  nft2,
  nft3,
  nft4,
  nft5,
  nft6,
  Portfolio,
  shareCluster,
  ShareCluster,
  SolanaIcon,
  Swap,
} from "assets";
import * as React from "react";
import styles from "./styles.module.css";

const MoreFeatures = () => {
  return (
    <section className={styles.moreBg}>
      <div className={`siteWrapper ${styles.more}`}>
        <h3 className={styles.ttl}>
          All the important features, and then some more...
        </h3>
        <div className={styles.featuresWrap}>
          <div className={styles.feature1}>
            <div className={styles.imgSec}>
              <div>
                <img src={nft1} />
                <EthIcon />
              </div>
              <div>
                <img src={nft2} />
                <SolanaIcon />
              </div>
              <div>
                <img src={nft3} />
                <EthIcon />
              </div>
              <div>
                <img src={nft4} />
                <SolanaIcon />
              </div>
              <div>
                <img src={nft5} />
                <EthIcon />
              </div>
              <div>
                <img src={nft6} />
                <SolanaIcon />
              </div>
            </div>
            <p className={styles.featureTtl}>Create & Send Clusters</p>
            <p className={styles.featureTxt}>
              Create an send NFTs from various blockchains as a group— (we call
              them clusters) to anyone at a go.
            </p>
          </div>
          <div className={styles.feature2}>
            <div className={styles.imgSec}>
              <Dapps1 />
              <Dapps2 />
              <Dapps4 />
              <Dapps3 />
            </div>
            <p className={styles.featureTtl}>Explore Dapps</p>
            <p className={styles.featureTxt}>
              Explore your favourite dapps using the Nebula Dapp browser.
            </p>
          </div>
          <div className={styles.feature3}>
            <Portfolio />
            <div>
              <p className={styles.featureTtl}>Monitor your portfolio</p>
              <p className={styles.featureTxt}>
                Keep track of the live estimate value of all your assets on
                multiple blockchains
              </p>
            </div>
          </div>
          <div className={styles.feature4}>
            <Swap />
            <p className={styles.featureTtl}>Swap with ease</p>
            <p className={styles.featureTxt}>
              Perform swaps between native tokens at the tap of a button.
              Simple, intuitive and easy.
            </p>
          </div>
          <div className={styles.feature4}>
            <img src={shareCluster} alt="" />
            <p className={styles.featureTtl}>Share Clusters</p>
            <p className={styles.featureTxt}>
              Share your clusters of collectibles to your friends or potential
              buyers on social media.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { MoreFeatures };
