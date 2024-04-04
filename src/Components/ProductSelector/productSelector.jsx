import React, { useContext } from 'react';
import ContextApi from '../ContextApi/contextApi';
import styles from './productSelector.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubesStacked } from '@fortawesome/free-solid-svg-icons';

const ProductSelector = () => {

  const context = useContext(ContextApi);
  const toggleDisplayProduct = context.displayProductHandler;

  return (
    <div className={styles.productSelectorContainer} onClick={toggleDisplayProduct}>
      <FontAwesomeIcon icon={faCubesStacked} className={styles.icon}/>
      <span className={styles.text}>Select<br /> Products</span>
    </div>
  )
}

export default ProductSelector;
