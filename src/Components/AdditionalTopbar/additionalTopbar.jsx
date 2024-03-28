import React from 'react';
import styles from './additionalTopbar.module.css';
import { Link } from 'react-router-dom';

const AdditionalTopbar = () => {
  return (
    <>
    <div className={styles.additionalopbarContainer}>
        <div className={styles.leftItemContainer}>
            <span className={styles.leftItem}>0751 026 8021</span>
        </div>
        <div className={styles.rightItemContainer}>
            <Link to="/brochure" className={styles.rightItem}>Free Brochure</Link>
            <Link to={''} className={styles.rightItem}>Request Quote</Link>
            <Link to={''} className={styles.rightItem}>Contact/Visit</Link>
        </div>
    </div>
    <hr className={styles.hr} />
    </>
  )
}

export default AdditionalTopbar;
