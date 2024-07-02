import React from 'react';
import styles from './drawToggle.module.css';
import QuoteLink from '../QuoteLink/quoteLink';
import DrawtoggleBtns from '../DrawtoggleBtns/drawtoggleBtns';

const DrawToggle = () => {

    return (
      <div className={styles.drawToggleContainer}>
        <DrawtoggleBtns />
        <div className={styles.quote}>
          <QuoteLink />
        </div>
      </div>
    )
}

export default DrawToggle;
