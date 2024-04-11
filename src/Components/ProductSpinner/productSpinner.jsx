import React from 'react';
import styles from './productSpinner.module.css';
import Spinner from '../Spinner/spinner';

const ProductSpinner = ({ spinner }) => {
    
    if (!spinner) return;

    return (
        <div className={styles.wrapper}>
            <Spinner spinner={spinner}/>
        </div>
    )
};

export default ProductSpinner;

