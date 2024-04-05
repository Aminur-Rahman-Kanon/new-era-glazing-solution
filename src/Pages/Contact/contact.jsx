import React from 'react';
import styles from './contact.module.css';
import { Link } from 'react-router-dom';
import { focusElement, leaveFocus } from '../../Utilities/utilities';

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactHeading}>
                <div className={styles.headingItem}>
                    <h2 className={styles.headingItemH2}>NEW CUSTOMERS</h2>
                    <p className={styles.headingItemP}>Whether you’re looking for a quote, have a question about our products, or are looking for information about our glazing solutions, make sure that you get in touch.</p>
                    <div className={styles.headingItemLinkContainer}>
                        <Link to={'/request-quote'} className={styles.headingItemLink}>REQUEST A QUOTE</Link>
                        <Link to={'/brochure'} className={styles.headingItemLink}>FREE BROCHURE</Link>
                    </div>
                </div>
                <div className={styles.headingItem}>
                    <h3 className={styles.headingItemH3}>CALL US</h3>
                    <a href='tel:+447875531847' className={styles.headingItemTel}>+44 7875 531847</a>
                    <p className={styles.headingItemTelP}>Our lines are open Mon-Fri – 9am-5pm</p>
                </div>
                <div className={styles.headingItem}>
                    <h3 className={styles.headingItemH3}>VISIT A SHOWROOM</h3>
                    <p className={styles.headingItemShowroomP}>Select a showroom for details & opening times.</p>
                    <div className={styles.contactGroup}>
                        <p className={styles.headingItemContactP}><strong className={styles.strong}>LEEDS - </strong>0808 109 3528</p>
                        <p className={styles.headingItemContactP}><strong className={styles.strong}>ROMFORD - </strong>0808 109 3528</p>
                        <p className={styles.headingItemContactP}><strong className={styles.strong}>WEYBRIDGE - </strong>0808 109 3528</p>
                        <p className={styles.headingItemContactP}><strong className={styles.strong}>GLASGOW - </strong>0808 109 3528</p>
                    </div>
                </div>
            </div>
            <form className={styles.formWrapper}>
                <div className={styles.inputContainer}
                     onFocus={() => focusElement(0, styles)}
                     onBlur={() => leaveFocus(0, styles)}>
                    <span className={styles.label}>FULL NAME</span>
                    <input type='text' className={styles.input} placeholder='FULL NAME'/>
                </div>
                <div className={styles.inputContainer}
                     onFocus={() => focusElement(1, styles)}
                     onBlur={() => leaveFocus(1, styles)}>
                    <span className={styles.label}>EMAIL ADDRESS</span>
                    <input type='email' className={styles.input} placeholder='EMAIL ADDRESS'/>
                </div>
                <div className={styles.inputContainer}
                     onFocus={() => focusElement(2, styles)}
                     onBlur={() => leaveFocus(2, styles)}>
                    <span className={styles.label}>PHONE NUMBER</span>
                    <input type='number' className={styles.input} placeholder='PHONE NUMBER'/>
                </div>
                <div className={styles.inputContainer}
                     onFocus={() => focusElement(3, styles)}
                     onBlur={() => leaveFocus(3, styles)}>
                    <span className={styles.label}>FULL ADDRESS</span>
                    <input type='text' className={styles.input} placeholder='FULL ADDRESS'/>
                </div>
                <div className={styles.inputContainer}
                     onFocus={() => focusElement(4, styles)}
                     onBlur={() => leaveFocus(4, styles)} style={{height: 'auto'}}>
                    <span className={styles.label}>HOW CAN WE HELP?</span>
                    <textarea className={styles.input} placeholder='HOW CAN WE HELP?' rows={10}/>
                </div>
                <button className={styles.submitBtn}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Contact;
