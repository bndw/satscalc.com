"use client";

import styles from "./donate.module.css";

export const Donate = () => {
  return (
    <div>
      <a
        className={styles.href}
        target="_blank"
        href="https://nodeless.io/donate/satscalc"
      >
        Donate
      </a>
    </div>
  );
};
