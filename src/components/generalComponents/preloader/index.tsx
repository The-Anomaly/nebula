import { preloaderGIF } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

const Preloader = ({
  loading,
  white,
}: {
  loading: boolean;
  white?: boolean;
}) => {
  return (
    <>
      <div
        className={`${styles.preloader} ${white ? styles.white : ""} ${
          loading ? styles.show : styles.hide
        } `}
      >
        <img className={styles.spinner} src={preloaderGIF} alt="" />
      </div>
    </>
  );
};

export { Preloader };
