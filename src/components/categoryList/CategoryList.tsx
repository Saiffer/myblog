import React from 'react';
import styles from './categoryList.module.css';
import Pagination from '../pagination/Pagination';

const CategoryList = () => {
  return (
    <div className={styles.container}>CategoryList
    <Pagination />
    </div>
  )
}

export default CategoryList