import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/categoryCard.module.css';

const CategoryCard = ({ image, name ,alt}) => {
  return (
        <div className={styles.card}>
            <Image className={styles.image} src={image} height={400} width={400} alt={alt}/>
            <Link href={`/category/${name.toLowerCase()}`}>
            <div className={styles.info}>
              <h3>{name}</h3>
              <p>SHOP NOW</p>
            </div>
            </Link>
        </div>
   
  );
};
export default CategoryCard;