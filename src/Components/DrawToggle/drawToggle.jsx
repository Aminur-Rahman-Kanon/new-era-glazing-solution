import React, { useContext } from 'react';
import styles from './drawToggle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ContextApi from '../ContextApi/contextApi';

const DrawToggle = () => {
  
    const context = useContext(ContextApi);

    return (
      <div className={styles.drawToggleContainer} onClick={context.sidedrawerHandler}>
          <span className={styles.text}>Menu</span>
          <FontAwesomeIcon icon={faBars} className={styles.drawToggle}/>
      </div>
    )
}

export default DrawToggle;
