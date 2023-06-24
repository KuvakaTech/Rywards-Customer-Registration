"use client";

import styles from "./Landing.module.scss";
import Link from "next/link";

type LandingProps = {};

export default function Landing({}: LandingProps) {
  const scrollDown = () => {
    if (window.innerWidth < 768) {
      window.scrollTo(0, 600);
      return;
    }

    window.scrollTo(0, 1400);
  };
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <div className={styles.landingText}>
          <p className={styles.landingTitle}>
            Earn real rewards for your everyday spending!
          </p>
          <p className={styles.landingSubtitle}>
            Collect rywards points from multi-category outlets and convert them
            into real gift cards!
          </p>
          <button className={styles.landingButton} onClick={scrollDown}>
            <Link href="/" passHref>
              Download Now
            </Link>
          </button>
        </div>
        <div className={styles.landingImage}>
          <img src="Landing.png" alt="Landing" />
        </div>
      </div>
    </div>
  );
}
