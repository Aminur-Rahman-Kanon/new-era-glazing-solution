import React, { useContext } from 'react';
import styles from './drawToggle.module.css';
import ContextApi from '../ContextApi/contextApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const DrawToggle = () => {

  const context = useContext(ContextApi);

  return (
      <div className={styles.drawToggleBtn} onClick={context.sidedrawerHandler}>
        <FontAwesomeIcon icon={faBars} className={styles.drawToggle}/>
      </div>
  )
}

export default DrawToggle;
