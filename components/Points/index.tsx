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
              Collect from outlets and convert them into gift cards of your
              choice.
            </p>
          </div>
          <div className={styles.pointsLink}>
            For more info, download the app
            <div className={styles.appLinks}>
              <Link href="/">
                <img src="AppStore.png" alt="App Store Link" />
              </Link>
              <Link href="/">
                <img src="PlayStore.png" alt="Play Store Link" />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.pointsImage}>
          <img src="Points.png" alt="Points" />
        </div>
      </div>
      <div className={styles.AppScreen}>
        <img src="AppScreen.png" alt="App Screen" />
      </div>
    </div>
  );
}
