import React from 'react';
import styles from './drawToggle.module.css';
import QuoteLink from '../QuoteLink/quoteLink';
import DrawtoggleBtns from '../DrawtoggleBtns/drawtoggleBtns';

const DrawToggle = () => {

    return (
      <div className={styles.drawToggleContainer}>
        <div className={styles.quote}>
          <QuoteLink />
        </div>
        <DrawtoggleBtns />
      </div>
    )
}

export default DrawToggle;
