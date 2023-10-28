import React from 'react';
import Cardlist from '@/components/cardlist/Cardlist';
import Menu from '@/components/menu/Menu';
import styles from './blogPage.module.css';


const BlogPage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            Style Blog
        </h1>
        <div className={styles.content}>
            <Cardlist />
            <Menu />
        </div>
    </div>
  )
}

export default BlogPage