import * as React from "react";
import styles from "./styles.module.css";

interface NebCardProps {
  text: string;
  className: string;
  type?: "large" | "small";
}

const NebCard: React.FC<NebCardProps> = ({ text, type, className }) => {
  return (
    <div
      className={`${styles.nebCard} ${className} ${type ? styles[type] : ""}`}
    >
      {text}.<span>neb</span>
    </div>
  );
};

const NebAddresses = () => {
  const nebs: NebCardProps[] = [
    {
      text: "Lanre",
      type: "large",
      className: styles.neb1,
    },
    {
      text: "Ino",
      className: styles.neb2,
    },
    {
      text: "Chilly",
      className: styles.neb3,
    },
    {
      text: "JonnJones",
      type: "small",
      className: styles.neb4,
    },
    {
      text: "Charles",
      type: "large",
      className: styles.neb5,
    },
    {
      text: "GriffinBear",
      type: "small",
      className: styles.neb6,
    },
    {
      text: "Oyudo",
      type: "small",
      className: styles.neb7,
    },
    {
      text: "LastWolf",
      type: "large",
      className: styles.neb8,
    },
  ];
  return (
    <section className={styles.nebBg}>
      <div className={`siteWrapper ${styles.neb}`}>
        <h4 className={styles.ttl}>
          Send and Receive NFTs <br /> to your unique <span>NEB address</span>
        </h4>
        <div className={styles.nebList}>
          {nebs.map((item, index) => (
            <NebCard {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { NebAddresses };
