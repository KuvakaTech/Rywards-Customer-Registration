"use client";

import { useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navbarLogo}>
          <Link href="/" passHref>
            <img src="Logo.png" alt="Logo" />
          </Link>
        </div>
        <div className={open ? styles.navbarCollapse : styles.navbarMenu}>
          <div className={styles.navbarLinks}>
            <div className={styles.navbarButton}>
              <Link href="/" passHref>
                Contact Us
              </Link>
            </div>
            <div className={styles.navbarLink}>
              <Link href="/" passHref>
                For Business
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.navbarHamburger} onClick={() => setOpen(!open)}>
          {open ? (
            <img src="MobileMenuClose.png" alt="Logo" />
          ) : (
            <img src="MobileMenu.png" alt="Logo" />
          )}
        </div>
      </div>
    </div>
  );
}
