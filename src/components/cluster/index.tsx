import { EthIcon, SolanaIcon } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

export interface ClusterProps {
  gallery: string[];
  name: string;
  creator: string;
  thumbnail: string;
  description: string;
  estimatedValue: number;
  chains: string[];
  collectibles: {
    eth: number;
    sol: number;
  };
}

const ClusterUI: React.FC<ClusterProps> = ({
  gallery,
  name,
  creator,
  thumbnail,
  description,
  estimatedValue,
  chains,
  collectibles,
}) => {
  const [view, setView] = React.useState(0);
  return (
    <div className={`siteWrapper ${styles.clusterWrap}`}>
      <div className={styles.cluster}>
        <div className={styles.clusterImg}>
          <img src={thumbnail} alt="cluster thumbnail" />
        </div>

        <h1 className={styles.name}>{name}</h1>
        <p className={styles.creator}>by @{creator}</p>
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
            {gallery.length > 0 &&
              gallery.map((item, index) => (
                <img key={index} src={item} alt="" />
              ))}
          </div>
        ) : (
          <div className={styles.details}>
            <p className={styles.label}>DESCRIPTION</p>
            <p className={styles.description}>{description}</p>
            <p className={styles.label}>ESTIMATED VALUE</p>
            <p className={styles.cost}>
              $
              {Number(estimatedValue).toLocaleString("en", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p className={styles.label}>CHAINS</p>
            <div className={styles.chains}>
              {chains.length > 0 &&
                chains.map((item) =>
                  item === "eth" ? (
                    <EthIcon />
                  ) : item === "sol" ? (
                    <SolanaIcon />
                  ) : (
                    ""
                  )
                )}
            </div>
            <p className={styles.label}>{gallery.length} COLLECTIBLES</p>
            <p className={styles.collectibles}>
              <span
                className={styles.ethBg}
                style={{ width: `${collectibles.eth}%` }}
              >
                {collectibles.eth}%
              </span>
              <span
                className={styles.solBg}
                style={{ width: `${collectibles.sol}%` }}
              >
                {collectibles.sol}%
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export { ClusterUI };
