import React from 'react';
import ReactDOM from 'react-dom';
import styles from './sidedrawerPortal.module.css'

const SidedrawerPortal = ({ sidedrawer, children }) => {

    return ReactDOM.createPortal(<div className={sidedrawer ? `${styles.wrapper} ${styles.show}` : styles.wrapper}>
        {children}
    </div>,
    document.getElementById('sidedrawer'));
}

export default SidedrawerPortal;
