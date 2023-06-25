"use client";

import styles from "./Points.module.scss";
import Link from "next/link";

type PointsProps = {};

export default function Points({}: PointsProps) {
  return (
    <div className={styles.points}>
      <div className={styles.container}>
        <div className={styles.pointsText}>
          <p className={styles.pointsTitle}>
            Introducing
            <br />
            <span>rywards points</span>
          </p>
          <div className={styles.pointsSubtitle} id="Download">
            <p>Multiple earning options, numerous redeeming options</p>
            <p className={styles.text}>
              Collect Rywards Points from Rywards Registered Outlets and convert
              them into Gift Cards of your choice.
            </p>
          </div>
          <div className={styles.pointsLink}>
            For more info, download the app
            <div className={styles.appLinks}>
              <Link href="https://apps.apple.com/in/app/rywards/id6449620229">
                <img src="AppStore.png" alt="App Store Link" />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.rywards.rywardsCustomerApp">
                <img src="PlayStore.png" alt="Play Store Link" />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.pointsImage}>
          <img src="Points.png" alt="Points" loading="lazy" />
        </div>
      </div>
      <div className={styles.AppScreen}>
        <img src="AppScreen.png" alt="App Screen" loading="lazy" />
      </div>
    </div>
  );
}
