import React from 'react';
import ReactDOM from 'react-dom';
import styles from './productContainerPortal.module.css'

const productContainerPortal = ({ displayProduct, children }) => {
    return ReactDOM.createPortal(<div className={displayProduct ? `${styles.productContainerPortal} ${styles.show}` : styles.productContainerPortal}>
        {children}
    </div>,
    document.getElementById('product-container'));
}

export default productContainerPortal;

