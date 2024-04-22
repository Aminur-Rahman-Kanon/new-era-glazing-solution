import React from 'react';
import styles from './quoteLink.module.css';

const QuoteLink = () => {
    return (
        <div className={styles.quoteLinkContainer}>
            <a href="/request-quote" className={styles.quoteLink}>Get A Quote</a>
        </div>
    )
}

export default QuoteLink;
