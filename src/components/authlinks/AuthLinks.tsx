"use client";

import React, { useState } from "react";
import styles from "./atuhLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const status = "notauthenticated";

  const [open, setOpen] = useState(false);

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">
              Login
            </Link>
          ) : (
            <>
              <Link href="/write">
                Write
              </Link>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
