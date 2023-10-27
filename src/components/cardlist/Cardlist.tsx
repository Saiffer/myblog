import React from 'react';
import styles from './cardlist.module.css';
import Pagination from '../pagination/Pagination';
import Card from '../card/Card';

const Cardlist = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    <Pagination />
    </div>
    
  )
}

export default Cardlist