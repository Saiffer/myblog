import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './comments.module.css';

const Comments = () => {
    const status = "authenticated";
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
    {
        status === "authenticated" ? (
            <div className={styles.write}>
                <textarea placeholder="Write a comment..." className={styles.input}></textarea>
                <button className={styles.button}>Send</button>
            </div>
        ) : (<Link href="/login">Please Login to view comments</Link>)
    }
    <div className={styles.comments}>
        <div className={styles.comment}>
            <div className={styles.user}>
                <Image src="/p1.jpeg" alt="" className={styles.avatar} width={50} height={50}/>
                <div className={styles.userInfo}>
                    <span className={styles.username}>John Doe</span>
                    <span className={styles.date}>01.01.2023</span>
                </div>
            </div>
            <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
            </p>
        </div>
    </div>
    </div>
  )
}

export default Comments