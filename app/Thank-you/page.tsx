"use client";

import { useEffect } from "react";
import styles from "@/styles/Thanks.module.scss";
import Link from "next/link";
import { Navbar, Footer } from "@/components";
import { Toaster, toast } from "react-hot-toast";

export default function Thanks() {
  useEffect(() => {
    toast.success("Data submitted successfully!", {
      style: {
        fontFamily: "DM Sans",
        fontWeight: "500",
      },
      duration: 3000,
    });
  }, []);

  return (
    <div className={styles.container}>
      <Toaster />
      <Navbar />
      <main className={styles.main}>
        <div className={styles.thanks}>
          <div className={styles.container}>
            <div className={styles.title}>Contact Us</div>
            <div className={styles.thanksContainer}>
              <div className={styles.left}>
                <div className={styles.image}>
                  <img src="Contact.png" alt="Contact" />
                </div>
                <div className={styles.subtitle}>Make life rewarding</div>
              </div>
              <div className={styles.thankYou}>
                <div className={styles.thankYouTitle}>
                  Thank you for contacting us!
                </div>
                <div className={styles.thankYouSubtitle}>
                  You will receive a response from our side within 48 hours.
                </div>
                <button className={styles.footerBtn}>
                  <Link href="/" passHref>
                    Back home
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
