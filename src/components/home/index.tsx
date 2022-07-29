import * as React from "react";
import { Features } from "./features";
import { HeroSection } from "./hero";
import { MoreFeatures } from "./moreFeatures";
import { NebAddresses } from "./neb";
import { Waitlist } from "./waitlist";

const HomeUI = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <MoreFeatures />
      <NebAddresses />
      <Waitlist />
    </>
  );
};

export { HomeUI };
