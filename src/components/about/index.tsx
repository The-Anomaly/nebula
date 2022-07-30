import { Contact } from "components";
import * as React from "react";
import { HeroSection } from "./hero";
import styles from "./styles.module.css";
import { Team } from "./team";

const AboutUI = () => {
  return (
    <>
      <HeroSection />
      <Team />
      <Contact title={"Got inquiries?"} />
    </>
  );
};

export { AboutUI };
