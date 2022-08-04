import { Button } from "components/generalComponents";
import * as React from "react";
import styles from "./styles.module.css";

export interface WaitlistProps {
  submitWaitlist: (email: string) => void;
  reset: boolean;
}

const Waitlist: React.FC<WaitlistProps> = ({ submitWaitlist, reset }) => {
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    setEmail("");
  }, [reset]);

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="dark"
            onClick={() => email && submitWaitlist(email)}
            className={styles.btn}
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </section>
  );
};

export { Waitlist };
