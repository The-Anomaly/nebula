import { phone1, phone2, PlayIcon } from "assets";
import { Button } from "components";
import * as React from "react";
import styles from "./styles.module.css";

// /**
//  * Determine the mobile operating system.
//  * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
//  *
//  * @returns {String}
//  */
//  function getMobileOperatingSystem() {
//   var userAgent = navigator.userAgent || navigator.vendor;

//   // Windows Phone must come first because its UA also contains "Android"
//   if (/windows phone/i.test(userAgent)) {
//       return "Windows Phone";
//   }

//   if (/android/i.test(userAgent)) {
//       return "Android";
//   }

//   // iOS detection from: http://stackoverflow.com/a/9039885/177710
//   if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//       return "iOS";
//   }

//   return "unknown";
// }

const HeroSection = () => {
  const [showVid, setShowVid] = React.useState(false);

  console.log(navigator.userAgent)
  return (
    <>
      <section className={styles.heroBg}>
        <div className={`siteWrapper ${styles.hero}`}>
          <h1 className={styles.heroTtl}>
            All your NFTs, in one <span>place</span>
          </h1>
          <p className={styles.heroTxt}>
            Nebula is the best place to store, receive and send NFTs on the
            Ethereum and Solana blockchains {navigator.userAgent}
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
