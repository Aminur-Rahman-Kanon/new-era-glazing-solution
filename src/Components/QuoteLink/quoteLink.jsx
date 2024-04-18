import React from 'react';
import styles from './quoteLink.module.css';
import { Link } from 'react-router-dom';

const QuoteLink = () => {
    return (
        <div className={styles.quoteLinkContainer}>
            <Link to="/request-quote" className={styles.quoteLink}>Get A Quote</Link>
        </div>
    )
}

export default QuoteLink;
