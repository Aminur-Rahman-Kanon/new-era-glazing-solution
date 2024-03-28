import React from 'react';
import styles from './logo.module.css';
import logo from '../../Assets/logo1.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' className={styles.logoContainer}>
        <img src={logo} alt='logo' className={styles.logo}/>
    </Link>
  )
}

export default Logo;
