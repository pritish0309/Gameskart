import ProductCard from '../components/ProductCard';
import styles from '../styles/shoppage.module.css';
import { getProducts } from './api/products/index';
import Head from 'next/head';


const ShopPage = ({ products }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GamerKart ShopPage</title>
        <meta name="description" content="Meta description for the Shop page" />
      </Head>
      <h1 className={styles.title}>All Results</h1>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}