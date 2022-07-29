import * as React from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  children: any;
  type: "blue" | "dark";
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`${styles.btn} ${styles[type]} ${className}`}
    >
      {children}
    </button>
  );
};

export { Button };
