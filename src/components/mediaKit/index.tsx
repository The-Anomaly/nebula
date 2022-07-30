import * as React from "react";
import { HeroSection } from "./hero";
import { Kit } from "./kit";
import styles from "./styles.module.css";

const MediaKitUI = () => {
  return (
    <>
      <HeroSection />
      <Kit />
    </>
  );
};

export { MediaKitUI };
