import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import '../styles/global.css';
import { Provider } from 'react-redux';  
import store from '../redux/store'; 
import Head from 'next/head';
import  Cookies from "js-cookie";

function MyApp({ Component, pageProps }) {
  var cookieValue = Cookies.get('IsLoggedIn');
  return (<>
    <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Pritish Ghosh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <Provider store={store}>
    <div className="wrapper">
      <Navbar cookieValue={cookieValue}/>
      <Component {...pageProps}/>
      <Footer />
    </div>
    </Provider>
    </>
  );
}

export default MyApp;