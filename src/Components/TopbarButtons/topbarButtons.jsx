import React from 'react';
import styles from './topbarButtons.module.css';
import DrawToggle from '../DrawToggle/drawToggle';
import ProductSelector from '../ProductSelector/productSelector';

const TopbarButtons = () => {
  return (
    <div className={styles.topbarButtonsContainer}>
        <ProductSelector />
        <DrawToggle />
    </div>
  )
}

export default TopbarButtons;
