import React, { useState, useEffect } from 'react';
import styles from './requestQuote.module.css';
import { items } from '../../Data/data';
import { focusElement, leaveFocus } from '../../Utilities/utilities';
import ContactFormContainer from '../../Components/ContactFormContainer/contactFormContainer';

const RequestQuote = () => {

    const [product, setProduct] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [numberValidation, setNumberValidation] = useState(true);
    const [email, setEmail] = useState('');
    const [emailValiditaion, setEmailValidation] = useState(true);
    const [address, setAddress] = useState('');
    const [btnDisable, setBtnDisable] = useState(true);

    const item = items.map(itm => <option key={itm} className={styles.item}>{itm}</option>)
    return (
        <div className={styles.wrapper}>
            <div className={styles.topHeader}>
                <h2 className={styles.topHeaderHeading}>REQUEST A QUOTE</h2>
                <p className={styles.topHeaderP}>We only need a few details in order to give you an estimate, but feel free to give us specific information to receive a more detailed quote.</p>
            </div>
            <div className={styles.bottomHeader}>
                <div className={styles.contactHeading}>
                    <div className={styles.headingItem}>
                        <h2 className={styles.headingItemH2}>CONTACT US</h2>
                        <h3 className={styles.headingMediumBlack}>new era glazing solution ltd</h3>
                        <span className={styles.textMediumBlack}><span className={styles.textMediumBold}>email:</span> info@neweraglazingsolutions.co.uk</span>
                        <span className={styles.textMediumBlack}><span className={styles.textMediumBold}>Address:</span> Unit 2, Midland House, 111-113 Victoria Road, London, Romford, RM1 2LX</span>
                    </div>
                    <div className={styles.headingItem}>
                        <h3 className={styles.headingItemH3}>CALL US</h3>
                        <a href='tel:+447875531847' className={styles.headingItemTel}>+44 7875 531847</a>
                        <p className={styles.headingItemTelP}>We are open Mon-Fri – 9am-5pm</p>
                    </div>
                </div>
                <div className={styles.form}>
                    <ContactFormContainer border={true}/>
                </div>
            </div>
        </div>
    )
}

export default RequestQuote;
