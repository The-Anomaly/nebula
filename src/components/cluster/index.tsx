import { cluster, EthIcon, nft1 } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

const ClusterUI = () => {
  const [view, setView] = React.useState(0);
  return (
    <div className={`siteWrapper ${styles.clusterWrap}`}>
      <div className={styles.cluster}>
        <div className={styles.clusterImg}>
          <img src={cluster} alt="cluster thumbnail" />
        </div>

        <h1 className={styles.name}>The Space Shuttle</h1>
        <p className={styles.creator}>by @chilly.neb</p>
        <div className={styles.btnSec}>
          <button
            className={view === 1 ? styles.active : ""}
            onClick={() => setView(1)}
          >
            Details
          </button>
          <button
            className={view === 0 ? styles.active : ""}
            onClick={() => setView(0)}
          >
            Gallery
          </button>
        </div>
        {view === 0 ? (
          <div className={styles.gallery}>
            <img src={nft1} alt="" />
            <img src={nft1} alt="" />
            <img src={nft1} alt="" />
            <img src={nft1} alt="" />
            <img src={nft1} alt="" />
            <img src={nft1} alt="" />
            <img src={nft1} alt="" />
            <img src={nft1} alt="" />
            <img src={nft1} alt="" />
          </div>
        ) : (
          <div className={styles.details}>
            <p className={styles.label}>DESCRIPTION</p>
            <p className={styles.description}>
              Do not go gentle into that good night, Old age should burn and
              rage at close of day; Rage, rage against the dying of the light.
            </p>
            <p className={styles.label}>ESTIMATED VALUE</p>
            <p className={styles.cost}>$567,092.73</p>
            <p className={styles.label}>CHAINS</p>
            <div className={styles.chains}>
              <EthIcon />
            </div>
            <p className={styles.label}>20 COLLECTIBLES</p>
            <p className={styles.collectibles}>100%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export { ClusterUI };
