import { PlusIcon, SearchIcon } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

interface HeroProps {
  faqSearch: (x: string) => void;
}

const HeroSection: React.FC<HeroProps> = ({ faqSearch }) => {
  const [search, setSearch] = React.useState("");
  return (
    <section className={styles.heroBg}>
      <div className={`siteWrapper ${styles.hero}`}>
        <h1 className={styles.ttl}>Frequently Asked Questions</h1>
        <div className={styles.searchWrap}>
          <SearchIcon className={styles.icon1} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key.toLowerCase() === "enter") {
                faqSearch(e.target.value);
              }
            }}
            type="text"
            placeholder="Search for a keyword"
          />
          {search ? (
            <PlusIcon
              onClick={() => {
                setSearch("");
                faqSearch("");
              }}
              className={styles.icon2}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
