import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        
        <Link href="https://facebook.com/" ><Image src="/facebook.png" alt="Facebook logo" width={24} height={24}/></Link>
        <Image src="/instagram.png" alt="Instagram logo" width={24} height={24}/>
        <Image src="/tiktok.png" alt="Tiktok logo" width={24} height={24}/>
        <Image src="/youtube.png" alt="Youtube logo" width={24} height={24}/>
      </div>
      <div className={styles.logo}>David's blog</div>
      <div className={styles.links}>
        <Link href="/">Homepage</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        
      </div>
    </div>
  )
}

export default Navbar;