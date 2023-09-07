import CategoryCard from '../components/CategoryCard';
import RegistrationForm from '../components/RegistrationForm';
import styles from '../styles/home.module.css';
import Head from 'next/head';
import  Cookies from "js-cookie";
import { useState,useEffect } from "react";

const imageDetails = [
  {
    imageUrl : 'https://imgur.com/uKQqsuA.png',
    imageName : 'Xbox',
    imageAlt : 'Xbox Card'
  },{
    imageUrl : 'https://imgur.com/3Y1DLYC.png',
    imageName : 'PS5',
    imageAlt : 'PS5 Card'
  },{
    imageUrl : 'https://imgur.com/Dm212HS.png',
    imageName : 'Switch',
    imageAlt : 'Switch Card'
  },{
    imageUrl : 'https://imgur.com/qb6IW1f.png',
    imageName : 'PC',
    imageAlt : 'PC Card'
  },{
    imageUrl : 'https://imgur.com/HsUfuRU.png',
    imageName : 'Accessories',
    imageAlt : 'Accessories Card'
  }
]

const HomePage = () => {
  if (typeof window !== undefined) {
    var cookiesExist = Cookies.get('IsLoggedIn');
  }
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])
  return (
    <main className={styles.container}>
      {/* <Head>
        <title>GamerKart HomePage</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head> */}
      {
        mounted ? 
        cookiesExist ? <div className={styles.card_box}>
        {imageDetails.map((items,index)=>{
          return <CategoryCard image={items.imageUrl} name={items.imageName} alt={items.imageAlt} key={index}/>
        })}
        </div> : <RegistrationForm /> 
        :'' 
      }
    </main>
  );
};

export default HomePage;