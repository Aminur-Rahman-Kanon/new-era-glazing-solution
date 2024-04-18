import React, { useContext } from 'react';
import styles from './drawtoggleBtns.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ContextApi from '../ContextApi/contextApi';


const DrawtoggleBtns = () => {

    const context = useContext(ContextApi);

    return (
        <div className={styles.drawToggleBtn} onClick={context.sidedrawerHandler}>
          <span className={styles.text}>Menu</span>
          <FontAwesomeIcon icon={faBars} className={styles.drawToggle}/>
        </div>
    )
}

export default DrawtoggleBtns
