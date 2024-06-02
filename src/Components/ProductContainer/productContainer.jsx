import React, { useState, useContext } from 'react';
import ContextApi from '../ContextApi/contextApi';
import styles from './productContainer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/logo';
import DrawtoggleBtns from '../DrawtoggleBtns/drawtoggleBtns';
import { products } from '../../Data/data';
import ProductContainerPortal from '../ProductContainerPortal/productContainerPortal';

const ProductContainer = () => {

    const context = useContext(ContextApi);

    const displayProduct = context.displayProduct;
    const toggleDisplayProduct = context.displayProductHandler;

    const [prdImg, setPrdImg] = useState(products[0].img[0]);

    const product = products.map(prd => <div key={prd.id} className={styles.productListContainer}>
        <h2 className={styles.productHeading}>{prd.heading}</h2>
        <ul className={styles.products}>
            {prd.product.map((item, idx) => <li key={idx+10} className={styles.product} onMouseOver={() => setPrdImg(prd.img[idx])}>
                <a href={`/products/${item}`} className={styles.productLink}>{item}</a>
            </li>)}
        </ul>
    </div>)

    return (
        <ProductContainerPortal displayProduct={displayProduct}>
            <div className={styles.productContainer}>
                <div className={styles.wrapper1}>
                    <div className={styles.xBtnContainer} onClick={toggleDisplayProduct}>
                        <FontAwesomeIcon icon={ faX } className={styles.xBtn}/>
                    </div>
                    <div className={styles.logoContainer}>
                        <Logo />
                    </div>
                    <div className={styles.drawtoggleContainer}>
                        <DrawtoggleBtns />
                    </div>
                </div>
                <hr className={styles.hr}/>
                <div className={styles.wrapper2}>
                    <div className={styles.headingContainer}>
                        {product}
                    </div>
                    <div className={styles.productImgContainer} style={{backgroundImage: `url(${prdImg})`}}>
                    </div>
                </div>
            </div>
        </ProductContainerPortal>
    )
}

export default ProductContainer;
