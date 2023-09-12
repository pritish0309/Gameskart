import { useState } from "react";
import styles from '../styles/registrationForm.module.css';
import  Cookies from "js-cookie";
import { useRouter } from "next/router";

const RegistrationForm = () =>{
    const router = useRouter();
    var cookiesValue = Cookies.get('IsLoggedIn');
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
        if (cookiesValue == undefined) {
            Cookies.set('IsLoggedIn', formData.username, {expires : 7});
            Cookies.set('userData', JSON.stringify(formData).replace(" ",''), {expires : 7});
            console.log('Cookie Create');
            console.log(formData);
        }
        router.push('/login');
    }

    return(
      <div className={styles.registration_container}>
      <h2>Register</h2>
      <form className={styles.registration_form} onSubmit={handleSubmit} id="register_form">
        <div className={styles.form_group}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            className={styles.inputFields}
          />
        </div>
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
        <button type="submit">Register</button>
      </form>
    </div>
    )
}

export default RegistrationForm;