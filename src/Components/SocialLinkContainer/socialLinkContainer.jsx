import React from 'react';
import styles from './socialLinkContainer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const SocialLinkContainer = ({ iconColor }) => {
    return (
        <div className={styles.wrapper} style={{color: `${iconColor}`}}>
            <a href="" className={styles.socialIconContainer}>
                <FontAwesomeIcon icon={faSquareFacebook} className={styles.socialIcon} />
            </a>
            <a href="" className={styles.socialIconContainer}>
                <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
            </a>
            <a href="" className={styles.socialIconContainer}>
                <FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} />
            </a>
            <a href="" className={styles.socialIconContainer}>
                <FontAwesomeIcon icon={faYoutube} className={styles.socialIcon} />
            </a>
        </div>
    )
}

export default SocialLinkContainer;
