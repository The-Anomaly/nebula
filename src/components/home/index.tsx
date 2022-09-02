import * as React from "react";
import { Features } from "./features";
import { HeroSection } from "./hero";
import { MoreFeatures } from "./moreFeatures";
import { NebAddresses } from "./neb";
import { Waitlist, WaitlistProps } from "./waitlist";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeUI: React.FC<WaitlistProps> = ({ submitWaitlist, reset, toast }) => {
  React.useEffect((): any => {
    AOS.init({
      duration: 1500,
      offset: 100,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <HeroSection />
      <Features />
      <MoreFeatures />
      <NebAddresses />
      <Waitlist reset={reset} submitWaitlist={submitWaitlist} toast={toast} />
    </>
  );
};

export { HomeUI };
