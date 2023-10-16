import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authlinks/AuthLinks";
import ThemeToggle from "../themetoggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
       
          <Image
            src="/facebook.png"
            alt="Facebook logo"
            width={24}
            height={24}
          />
      
        <Image
          src="/instagram.png"
          alt="Instagram logo"
          width={24}
          height={24}
        />
        <Image src="/tiktok.png" alt="Tiktok logo" width={24} height={24} />
        <Image src="/youtube.png" alt="Youtube logo" width={24} height={24} />
      </div>
      <div className={styles.logo}>David's blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
