"use client";

import styles from "./Landing.module.scss";
import Link from "next/link";

type LandingProps = {};

export default function Landing({}: LandingProps) {
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
          <button className={styles.landingButton}>
            <Link href="#Download" passHref>
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
