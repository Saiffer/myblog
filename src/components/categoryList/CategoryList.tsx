import React from 'react';
import styles from './categoryList.module.css';
import Image from 'next/image';
import Link from 'next/link';


const CategoryList = () => {
  const categoryListings = ["style","fashion","food", "travel", "culture", "coding"]
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
          {
            categoryListings.map((el) => {
              const categoryStyle = styles[el]
              return(
                <Link href={`/blog?cat=${el}`} className={`${styles.category} ${categoryStyle}`}>
                <Image src={`/${el}.png`} width={32} height={32} alt="" className={styles.image}/>
                {el}
              </Link>
              )
            })
          }
      </div>
    </div>
  )
}

export default CategoryList