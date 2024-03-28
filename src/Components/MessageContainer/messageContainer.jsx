import React from 'react';
import styles from './messageContainer.module.css';

const MessageContainer = ({ type, status, handler }) => {

    let displayMsg = null;

    if (type === 'request-asset' && status === 'success'){
        displayMsg = <div className={styles.wrapper}>
            <h2 className={styles.wrapperHeading}>Your query has been submitted</h2>
            <p className={styles.wrapperP}>Your request will be processed immidiately</p>
            <button className={styles.wrapperBtn} onClick={handler}>Ok</button>
        </div>
    }
    else if (type === 'request-asset' && status === 'failed'){
        displayMsg = <div className={styles.wrapper}>
            <h2 className={styles.wrapperHeading}>Something went wrong</h2>
            <p className={styles.wrapperP}>Please try again</p>
            <button className={styles.wrapperBtn} onClick={handler}>Ok</button>
        </div>
    }

    return (
        <div className={styles.messageContainer}>
            {displayMsg}
        </div>
    )
}

export default MessageContainer;
