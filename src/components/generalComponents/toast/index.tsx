import { CheckIcon, ErrorIcon } from "assets";
import * as React from "react";
import styles from "./styles.module.css";

export interface ToastProps {
  type: boolean;
  text: string;
  show: boolean;
  onHide: () => void;
}

const useOutsideAlerter = (ref: any, closeFunction: () => any) => {
  React.useEffect(() => {
    /**
     * Hide if clicked on outside of element
     */
    const handleClickOutside = (event: { target: any }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeFunction && closeFunction();
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, closeFunction]);
};
const Toast: React.FC<ToastProps> = ({ text, type, show, onHide }) => {
  const listRef = React.useRef(null);

  useOutsideAlerter(listRef, onHide);
  return (
    <>
      {show ? (
        <div ref={listRef} className={styles.toastWrapper}>
          <div
            className={`${styles.toast} ${
              type ? styles.success : styles.failure
            }  `}
          >
            {type ? (
              <CheckIcon className={styles.icon} />
            ) : (
              <ErrorIcon className={styles.icon} />
            )}
            <div className={styles.txtSec}>
              <p>{text}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export { Toast };
