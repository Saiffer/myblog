import React from 'react';
import Image from 'next/image';
import styles from "./card.module.css";
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
            <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            </Link>
            <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
            facilisi cras fermentum odio eu feugiat. Urna molestie at elementum
            eu facilisis sed odio morbi quis. Sed nisi lacus sed viverra tellus
            in hac habitasse.
            </p>
            <Link href="/" className={styles.link}>Read More</Link>
          </div>
    </div>
  )
}

export default Card