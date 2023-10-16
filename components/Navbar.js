import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from '../styles/navbar.module.css';
import { useState, useEffect } from "react";
import  Cookies from "js-cookie";



const Navbar = (props) => {

  // Selecting cart from global state
  const cart = useSelector((state) => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  const [cookiesExist, setCookies] = useState('');

  useEffect(() => {
    setCookies(Cookies.get('loggedIn'));
  }, [])
  
  return (
    <nav className={styles.navbar}>
      <h6 className={styles.logo}><Link href="/">Gamerkart</Link></h6>
      {cookiesExist ? 
        <ul className={styles.links}>
          <li className={styles.navlink}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navlink}>
            <Link href="/shop">Shop</Link>
          </li>
          <li className={styles.navlink}>
            <Link href="/cart">
              <p>Cart ({getItemsCount()})</p>
            </Link>
          </li>
          <li className={styles.navlink}>
          <Link href="/shop">{cookiesExist}</Link>
          </li>
      </ul> : ''
      }
      
    </nav>
  );
};

export default Navbar;