"use client"

import React from 'react';
import styles from './loginPage.module.css';
import { signIn, useSession } from 'next-auth/react';

const LoginPage = () => {
    const {data, status} = useSession();

    console.log("I AM DATA", data)
    console.log("I AM STATUS", status)
    if(status === "loading") {
        return <div className={styles.loading}>Loading...</div>
    }
    
    if(status === "unauthenticated") {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.socialButton} onClick={()=>signIn("google")}>
                        Sign with Google
                    </div>
                    <div className={styles.socialButton}>
                        Sign with Github
                    </div>
                    <div className={styles.socialButton}>
                        Sign with Facebook
                    </div>
                </div>
            </div>
          )
    }

    if(status === "authenticated"){
        return <div className={styles.userLoggedIn}>User is already logged in - {data.user.name}</div>
    }
 
}

export default LoginPage