import { Button } from "components/generalComponents";
import * as React from "react";
import styles from "./styles.module.css";

const Waitlist = () => {
  return (
    <section className={styles.waitlistBg}>
      <div className={`siteWrapper ${styles.waitlist}`}>
        <h4 className={styles.ttl}>Join the waitlist!</h4>
        <p className={styles.txt}>
          Be the first to be in the know. Join our growing waitlist to stay
          upated on important information.
        </p>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="email"
            placeholder="Enter your email address"
          />
          <Button type="dark" onClick={() => {}} className={styles.btn}>
            SUBMIT
          </Button>
        </form>
      </div>
    </section>
  );
};

export { Waitlist };
