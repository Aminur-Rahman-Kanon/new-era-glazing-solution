import React from 'react';
import styles from './topbarButtons.module.css';
import DrawToggle from '../DrawToggle/drawToggle';

const TopbarButtons = () => {
  return (
    <div className={styles.topbarButtonsContainer}>
        <DrawToggle />
    </div>
  )
}

export default TopbarButtons;
