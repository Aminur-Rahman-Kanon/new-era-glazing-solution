import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './displayProduct.module.css';
import ContextApi from '../../Components/ContextApi/contextApi';
import DisplayProductContainer from '../../Components/DisplayProductContainer/displayProductContainer';

const DisplayProduct = () => {

    const context = useContext(ContextApi);
    const product = context.product;
    let displayProduct = null;
    
    const { productId } = useParams();
    const [item, setItem] = useState({});
    
    useEffect(() => {
        if (product.length && productId) {
            const filteredItem = product.filter(i => i.title === productId);
            if (filteredItem.length){
                setItem(filteredItem[0]);
            }
        }
    }, [product, productId]);

    if (Object.keys(item).length){
        displayProduct = <DisplayProductContainer product={item}/>
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

