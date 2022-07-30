import * as React from "react";
import { Button } from "../button";
import styles from "./styles.module.css";

const Contact = ({ title }) => {
  return (
    <section className={styles.contact}>
      <p className={styles.ttl}>{title}</p>
      <p className={styles.txt}>
        Shoot us an email and we will do our best to help you!
      </p>
      <Button
        className={styles.btn}
        type="blue"
        onClick={() => window.open("mailto:hello@nebulawallet.io")}
      >
        CONTACT US
      </Button>
    </section>
  );
};

export { Contact };
