import React from "react";
import styles from './starContainer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarContainer = ({ star }) => {
    if (!star) return;

    const inActiveStar = 5 - star;
    let displayStar = null;

    if (inActiveStar){
        displayStar = Array.from(Array(star)).map((str, idx) => <FontAwesomeIcon key={idx} icon={faStar} className={styles.activeStar} />).concat(
            Array.from(Array(inActiveStar)).map((str, idx) => <FontAwesomeIcon key={5+idx} icon={faStar} className={styles.inActiveStar} />)
        )
    }
    else {
        displayStar = Array.from(Array(star)).map((str, idx) => <FontAwesomeIcon icon={faStar} className={styles.activeStar} />);
    }

    return (
        <div className={styles.starContainer}>
            {displayStar}
        </div>
    )
}

export default StarContainer;
