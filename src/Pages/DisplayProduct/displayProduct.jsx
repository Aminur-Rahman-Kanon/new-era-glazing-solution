import React, { useContext, useState, useEffect } from 'react';
import styles from './displayProduct.module.css';
import ContextApi from '../../Components/ContextApi/contextApi';
import DisplayProductContainer from '../../Components/DisplayProductContainer/displayProductContainer';

const DisplayProduct = () => {

    const context = useContext(ContextApi);
    const product = context.product;
    const displayProduct = product && product.length && <DisplayProductContainer product={product[0]} />
    
    return (
        <div className={styles.wrapper}>
            {displayProduct}
        </div>
    )
}

export default DisplayProduct;

