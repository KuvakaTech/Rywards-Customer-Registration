"use client";

import styles from "./Footer.module.scss";
import Link from "next/link";
import {
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsFillEnvelopeFill,
} from "react-icons/bs";

type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src="FooterLogo.png" alt="Logo" />
          </div>
          <div className={styles.text}>
            A rewards app for savvy diners or shoppers. Earn points at
            registered outlets, redeem for high-value gift cards of any brand or
            outlets.
          </div>
          <button className={styles.footerBtn}>
            <Link href="#Download" passHref>
              Get Started
            </Link>
          </button>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>Pages</div>
          <div className={styles.link}>
            <Link href="/" passHref>
              Home
            </Link>
          </div>
          <div className={styles.link}>
            <Link href="/" passHref>
              For Merchant
            </Link>
          </div>
          <div className={styles.socialLinks}>
            <div className={styles.socialLink}>
              <Link href="https://www.linkedin.com/company/rywards" passHref>
                <BsLinkedin />
              </Link>
            </div>
            <div className={styles.socialLink}>
              <Link href="https://www.instagram.com/rywardsapp/" passHref>
                <BsInstagram />
              </Link>
            </div>
            <div className={styles.socialLink}>
              <Link href="https://twitter.com/rywardsapp" passHref>
                <BsTwitter />
              </Link>
            </div>
            <div className={styles.socialLink}>
              <Link href="mailto:contact@rywards.com" passHref>
                <BsFillEnvelopeFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
