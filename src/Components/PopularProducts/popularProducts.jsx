import React from "react";
import styles from './popularProducts.module.css';
import { popularProducts } from "../../Data/data";
import { Link } from "react-router-dom";

const PopularProducts = () => {

    const productDisplay = popularProducts.map((prd, idx) => <Link to={prd.link} key={idx} className={styles.productContainer}>
        <div className={styles.imgContainer}>
            <img src={prd.img} alt={prd.title} className={styles.productImg}/>
        </div>
        <div className={styles.headingContainer}>
            <span className={styles.title}>{prd.title}</span>
        </div>
    </Link>)

    return (
        <div className={styles.popularProductsContainer}>
            <h2 className={styles.heading}>Other Popular Products</h2>
            <div className={styles.wrapper}>
                {productDisplay}
            </div>
            <div className={styles.linkContainer}>
                <Link to={''} className={styles.link} >View The Full Product Collection</Link>
            </div>
        </div>
    )
}

export default PopularProducts;
