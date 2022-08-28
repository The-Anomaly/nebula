import { CrossChainIcon, KeyIcon, LockIcon } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

interface FeatureProps {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  title: string;
  text: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ Icon, title, text }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.featureIcon}>
        <Icon />
      </div>
      <p className={styles.featureTtl}>{title}</p>
      <p className={styles.featureTxt}>{text}</p>
    </div>
  );
};

const Features = () => {
  const contentEl = React.useRef<HTMLDivElement>(null);
  const features: FeatureProps[] = [
    {
      Icon: KeyIcon,
      title: "Non-Custodial",
      text: "You have complete control of your private keys.",
    },
    {
      Icon: CrossChainIcon,
      title: "Cross-Chain",
      text: "Perform multiple transactions across ethereum and  solana with ease",
    },
    {
      Icon: LockIcon,
      title: "Secure",
      text: "Protect your assets with ease and experience the security you expect",
    },
  ];

  React.useEffect(() => {
    localStorage.setItem("pos", `${contentEl.current?.offsetTop}`);
  }, []);

  return (
    <>
      <section ref={contentEl} className={styles.featuresBg}>
        <div className={`siteWrapper ${styles.features}`}>
          <h2 className={styles.featuresTtl}>
            The first <span>NFT-focused</span> wallet
          </h2>
          <p className={styles.featuresTxt}>
            Nebula has all important features to help you navigate the Ethereum
            and Solana ecosystems seamlessly
          </p>
          <div className={styles.featuresWrap}>
            {features.map((item, index) => (
              <FeatureCard {...item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export { Features };
