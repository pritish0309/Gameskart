import  Cookies from "js-cookie";
import styles from '../styles/registrationForm.module.css';
import { useState } from "react";
import { useRouter } from "next/router";
import Head from 'next/head';

const Login = () =>{
    const router = useRouter();

    var cookiesData = Cookies.get('userData');
    if (cookiesData) {
        var cookieOutput = JSON.parse(cookiesData);
    }

    const [formData , setFormData] = useState({
        username: '',
        email:'',
        password:''
    });

   
    
    var handleInputChange =(event)=>{
        var { name, value} = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        if (formData && cookieOutput) {
            if (formData.email == cookieOutput.email && formData.password == cookieOutput.password) {
                Cookies.set('loggedIn', cookieOutput.username, {expires : 1});
                router.push('/');
            }else{
                alert('Wrong Login Creditionals');
            }
        }else{
            alert('You should register first');
            router.push('/');
        }
    }

    return(
        <div className={styles.registration_container}>
            <Head>
                <title>GamerKart LoginPage</title>
                <meta name="description" content="Meta description for the Login page" />
            </Head>
            <h2>Login</h2>
            <form className={styles.registration_form} onSubmit={handleSubmit} id="register_form">
            <div className={styles.form_group}>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={styles.inputFields}
            />
            </div>
            <div className={styles.form_group}>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className={styles.inputFields}
            />
            </div>
            <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;