import { Loader, TwitterIcon } from "assets";
import { Button, Toast, ToastProps } from "components/generalComponents";
import * as React from "react";
import styles from "./styles.module.css";

export interface WaitlistProps {
  submitWaitlist: (email: string) => void;
  reset: boolean;
  toast: ToastProps;
  success: boolean;
  loading: boolean;
}

const Waitlist: React.FC<WaitlistProps> = ({
  submitWaitlist,
  reset,
  toast,
  success,
  loading,
}) => {
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    setEmail("");
  }, [reset]);

  return (
    <section className={styles.waitlistBg}>
      <div className={`siteWrapper ${styles.waitlist}`}>
        <h4 className={styles.ttl}>
          {success ? "Awesome! You’re on the waitlist" : "Join the waitlist!"}
        </h4>
        <p className={styles.txt}>
          {success ? (
            <>
              Thank you! You will be the first to know when we are ready.
              <br /> If you’d like to follow up, join our Twitter.
            </>
          ) : (
            " Be the first to be in the know. Join our growing waitlist to stay upated on important information."
          )}
        </p>
        {success ? (
          <Button
            type="dark"
            onClick={() =>
              window.open(
                "https://twitter.com/walletnebula?s=21&t=8y6nK6Lug38PUeBOrFBzXg",
                "_blank"
              )
            }
            className={`${styles.btn} ${styles.twitterBtn}`}
          >
            <TwitterIcon /> Twitter
          </Button>
        ) : (
          <form className={styles.form}>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              readOnly={loading}
            />
            <Button
              type="dark"
              onClick={() => email && submitWaitlist(email)}
              className={styles.btn}
              disabled={loading}
            >
              {loading ? <Loader className={styles.loader} /> : "SUBMIT"}
            </Button>
          </form>
        )}
        {!success ? <Toast {...toast} /> : ""}
      </div>
    </section>
  );
};

export { Waitlist };
