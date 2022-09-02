import { EthIcon, Logo, LogoType, SolanaIcon } from "assets";
import * as React from "react";
import styles from "./styles.module.css";
import thumbnail from "assets/vectors/thumbnail.svg";
import { Button } from "components/generalComponents";

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
  description,
  estimatedValue,
  chains,
  collectibles,
}) => {
  const [view, setView] = React.useState(0);
  const [showPrompt, setShowPrompt] = React.useState(true);
  const [thumbnailGroup, setThumbnailGroup] = React.useState<string[]>([]);

  React.useEffect(() => {
    let data: string[] = [];
    if (gallery.length === 1) {
      data = gallery;
    } else if (gallery.length < 4) {
      data = gallery;
      let n = 4 - gallery.length;
      while (n) {
        data.push(thumbnail);
        n--;
      }
    } else if (gallery.length === 5) {
      data = [...gallery];
      data.pop();
    } else if (gallery.length > 6 && gallery.length < 13) {
      data = gallery.slice(0, 6);
    } else {
      data = gallery.slice(0, 13);
    }
    setThumbnailGroup(data);
  }, [gallery.length]);

  return (
    <div className={`siteWrapper ${styles.clusterWrap}`}>
      <div className={styles.cluster}>
        <div
          className={`${styles.clusterImg} ${
            thumbnailGroup.length == 1
              ? styles.one
              : thumbnailGroup.length <= 4
              ? styles.four
              : thumbnailGroup.length === 6
              ? styles.six
              : thumbnailGroup.length === 13
              ? styles.thirteen
              : ""
          }`}
        >
          {thumbnailGroup.length > 0 &&
            thumbnailGroup.map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                onError={({ currentTarget }) => {
                  currentTarget.outerHTML = `<video muted="" loop="" controls="" autoplay="" name="media"><source src="${item}" type="video/mp4"></video>`;
                }}
              />
            ))}
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
        <div
          className={`${styles.gallery} ${
            view === 0 ? styles.show : styles.hide
          }`}
        >
          {gallery.length > 0 &&
            gallery.map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                onError={({ currentTarget }) => {
                  currentTarget.outerHTML = `<video muted="" loop="" controls="" autoplay="" name="media"><source src="${item}" type="video/mp4"></video>`;
                }}
              />
            ))}
        </div>
        <div
          className={`${styles.details} ${
            view === 1 ? styles.show : styles.hide
          }`}
        >
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
      </div>
      {showPrompt ? (
        <div className={styles.downloadPrompt}>
          <Logo className={styles.logo} />
          <div className={styles.txtWrap}>
            <p>Nebula Wallet</p>
            <p>The official app</p>
          </div>
          <div className={styles.btnWrap}>
            <Button type={"blue"} onClick={() => {}}>
              Download
            </Button>
            <Button type={"dark"} onClick={() => setShowPrompt(false)}>
              Dismiss
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export { ClusterUI };
