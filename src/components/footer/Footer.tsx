import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="david blog" width={50} height={50} />
          <h1 className={styles.logoText}>DavidBlog</h1>
        </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
            facilisi cras fermentum odio eu feugiat. Urna molestie at elementum
            eu facilisis sed odio morbi quis. Sed nisi lacus sed viverra tellus
            in hac habitasse.
          </p>
          <div className={styles.icons}>
            <Image src="/facebook.png" alt="" width={18} height={18} />
            <Image src="/instagram.png" alt="" width={18} height={18} />
            <Image src="/tiktok.png" alt="" width={18} height={18} />
            <Image src="/youtube.png" alt="" width={18} height={18} />
          </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/blog">Food</Link>
          <Link href="/about">Travel</Link>
          <Link href="/contact">Coding</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/blog">Instagram</Link>
          <Link href="/about">Tiktok</Link>
          <Link href="/contact">Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer