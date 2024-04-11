import React, { useContext, useState, useEffect } from 'react';
import styles from './displayProduct.module.css';
import ContextApi from '../../Components/ContextApi/contextApi';
import DisplayProductContainer from '../../Components/DisplayProductContainer/displayProductContainer';

const DisplayProduct = () => {

    const context = useContext(ContextApi);
    const product = context.product;
    let displayProduct = null;
    // const displayProduct = product && product.length && <DisplayProductContainer product={product[0]} />

    if (product && product.length){
        displayProduct = <DisplayProductContainer product={product[0]}/>
    }
    else {
        displayProduct= <div className={styles.fallback}>
            <h2 className={styles.fallbackHeading}>No product found</h2>
        </div>
    }
    
    return (
        <div className={styles.wrapper}>
            {displayProduct}
        </div>
    )
}

export default DisplayProduct;

