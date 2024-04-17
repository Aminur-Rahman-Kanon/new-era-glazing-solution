import React, { useState, useContext } from 'react';
import ContextApi from '../ContextApi/contextApi';
import styles from './productContainer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/logo';
import DrawToggle from '../DrawToggle/drawToggle';
import { products, productImg } from '../../Data/data';
import { Link } from 'react-router-dom';
import ProductContainerPortal from '../ProductContainerPortal/productContainerPortal';

const ProductContainer = () => {

    const context = useContext(ContextApi);

    const displayProduct = context.displayProduct;
    const toggleDisplayProduct = context.displayProductHandler;

    const [prdImg, setPrdImg] = useState(productImg['XP View']);

    const product = products.map(prd => <div key={prd.id} className={styles.productListContainer}>
        <h2 className={styles.productHeading}>{prd.heading}</h2>
        <ul className={styles.products}>
            {prd.product.map((item, idx) => <li key={idx+10} className={styles.product} onMouseOver={() => setPrdImg(prd.img[0])}>
                <a href={'/products/xp view'} className={styles.productLink}>{item}</a>
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
                        <DrawToggle />
                    </div>
                </div>
                <div className={styles.wrapper2}>
                    <div className={styles.headingContainer}>
                        {product}
                    </div>
                    <div className={styles.productImgContainer} style={{backgroundImage: `url(${prdImg})`}}>
                        {/* <img src={prdImg} alt="new eera glazing solution ltd" className={styles.productImg} /> */}
                    </div>
                </div>
            </div>
        </ProductContainerPortal>
    )
}

export default ProductContainer;
