import React from 'react';
import Image from 'next/image';
import Menu from '@/components/menu/Menu';
import styles from './singlePage.module.css';
import Comments from '@/components/comments/Comments';


const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
            facilisi cras fermentum odio eu feugiat. Urna molestie at elementum
            eu facilisis sed odio morbi quis. Sed nisi lacus sed viverra tellus
            in hac habitasse.
                </p>
                <h3>
                Lorem ipsum dolor sit amet
                </h3>
                <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
            facilisi cras fermentum odio eu feugiat. Urna molestie at elementum
            eu facilisis sed odio morbi quis. Sed nisi lacus sed viverra tellus
            in hac habitasse.
                </p>
                <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
            facilisi cras fermentum odio eu feugiat. Urna molestie at elementum
            eu facilisis sed odio morbi quis. Sed nisi lacus sed viverra tellus
            in hac habitasse.
                </p>
                </div>
                <div className={styles.comment}>
                <Comments />
                </div>
            </div>
            <Menu />
        </div>
    </div>
  )
}

export default SinglePage